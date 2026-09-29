---
cover-image: https://placehold.co/600x400/png
date: 2025-01-01
domain: Sustainable Cities
tags: noise, road traffic, AI, machine learning, satellite imagery, urban planning
provider: Virtual Vehicle Research GmbH, Spatial Services GmbH, ALP.Lab GmbH
---

# NoiseSphere <!--{ as="img" mode="hero" src="https://placehold.co/600x400/png" }-->
### AI-powered noise mapping — understanding road traffic noise from space <!--{ style="font-size:1.5rem;opacity:0.7;margin-top:1rem;" }-->

## The Soundscape We Live In: The Invisible Challenge

For millions of European citizens, environmental noise is not an abstract statistical metric — it is the persistent, grinding backdrop of daily life. Road traffic noise disrupts restorative sleep, elevates stress hormones, and contributes measurably to cardiovascular illnesses. Yet when residents or urban planners ask a simple question — *"How loud is our street right now, and how has recent traffic growth changed that?"* — the answer is remarkably often met with silence.

<!-- [PLACEHOLDER: Human input - Insert verified local case example here. E.g., describe a real-world scenario from Graz or surrounding communities: A specific residential or mixed-use neighborhood situated near a traffic feeder or newly developed commercial zone where residents report severe sleep disruption, yet no official monitoring data exists to substantiate municipal mitigation measures.] -->

### The Regulatory Blind Spot

Under the European Environmental Noise Directive (END, Directive 2002/49/EC), public authorities are legally mandated to compute **strategic noise maps**. However, these regulatory maps come with strict boundaries:
- They are required only once every **five years**.
- They are mandatory primarily for major agglomerations exceeding **100,000 inhabitants** and high-volume transport corridors carrying over **3,000,000 vehicles per year**.

As a consequence, the vast majority of our road networks — secondary urban streets, growing suburban towns, and inter-municipal transit links — remain completely unmapped. Even where strategic maps do exist, they represent computationally intensive, retrospective snapshots rather than dynamic, living representations of urban noise.

<!-- [PLACEHOLDER: Human input - Insert quote or practical observation from an urban planner, acoustician, or community representative regarding the high cost, delay, or logistical hurdles of traditional physics-based noise simulation campaigns.] -->

Furthermore, traditional simulation models (such as CNOSSOS-EU) often operate under standardized, precautionary assumptions that can diverge significantly from acoustic reality — tending to systematically overestimate nighttime noise while missing localized traffic dynamics. 

NoiseSphere was initiated to transform this paradigm: converting openly available Earth Observation data and artificial intelligence into a continuous, adaptable, and scalable noise monitoring capability.


## Proposed Solution

NoiseSphere bridges this gap by combining satellite imagery, road network data, and in-situ noise measurements with artificial intelligence to generate automated noise heatmaps — for any area, not just those covered by legal requirements.

The core idea is to teach a machine learning model what noise patterns look like based on the features visible from space: the density and type of roads, the surrounding land use and buildings, vegetation cover, and speed limits. Once trained, the model can predict noise levels for areas where no official measurements exist.

This approach is:
- **Scalable**: the same model can be applied to any city or region
- **Flexible**: it works even where no legal noise mapping is mandated
- **Updateable**: as new satellite data and traffic information become available, the maps can be refreshed without costly measurement campaigns

In-situ noise measurements are used to ground-truth and validate both the model predictions and the official strategic noise maps, providing an independent check on their accuracy.

## How It Works

### Input Data

NoiseSphere combines three types of data into a unified geospatial grid at 10 × 10 m resolution:

1. **Satellite imagery** processed through the [color33](https://app.color33.io) spectral classification system, which identifies land surface types such as vegetation, built-up areas, water, and bare soil from Sentinel-2 satellite data.

2. **OpenStreetMap (OSM) road network data**, including road categories and legally permitted maximum speeds — a proxy for typical traffic volumes and noise emission levels.

3. **Strategic road traffic noise maps** from the Austrian INSPIRE geo-metadata database, used as the reference (ground truth) for model training and evaluation.

All layers are rasterized onto the same 10 × 10 m grid, enabling pixel-by-pixel comparison and prediction.

### The AI Model

A **Convolutional Neural Network (CNN)** was selected as the core modelling architecture due to its ability to learn spatial patterns from image-like input data. The model works by analysing small tiles of 210 × 210 m around each location, capturing both the immediate surroundings and the broader context needed to estimate how noise spreads.

To handle the inherently ordered nature of noise levels — where being "one class off" (e.g. predicting 55–60 dB instead of 60–65 dB) is far less serious than being multiple classes off — the model is trained with a **CORAL loss function** that explicitly accounts for this ordinal structure. This produces physically consistent predictions, where errors tend to occur between neighbouring noise categories rather than across the full range.

The model is complemented by a **Random Forest (RF)** classifier that serves as a baseline comparison, offering a simpler but robust alternative for areas with less complex noise environments.

### Validation

Validation was carried out using **in-situ noise measurements** at selected locations across Graz, Austria, representing a range of acoustic environments — from quiet residential streets to busy inner-city junctions. Measurements were compared against both the strategic noise map and the AI model predictions.

Key findings:
- The **strategic noise map** tends to **overestimate** actual noise levels, particularly at night — by up to 10–15 dB at some locations. This is consistent with its precautionary regulatory design.
- The **AI model** performs well in moderate noise environments and near road infrastructure but currently **underestimates at high-traffic inner-city sites** and **overestimates in quieter residential areas**, indicating that further training data from diverse urban environments is needed.
- Both approaches correctly capture the broad spatial structure of noise distribution and respect the ordinal ordering of noise classes.

## Results

The study demonstrates that AI-based noise mapping is a viable and scalable complement to traditional strategic noise maps. The approach is particularly promising for:

- **Areas outside legal mapping obligations** — smaller towns, rural corridors, and residential streets that are currently invisible to official noise monitoring
- **More frequent updates** — without the cost and effort of repeated measurement campaigns
- **Evaluating the effects of traffic interventions** — such as speed limit changes, modal shifts to public transport, or new road infrastructure

## About

### Provider

NoiseSphere is a joint research project developed by:

- [**Virtual Vehicle Research GmbH**](https://www.v2c2.at) — lead partner, responsible for AI model development and system integration
- [**Spatial Services GmbH**](https://www.spatial-services.com) — geospatial data processing and satellite data integration
- [**ALP.Lab GmbH**](https://www.alp-lab.at) — vehicle movement data and traffic analysis

The work was carried out in Graz, Austria, and is part of the **"Digitaler Zwilling Österreich"** (Digital Twin Austria) programme funded by the Austrian Federal Ministry for Innovation, Mobility and Infrastructure (BMIMI).

Additional funding was provided within the **COMET K2** Competence Centers for Excellent Technologies programme by the Austrian Federal Ministry for Economy, Energy and Tourism (BMWET), the Province of Styria (Dept. 12), the Styrian Business Promotion Agency (SFG), and the Austrian Research Promotion Agency (FFG).

### References

1. Stansfeld SA. Noise pollution: non-auditory effects on health. *Br Med Bull*. 2003;68:243–57
2. Van Kempen EE et al. The association between noise exposure and blood pressure and ischemic heart disease: a meta-analysis. *Environ Health Perspect*. 2002;110:307–17
3. EU Directive 2002/49/EG relating to the assessment and management of environmental noise
4. Eicher et al. Traffic Noise Estimation from Satellite Imagery with Deep Learning. *IGARSS* 2022

## Legals

The NoiseSphere narrative and underlying research are © Virtual Vehicle Research GmbH, Spatial Services GmbH, and ALP.Lab GmbH. When referencing results from NoiseSphere in publications or websites, please cite the associated manuscript: *26SNVH-0048 — NoiseSphere: KI-gestützte makroskopische Lärmkartierung*.

## Subscription Information

NoiseSphere is currently in a **research and pre-commercial phase**. The service is not yet available as a commercial subscription. For enquiries about pilot deployments, data access, or collaboration opportunities, please contact the project team.

Access to NoiseSphere data layers via the GTIF platform is available for exploration. For further information, contact [Spatial Services GmbH](https://www.spatial-services.com).
