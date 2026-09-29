---
cover-image: https://raw.githubusercontent.com/project-noisesphere/public-narratives/project-noisesphere/addnoisesphereproject/assets/noisesphere/figure1_concept.png
date: 2025-01-01
domain: Sustainable Cities
tags: noise, road traffic, AI, machine learning, satellite imagery, urban planning
provider: Virtual Vehicle Research GmbH, Spatial Services GmbH, ALP.Lab GmbH
---

# NoiseSphere <!--{ as="img" data-fallback-src="https://raw.githubusercontent.com/GTIF-Austria/public-narratives/refs/heads/main/assets/noisesphere/figure1_concept.png" mode="hero" src="https://raw.githubusercontent.com/project-noisesphere/public-narratives/project-noisesphere/addnoisesphereproject/assets/noisesphere/figure1_concept.png" }-->
### AI-powered noise mapping — understanding road traffic noise from space <!--{ style="font-size:1.5rem;opacity:0.7;margin-top:1rem;" }-->

## The Soundscape We Live In: The Invisible Challenge

For millions of European citizens, environmental noise is not an abstract statistical metric — it is the persistent, grinding backdrop of daily life. Road traffic noise disrupts restorative sleep, elevates stress hormones, and contributes measurably to cardiovascular illnesses. Yet when residents or urban planners ask a simple question — *"How loud is our street right now, and how has recent traffic growth changed that?"* — the answer is remarkably often met with silence.

### The Regulatory Blind Spot

Under the European Environmental Noise Directive (END, Directive 2002/49/EC), public authorities are legally mandated to compute **strategic noise maps**. However, these regulatory maps come with strict boundaries:
- They are required only once every **five years**.
- They are mandatory primarily for major agglomerations exceeding **100,000 inhabitants** and high-volume transport corridors carrying over **3,000,000 vehicles per year**.

As a consequence, the vast majority of our road networks — secondary urban streets, growing suburban towns, and inter-municipal transit links — remain completely unmapped. Even where strategic maps do exist, they represent computationally intensive, retrospective snapshots rather than dynamic, living representations of urban noise.

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

## Input Data: The Multi-Layer Spatial Stack <!--{ as="eox-map" mode="tour" }-->

### <!--{ layers='[{"type":"Tile","properties":{"id":"osm"},"source":{"type":"OSM"}}]' center=[15.4395,47.0707] zoom="12" animationOptions="{duration:500}" }-->
#### 1. Study Area: Graz, Austria
The pilot deployment and empirical evaluation of NoiseSphere was conducted across the city of Graz, Austria. Graz features a diverse urban morphology ranging from dense historic fabric and congested public transport interchanges (such as Jakominiplatz) to primary transit corridors and quieter residential perimeter zones. While major arteries are captured by regulatory noise reporting, peripheral links and intermediate streets remain largely unmonitored.

### <!--{ layers='[{"type":"Tile","properties":{"id":"cloudless-2024;:;EPSG:3857","title":"EOxCloudless 2024"},"source":{"type":"XYZ","url":"https://s2maps-tiles.eu/wmts/1.0.0/s2cloudless-2024_3857/default/g/{z}/{y}/{x}.jpeg","projection":"EPSG:3857"}},{"type":"Tile","properties":{"id":"overlay_bright;:;EPSG:3857","title":"Overlay labels"},"source":{"type":"XYZ","url":"https://s2maps-tiles.eu/wmts/1.0.0/overlay_base_bright_3857/default/g/{z}/{y}/{x}.png","projection":"EPSG:3857"}}]' center=[15.4395,47.0707] zoom="12.5" animationOptions="{duration:500}" }-->
#### 2. Multispectral Sentinel-2 Earth Observation
Multispectral Earth observation imagery from the European Copernicus Sentinel-2 constellation establishes the optical baseline at 10 × 10 m resolution. Sentinel-2’s ~5-day revisit cycle provides dense temporal coverage across the visible and near-infrared spectrum. Four cloud-free reference acquisitions across 2022 (February, March, June, October) were analyzed to capture seasonal variations in vegetation cover and surface reflectivity.

### <!--{ layers='[{"type":"Tile","properties":{"id":"terrain-light;:;EPSG:3857","title":"Terrain light"},"source":{"type":"XYZ","url":"https://s2maps-tiles.eu/wmts/1.0.0/terrain-light_3857/default/g/{z}/{y}/{x}.jpeg","projection":"EPSG:3857"}},{"type":"Tile","properties":{"id":"overlay_bright;:;EPSG:3857","title":"Overlay labels"},"source":{"type":"XYZ","url":"https://s2maps-tiles.eu/wmts/1.0.0/overlay_base_bright_3857/default/g/{z}/{y}/{x}.png","projection":"EPSG:3857"}}]' center=[15.4395,47.0707] zoom="13" animationOptions="{duration:500}" }-->
#### 3. Spectral Semantic Categorization (color33)
Raw optical bands are translated into physical land surface properties using [color33](https://app.color33.io). Unlike black-box clustering, color33 applies a rule-based physical model to identify stable spectral categories (including sealed built-up surfaces, tree canopy, low vegetation, bare ground, and water). These categories directly determine acoustic ground impedance, sound absorption, and multi-path reflection behavior in the outdoor environment.

### <!--{ layers='[{"type":"Tile","properties":{"id":"terrain-light;:;EPSG:3857","title":"Terrain light"},"source":{"type":"XYZ","url":"https://s2maps-tiles.eu/wmts/1.0.0/terrain-light_3857/default/g/{z}/{y}/{x}.jpeg","projection":"EPSG:3857"}},{"type":"Tile","properties":{"id":"overlay_bright;:;EPSG:3857","title":"Overlay labels"},"source":{"type":"XYZ","url":"https://s2maps-tiles.eu/wmts/1.0.0/overlay_base_bright_3857/default/g/{z}/{y}/{x}.png","projection":"EPSG:3857"}}]' center=[15.4395,47.0707] zoom="13" animationOptions="{duration:500}" }-->
#### 4. Temporal Aggregation: Mode Layer 2022
To eliminate transient anomalies such as clouds, cloud shadows, and temporary surface alterations, all Sentinel-2 acquisitions throughout the full year 2022 were aggregated pixel-by-pixel. By selecting the statistical mode (the most frequently observed spectral class for each 10 × 10 m cell), NoiseSphere derives a robust, cloud-free baseline layer characterizing long-term surface properties influencing sound propagation.

### <!--{ layers='[{"type":"Tile","properties":{"id":"osm"},"source":{"type":"OSM"}}]' center=[15.4395,47.0707] zoom="13.5" animationOptions="{duration:500}" }-->
#### 5. OpenStreetMap Infrastructure & Speed Limits
Road traffic is the dominant driver of urban noise emissions. OpenStreetMap (OSM) vector data provides the road topology, road classification (motorways, primary roads, secondary routes, residential access), and legal maximum speed limits. Extracted as a georeferenced graph, these attributes are clustered and rasterized onto the identical 10 × 10 m grid, serving as primary proxies for traffic volume and tire-pavement rolling noise.

### <!--{ layers='[{"type":"Tile","properties":{"id":"osm"},"source":{"type":"OSM"}}]' center=[15.4395,47.0707] zoom="12" animationOptions="{duration:500}" }-->
#### 6. Strategic Noise Reference Maps (Lärminfo.at / INSPIRE)
Official strategic road traffic noise maps from the Austrian INSPIRE portal ([Laerminfo.at](https://www.laerminfo.at)) provide the reference data for supervised training and evaluation. Classified in 5 dB bins (<55 dB to >75 dB) and rasterized to the common 10 × 10 m grid, these maps offer high-quality reference data for major roads — while clearly illustrating the administrative boundary where official data ceases outside the municipal core.

<!-- [SUGGESTION / PLACEHOLDER: Connect directly to the Laerminfo.at / INSPIRE WMS service layer (or EOX-hosted GeoTIFF) here to visually overlay the official 5 dB strategic noise contours for Graz.] -->

## The AI Model: Learning Noise from Space

### End-to-End Processing Pipeline

To train an AI model capable of predicting noise levels from spaceborne and geospatial observations, heterogeneous data sources are harmonized into a uniform spatial schema. Multispectral Sentinel-2 imagery is converted into semantic spectral classes via [color33](https://app.color33.io), while OpenStreetMap vector graphs provide road classifications and legal speed categories. Official strategic noise maps from Laerminfo.at provide 5 dB ground truth labels. All inputs are rasterized onto the identical 10 × 10 m grid, creating multi-channel feature stacks for supervised training and macroscopic inference.

![Figure 2: Data pipeline for automated noise mapping](https://raw.githubusercontent.com/project-noisesphere/public-narratives/project-noisesphere/addnoisesphereproject/assets/noisesphere/figure2_data_pipeline.png)
*Figure 2: End-to-end data processing pipeline fusing Sentinel-2 Earth observation, color33 semantic land classes, OpenStreetMap road topology, and strategic noise maps onto a uniform 10 × 10 m grid.*

### Multi-Channel Acoustic Tiles (210 × 210 m)

Noise prediction is performed for the center pixel of a 21 × 21 pixel tile (210 × 210 m). The tile size is derived directly from acoustic physics: assuming peak road traffic sound levels of ~80 dB at 2 m from the source and an attenuation of ~6 dB per distance doubling, sound levels drop below the 50 dB threshold within ~65 m. A 100 m buffer in every direction provides sufficient spatial context to capture emission sources, sound barriers, building morphology, and ground attenuation.

![Figure 3: Multi-channel acoustic input tiles](https://raw.githubusercontent.com/project-noisesphere/public-narratives/project-noisesphere/addnoisesphereproject/assets/noisesphere/figure3_input_tiles.png)
*Figure 3: Exemplary 21 × 21 pixel (210 × 210 m) multi-channel input tiles showing color33 spectral categorization, OpenStreetMap road geometry, speed limits, and target noise masks.*

### Architecture Comparison: CNN vs. Random Forest

Evaluating two distinct model paradigms reveals fundamental acoustic trade-offs:
- **Convolutional Neural Network (CNN)**: Because CNN convolutional kernels capture spatial context and multi-pixel neighborhoods, the model successfully reproduces continuous sound propagation away from traffic corridors into adjacent blocks. However, in regions outside official training labels, edge-related boundary artifacts can emerge.
- **Random Forest (RF)**: Provides sharp, reliable classification along road centerlines without boundary artifacts, but lacks continuous sound decay into surrounding terrain, causing noise levels to drop off abruptly beyond the road verge.

![Figures 6 and 7: Predicted noise maps for CNN vs. Random Forest](https://raw.githubusercontent.com/project-noisesphere/public-narratives/project-noisesphere/addnoisesphereproject/assets/noisesphere/figure6_figure7_spatial_comparison.png)
*Figures 6 & 7: Predicted noise distributions across Graz. Left: Convolutional Neural Network (CNN) modeling continuous sound propagation away from road corridors. Right: Random Forest (RF) classifier producing sharp road lines without continuous sound decay.*

### Ordinal Consistency & CORAL Loss Formulation

Environmental noise levels are inherently ordinal: misclassifying a 55–60 dB zone as 60–65 dB reflects a minor transition error, whereas misclassifying it as >75 dB would be a severe physical failure.
- By training the CNN with a **CORAL (COntinuous RAnked Logits)** loss function, the model penalizes non-adjacent class jumps.
- As demonstrated in the confusion matrix, top-1 accuracy exceeds 48% across all categories (reaching 84% in the <55 dB quiet class), and errors are confined almost entirely to immediately neighboring categories, ensuring physically plausible predictions across the full urban spectrum.

![Figures 5 and 8: Confusion matrices for CNN and Random Forest](https://raw.githubusercontent.com/project-noisesphere/public-narratives/project-noisesphere/addnoisesphereproject/assets/noisesphere/figure5_figure8_confusion_matrices.png)
*Figures 5 & 8: Confusion matrix analysis. Left: CNN trained with CORAL (COntinuous RAnked Logits) loss confining errors to adjacent classes. Right: Random Forest baseline.*

## Validation & Real-World Ground Truth

Validation was carried out using empirical **in-situ noise measurements** across Graz, Austria, contrasting real-world acoustic ground truth against both official strategic noise maps (Lärminfo.at / CNOSSOS-EU) and the NoiseSphere AI predictions.

### Measurement Methodology & Sensor Setup

To capture authentic soundscapes across varying urban fabrics, the research team conducted dedicated on-site acoustic monitoring:
- **Sensor Technology**: Measurements were recorded using **Bernard Sound Analyzer (BSA)** sensors — compact, weatherproof, and energy-efficient units (<10 W power consumption) designed for continuous environmental monitoring.
- **Standardized Mounting**: Sensors were installed directly on municipal lighting poles at a reference height of **4.0 meters** above ground level, adhering strictly to **ISO 1996-2:2017** (*Acoustics — Description, measurement and assessment of environmental noise*).
- **Measurement Protocol**: 24-hour continuous acoustic logging with a high temporal sampling rate (~2.4-second intervals) conducted under strictly dry meteorological conditions to prevent tire-water splash from distorting pavement rolling acoustics.
- **Acoustic Indicators**: Sound pressure levels ($L_{\text{eq}}$) were aggregated into European standard indicators ($L_{\text{day}}$, $L_{\text{evening}}$, $L_{\text{night}}$, and $L_{\text{den}}$).
- **Spatial Data Integration**: The calibrated point measurements are compiled in an open GeoPackage (`in-situ_noise_measurements_points.gpkg`) and will be served dynamically as interactive WMS/WFS layers on the GTIF platform.

<!-- [WMS/WFS SERVICE PLACEHOLDER: Connect dynamic WMS/WFS endpoint for in-situ measurement points once published on GTIF] -->

## In-Situ Ground Truth Tour <!--{ as="eox-map" mode="tour" }-->

### <!--{ layers='[{"type":"Tile","properties":{"id":"osm"},"source":{"type":"OSM"}}]' center=[15.443,47.067] zoom="16.5" animationOptions="{duration:500}" }-->
#### 1. Urban Transit Hub: Jakominiplatz
Jakominiplatz serves as Graz's central public transport hub, featuring dense pedestrian flows, converging tram corridors, and frequent bus acceleration.
- **Empirical Measurement (BSA)**: Measured **76.2 dB** over 24 hours ($L_{\text{den}}$ of 78.4 dB), dropping to **53.7 dB** at night when transit frequencies decrease.
- **Official Strategic Map**: Indicates **70–75 dB** during daytime (slightly underestimating peak multi-modal acceleration and rail squeal) and **65–70 dB** at night — **overestimating nighttime noise by 10–15 dB** due to precautionary standardized assumptions.
- **NoiseSphere AI Model**: Predicts **55–60 dB**. While capturing the general road corridor, the vision model currently underestimates complex multi-modal transit junctions where rail and bus movements diverge from pure road graph proxies.

### <!--{ layers='[{"type":"Tile","properties":{"id":"osm"},"source":{"type":"OSM"}}]' center=[15.413,47.041] zoom="16.5" animationOptions="{duration:500}" }-->
#### 2. Industrial & Arterial Corridor: Kärntner Straße
Kärntner Straße is a high-capacity commercial and industrial arterial corridor in southern Graz characterized by continuous heavy vehicle traffic, distribution logistics, and 50–70 km/h driving speeds.
- **Empirical Measurement (BSA)**: Measured **71.3 dB** over 24 hours and **67.3 dB** during the night. Unlike residential areas, night noise remains persistently elevated due to long-haul freight and commercial logistics.
- **Official Strategic Map**: Predicts **>75 dB** daytime and **65–70 dB** night, closely tracking the high nighttime freight volume.
- **NoiseSphere AI Model**: Predicts **<55 dB**. This disparity highlights a current model constraint: because predictions rely on optical land cover and static road classifications, localized high freight proportions and nighttime trucking intensity cannot be fully captured without dynamic traffic fleet data.

### <!--{ layers='[{"type":"Tile","properties":{"id":"osm"},"source":{"type":"OSM"}}]' center=[15.412,47.042] zoom="16.5" animationOptions="{duration:500}" }-->
#### 3. Rural & Peripheral Transition: Robert-Fuchs-Straße
Located on the southern municipal periphery of Graz, Robert-Fuchs-Straße represents a quiet suburban-to-rural transition zone dominated by detached single-family residences, garden plots, and adjacent agricultural fields.
- **Empirical Measurement (BSA)**: Measured **45.7 dB** over 24 hours and **41.9 dB** at night, reflecting a tranquil acoustic refuge well below WHO disturbance thresholds.
- **Official Strategic Map**: Categorizes the area at **60–65 dB** (and **50–55 dB** night) — a massive **overestimation of 15–20 dB**. Regulatory simulations apply standardized calculation buffers that fail to account for local cul-de-sac traffic calming and structural acoustic shielding.
- **NoiseSphere AI Model**: Predicted **60–65 dB**, inheriting the strategic noise map's upward bias because the model was trained against regulatory labels in the municipal zone.

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
