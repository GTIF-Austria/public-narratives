import os
import re
import json
import sys
import yaml
import requests
from io import BytesIO
from PIL import Image
from urllib.parse import urlparse, unquote
import uuid
import cv2
import tempfile

# Get base URL from command-line argument or set a default
BASE_URL = (
    sys.argv[1]
    if len(sys.argv) > 1
    else "https://gtif-austria.github.io/public-narratives/"
)


def url_to_safe_filename(url, suffix="preview.png"):
    parsed_url = urlparse(url)
    # Extract and decode the base file name from the path
    filename = os.path.basename(parsed_url.path)
    filename = unquote(filename)  # Decode URL-encoded parts

    # Remove query parameters if accidentally included in filename
    filename = filename.split("?")[0].split("#")[0]

    # Remove extension and append your custom suffix
    name_root = os.path.splitext(filename)[0]

    # Replace unsafe characters with underscores
    safe_name = re.sub(r"[^A-Za-z0-9._-]", "_", name_root)

    my_id = str(uuid.uuid4())
    # Add counter and suffix
    return f"{safe_name}_{my_id}_{suffix}"


def fetch_and_resize_media(media_url, output_dir, target_width):
    try:
        # Extract filename
        file_name = url_to_safe_filename(media_url)
        if not file_name:
            file_name = f"media_{uuid.uuid4()}_preview.png"
        else:
            base_name, _ = os.path.splitext(file_name)
            file_name = f"{base_name}_preview.png"

        # Download the file
        response = requests.get(media_url, timeout=10)
        response.raise_for_status()

        content_type = response.headers.get("Content-Type", "").lower()

        # Create output path
        os.makedirs(output_dir, exist_ok=True)
        output_path = os.path.join(output_dir, file_name)

        # If it's an image
        if "image" in content_type:
            img = Image.open(BytesIO(response.content))

        # If it's a video
        elif "video" in content_type:
            # Write video to temporary file
            with tempfile.NamedTemporaryFile(delete=False, suffix=".mp4") as tmp_video:
                tmp_video.write(response.content)
                tmp_video_path = tmp_video.name

            # Read the first frame
            cap = cv2.VideoCapture(tmp_video_path)
            success, frame = cap.read()
            cap.release()
            os.remove(tmp_video_path)

            if not success:
                raise ValueError("Could not read frame from video")

            # Convert BGR (OpenCV) to RGB (PIL)
            frame_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
            img = Image.fromarray(frame_rgb)

        else:
            raise ValueError("Unsupported media type")

        # Resize while preserving aspect ratio
        w_percent = target_width / float(img.size[0])
        h_size = int(float(img.size[1]) * w_percent)
        img = img.resize((target_width, h_size), Image.LANCZOS)

        # Save image
        img.save(output_path)
        relpath = os.path.join("assets/previews", file_name)
        return os.path.relpath(relpath, start=".").replace("\\", "/")

    except Exception as e:
        print(f"[warn] Couldn't load/resize media from URL {media_url}: {e}")
        return None


def extract_metadata(file_path, base_url):
    """Extracts frontmatter metadata, first H1, first H3, and image URL from a Markdown file."""
    metadata = {}
    h1, h3, img_url = "", "", ""
    filename = os.path.basename(file_path)
    file_url = base_url.rstrip("/") + "/" + filename  # Ensure proper URL format

    with open(file_path, "r", encoding="utf-8") as file:
        content = file.read()

    # Extract frontmatter metadata (YAML-like block at the start)
    frontmatter_match = re.match(r"^---\n(.*?)\n---", content, re.DOTALL)
    if frontmatter_match:
        frontmatter_text = frontmatter_match.group(1)
        try:
            metadata = yaml.safe_load(frontmatter_text)  # Convert to dictionary
        except yaml.YAMLError:
            print(f"Warning: Could not parse frontmatter in {file_path}")

    # Extract first H1 header
    h1_match = re.search(r"^# (.+?)(?:\s*<!--|[\r\n]+)", content, re.MULTILINE)
    if h1_match:
        h1 = h1_match.group(1)

    # Extract first H3 header
    h3_match = re.search(r"^### (.+?)(?:\s*<!--|[\r\n]+)", content, re.MULTILINE)
    if h3_match:
        h3 = h3_match.group(1)

    # Check if cover-image available in frontmatter if not extract first image URL
    if "cover-image" in metadata:
        img_url = metadata["cover-image"]
    else:
        img_match = re.search(r"!\[.*?\]\((.*?)\)", content)
        if img_match:
            img_url = img_match.group(1)
    if img_url:
        preview_url = fetch_and_resize_media(
            img_url, "output/assets/previews", 400
        )
    else: 
        preview_url = None

    # Merge extracted metadata
    metadata.update({"file": file_url, "title": h1, "subtitle": h3, "image": preview_url})

    return metadata


# Create output directory
output_dir = "output"
os.makedirs(output_dir, exist_ok=True)

# Process all Markdown files
metadata_list = []
for root, _, files in os.walk("."):
    for file in files:
        if file.endswith(".md") and file != "README.md" and "scripts" not in root:
            file_path = os.path.join(root, file)
            metadata = extract_metadata(file_path, BASE_URL)
            if any(metadata.values()):
                metadata_list.append(metadata)


# Save JSON metadata
with open(
    os.path.join(output_dir, "narratives.json"), "w", encoding="utf-8"
) as json_file:
    json.dump(metadata_list, json_file, indent=2, ensure_ascii=False, default=str)
