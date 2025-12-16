---
cover-image: https://raw.githubusercontent.com/triebnigg/public-narratives/triebnigg/evapotranspiration-monitoring-2/assets/triebnigg/multi-temporal-vegetation-analysis-1749908113862.png

domain: Carbon Accounting
tags: remote sensing, semantic data cube

---

<img  style="display: block; 
           margin-left: auto;
           margin-right: auto;
           width: 80%;"
src="https://raw.githubusercontent.com/GTIME-25/public-narratives/GTIME-25/multitemporal-vegetation-change-dynamics-across-all-sentinel-2-observations/assets/GTIME-25/header-1741678422826.png" />

# Multitemporal Vegetation Change Dynamics across all Sentinel-2 observations

## Motivation

A key asset of the open and free Copernicus Sentinel-2 data is their temporal frequency. There is a Sentinel-2 coverage at least 5 days (higher for overlapping orbits) for Austria, offering considerable change information over time. We aim to add the temporal component in GTIF-AT as a cross-domain layer as a dynamic integrated view on the green transition. 
This service will fill the missing temporal component for GTIF-AT with multitemporal change basemap layer that can be combined with most of the existing topics already on the demonstrator. Our service approach will integrate all Sentinel-2 related observations since 2017 into a completely reproducible and meaningful form, providing a multitemporal view on vegetation change dynamics in Austria.

## Method 

The ideas build on a semantic data cube approach using fully automated semantic enrichment of all Sentinel-2 images in a user defined analysis period (e.g. years or seasons). In contrast to machine learning/deep learning approaches, such a knowledge-based semantic enrichment approach needs less energy consumption if scaled and the transferability of the approach to all Sentinel-2 data worldwide has been proven (see results of the ESA inCubed project SIAMaaS, see also https://app.color33.io ). All available imagery can be used without additional pre-processing to filter cloud contaminated data. This has the advantage that smaller cloud-free regions are used even in very cloudy images, increasing the number of valid, clear observations and therefore the statistical soundness. 

<video src="https://raw.githubusercontent.com/GTIME-25/public-narratives/GTIME-25/multitemporal-vegetation-change-dynamics-across-all-sentinel-2-observations/assets/GTIME-25/tseries-1741678130535.mp4" controls></video>

We communicate results using a single-layer multi-temporal representation, where colour represents different user-defined time periods and changes. This visualisation colour-codes terabytes of multi-temporal information into a single, comprehensive layer. While this approach is backed by established geovisualisation techniques, we extend it to unveil temporal processes and dynamics hidden in big EO data. The resulting layer can be used in a very simple way: It serves as an interpretable basemap that can be integrated in GTIF-AT as a background layer or as a user defined layer for specific time periods.

![layers](https://raw.githubusercontent.com/GTIME-25/public-narratives/GTIME-25/multitemporal-vegetation-change-dynamics-across-all-sentinel-2-observations/assets/GTIME-25/layers-1741677292024.jpg) 

|                     |                       |                    |
| ------------------- | --------------------- | ------------------ |
| ![](https://raw.githubusercontent.com/GTIME-25/public-narratives/GTIME-25/multitemporal-vegetation-change-dynamics-across-all-sentinel-2-observations/assets/GTIME-25/rgb-1741677355597.jpg)        | ![](https://raw.githubusercontent.com/GTIME-25/public-narratives/GTIME-25/multitemporal-vegetation-change-dynamics-across-all-sentinel-2-observations/assets/GTIME-25/cube-legend-1741677360470.png)  | ![](https://raw.githubusercontent.com/GTIME-25/public-narratives/GTIME-25/multitemporal-vegetation-change-dynamics-across-all-sentinel-2-observations/assets/GTIME-25/tseries2-1741677368483.gif)  |
|                     |                       |                    |

*Storm damages in forests - vegetation changes 2018-2020-2022 (left: R-G-B color coded; right: Sentinel-2 time series from which the information has been automatically extracted)*

**Service coverage** Within the funded project, the service will be developed for the whole of Austria, covering at least the years 2018-2025. The approach is designed to be scaled up to any region worldwide since the semantic enrichment approach does not require re-training or adaptations for other regions.

**Benefit** Multi-temporal basemap/background layer for easy communication of changes, closing temporal gaps between aerial image acquisition, can be combined with sensitive stakeholder data, temporal enrichment of static GTIF.AT layers through overlay/intersection.

**Application areas (cross-domain)** Monitoring of green spaces, land use changes, forest changes, environmental/soil protection, soil sealing, and nature conservation.

**Products** Multiband raster layer plus interpretation key (2017/18–2025)

**Web UI** GTIF.AT, WM(T)S, public

**Long term perspective**

After the project duration, the public access to all layers for the years 2018-2025 is guaranteed. The service will then be developed into a commercial service for annual nationwide (and beyond) calculations and specialized offerings for on-demand (up-to-date) access.

For more Information: [sims.sen2cube.at](https://arcg.is/0niC5L)

**Organizational details and legal information**

Project: GTIF-AT – Copernicus Temporal Spectrum: Multitemporal Vegetation Change Dynamics, FFG project number: FO999918383, Call: Digitaler Zwilling Österreich

Paris Lodron University Salzburg, Depart. of Geoinformatics

![](https://raw.githubusercontent.com/GTIME-25/public-narratives/GTIME-25/multitemporal-vegetation-change-dynamics-across-all-sentinel-2-observations/assets/GTIME-25/logo-ZGIS-1741677835182.png)

![](https://raw.githubusercontent.com/GTIME-25/public-narratives/GTIME-25/multitemporal-vegetation-change-dynamics-across-all-sentinel-2-observations/assets/GTIME-25/logo-SPASE-1741677830244.png)

Contact point: dirk.tiede@plus.ac.at ; markus.kerschbaumer@spatial-services.com  
