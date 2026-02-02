#!/usr/bin/env python3

import argparse
import subprocess
from pathlib import Path


def get_deleted_files(repo_path: Path):
    """Return a list of deleted file paths from git diff."""
    result = subprocess.run(
        ["git", "diff", "--name-status"],
        cwd=repo_path,
        capture_output=True,
        text=True,
        check=True,
    )

    deleted = []
    for line in result.stdout.splitlines():
        status, file_path = line.split("\t", 1)
        if status == "D":
            deleted.append(file_path)

    return deleted


def find_references(search_root: Path, filenames):
    """Search for references to filenames in all text files under search_root."""
    hits = {}

    for path in search_root.rglob("*"):
        if not path.is_file():
            continue

        try:
            text = path.read_text(errors="ignore")
        except Exception:
            continue

        for name in filenames:
            if name in text or Path(name).name in text:
                hits.setdefault(name, []).append(path)

    return hits


def main():
    parser = argparse.ArgumentParser(
        description="Check whether deleted git files are referenced elsewhere."
    )
    parser.add_argument("--repo", required=True, help="Path to git repository")
    parser.add_argument(
        "--search-root",
        required=True,
        help="Folder to search for references",
    )

    args = parser.parse_args()

    repo_path = Path(args.repo).resolve()
    search_root = Path(args.search_root).resolve()

    deleted_files = get_deleted_files(repo_path)

    if not deleted_files:
        print("No deleted files found in git diff.")
        return

    print(f"Deleted files ({len(deleted_files)}):")
    for f in deleted_files:
        print(f"  - {f}")

    print("\nSearching for references...\n")

    hits = find_references(search_root, deleted_files)

    if not hits:
        print("✅ No references found.")
        return

    print("⚠️ References found:\n")
    for deleted, locations in hits.items():
        print(f"{deleted}:")
        for loc in locations:
            print(f"  -> {loc}")


if __name__ == "__main__":
    main()
