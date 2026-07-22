---
cover-image: https://workspace-ui-public.gtif-at-ew.hub-cf.eox.at/api/public/share/public-5fc4gif9-83/thumbnails/thumbnail.png
date: 2026-07-20
theme: hydrology
tags: snow, water, hydrology, hydropower, energy production, SCA, melt, mountains, energy, resource
provider: Sinergise, Waterjade, TIWAG
---

# Snow monitoring <!--{ as="img" data-fallback-src="https://workspace-ui-public.gtif-at-ew.hub-cf.eox.at/api/public/share/public-5fc4gif9-83/thumbnails/IMG_9200.jpeg" mode="hero" src="https://workspace-ui-public.gtif-at-ew.hub-cf.eox.at/api/public/share/public-5fc4gif9-83/thumbnails/IMG_9200.jpeg" }-->
### for hydropower management <!--{ style="font-size:1rem;opacity:0.7;margin-top:1rem;" }-->

## Background

Snow can be regarded as a water bank that stores the resource in winter and releases it during the thawing season. During winter time it is therefore very important to monitor snow evolution.

> *"How much snow is stored in that basin and when will it melt?"*

This question is generally raised by public and private institutions interested in snow for civil or industrial purposes, such as public agencies dealing with civil protection or hydrological balances, and hydropower companies that will eventually harvest water for energy production.

The most important snow variables that are commonly observed are **snow water equivalent** (SWE) and **snow depth** (HS). In recent years new methodologies have emerged in snow monitoring. For example, physically-based models calculate snow evolution by transforming the meteorological forcing into snow accumulation or melting according to the mass and energy balance in the snow pack. At the same time, Earth Observation (EO) techniques have emerged thanks to the availability of open access high temporal and spatial resolution satellite data. However, the approaches for SWE estimation based on EO data only are limited by the current technological maturity of EO based methods making it necessary to use in-situ calibrations. In addition, the presence of vegetation makes it complicated to use remote-sensing data alone.

![](https://workspace-ui-public.gtif-at-ew.hub-cf.eox.at/api/public/share/public-5fc4gif9-83/thumbnails/Section1.jpeg)
<p style="text-align: center; font-style: italic; font-size: smaller;">Credit: Maxim Lamare, 2026</p>


## Technology: EO + physically-based model

To solve these problems we have developed a hybrid approach, merging physically-based models with the assimilation of EO images, thus providing a service of snow monitoring at high resolution in near real-time. In particular, we developed a new technology<sup>1</sup> based on a physical approach  initially used in support of hydrological balances in the Italian alpine regions<sup>2,3</sup>. The technology was eventually upgraded through the assimilation of EO data on the snow covered area during the [**ESA eo4alps snow**](https://www.waterjade.com/en/eo4alps-snow/) project. The physical model simulates the snow evolution through a fully-energy balance approach that accounts for the mass and energy fluxes. It reproduces the physical processes affecting the snowpack, like accumulation, compaction and melting, as a result of the observed meteorological evolution. The domain resolution is 250 m, sufficient to account for the full morphological complexity of the terrain, like elevation, aspect and slope, and to replicate the shadowing effects responsible for the large snow heterogeneity in the mountains. The input meteo data originate from [ERA5-Land  reanalysis](https://cds.climate.copernicus.eu/datasets/reanalysis-era5-land?tab=overview) and in situ meteo stations, and are then subject to proper downscaling and spatial interpolation procedures. EO-retrieved [snow products from Copernicus](https://land.copernicus.eu/en/products/snow/high-resolution-gap-filled-fractional-snow-cover) are translated in binary **Snow Cover Area** (SCA) maps, reporting the presence of snow on the ground. By thresholding fractional snow cover products, a binary **SCA** (snow-covered/snow-free pixel) can be obtained<sup>4</sup>, as shown in the map below.


## Map section <!--{as="eox-map" style="width: 100%; height: 500px;" config='{ "controls": { "Zoom": {}, "Attribution": {}, "FullScreen": {}, "OverviewMap": { "layers": [ { "type": "Tile", "properties": { "id": "overviewMap" }, "source": { "type": "OSM" } } ] } }, "layers": [ { "type": "Tile", "properties": { "id": "cloudless-2022" }, "source": { "type": "XYZ", "url": "https://s2maps-tiles.eu/wmts/1.0.0/s2cloudless-2022_3857/default/g/{z}/{y}/{x}.jpeg", "attributions": "EOxCloudless 2022: Sentinel-2 cloudless by EOX IT Services GmbH" } } ], "view": { "center": [11.0060, 47.2071], "zoom": 12 } }'}-->
####

SCA over the Kühtai power plant.

##

The SCA is then assimilated through a first correction loop that helps the physical model results to comply with the snow line resulted by the satellite data, i.e., the minimum snow cover elevation. This allows to maintain a spatial coherence between the model and the simulation and to correctly follow the melting phase. 

The physical model is improved by assimilating EO-retrieved SCA maps to correct two processes:

*__The precipitation process__*

This process forces the physical model to change the input temperature in order to mimic the EO-retrieved SCA (see figure below). Thanks to this approach, any temperature bias present in the input data (such as the one present in ERA5 reanalyses, as reported by Dalla Torre et al., 2024 <sup>5</sup> ) can be corrected during the simulation to accurately simulate the mass during a snowfall.

<img 
  src="https://workspace-ui-public.gtif-at-ew.hub-cf.eox.at/api/public/share/public-5fc4gif9-83/thumbnails/SCA.jpeg" 
  alt="SCA modelling process" 
  style="width: 80%; display: block; margin: 0 auto;" 
/>
<p style="text-align: center; font-style: italic; font-size: smaller;">Panel A: EO SCA map (left), simulated SCA map (center) and comparison (right) between the two before the assimilation. Panel B: EO SCA map (left), simulated SCA map (center) and comparison (right) between the two after the assimilation of EO-retrieved SCA for temperature correction during a snowfall.</p>

*__The melting process__*

This process forces the model to change the melting rate in order to mimic the EO-retrieved SCA (see figure below). Thanks to this approach, a more accurate snowpack evolution and melt generation is granted during the melting season (Dall’Amico et al., 2025<sup>6</sup>).

<img 
  src="https://workspace-ui-public.gtif-at-ew.hub-cf.eox.at/api/public/share/public-5fc4gif9-83/thumbnails/Melt_correction.jpeg"
  alt="Melt correction process" 
  style="width: 80%; display: block; margin: 0 auto;" 
/>
<p style="text-align: center; font-style: italic; font-size: smaller;">Panel A: EO SCA map (left), simulated SCA map (center) and comparison (right) between the two before the assimilation. Panel B: EO SCA map (left), simulated SCA map (center) and comparison (right) between the two after the assimilation of EO-retrieved SCA for melting rate correction.</p>

Within selected basins in Austria, a further **correction loop** has been activated using in situ snow data. The assimilation procedure derives the solid precipitation in the accumulation events  thus improving the overall mass balance.

## Advantages of the service

The [**Waterjade**](https://waterjade.com/en/homepage/) approach allows for high accuracy and coherence of snow patterns in complex terrains. The service does not require the survey of any in-situ snow depth or density measurements, thus avoiding personnel costs and liability burdens due to avalanche hazard. 


| ![](https://workspace-ui-public.gtif-at-ew.hub-cf.eox.at/api/public/share/public-5fc4gif9-83/thumbnails/accuracy.png) | ![](https://workspace-ui-public.gtif-at-ew.hub-cf.eox.at/api/public/share/public-5fc4gif9-83/thumbnails/campaign.png) |![](https://workspace-ui-public.gtif-at-ew.hub-cf.eox.at/api/public/share/public-5fc4gif9-83/thumbnails/time.png)|
|---|---|---|
|2x better **accuracy** compared with state of the art|No campaigns are required with consequent **60% cost savings** |**Real-time** operation with little latency|
| ![](https://workspace-ui-public.gtif-at-ew.hub-cf.eox.at/api/public/share/public-5fc4gif9-83/thumbnails/back.png) | ![](https://workspace-ui-public.gtif-at-ew.hub-cf.eox.at/api/public/share/public-5fc4gif9-83/thumbnails/anomaly.png) |![](https://workspace-ui-public.gtif-at-ew.hub-cf.eox.at/api/public/share/public-5fc4gif9-83/thumbnails/forward.png)|
|**Reanalysis** up to 30 years in the past |**Anomaly detection** with respect to the past years |**Forecast** of snowfall, snowmelt and water inflow|

## Snow Products Description

The modeling chain used for the snow monitoring and reanalysis service is based on the methodology used for the DTA project, and described by Dall’Amico et al. (2025)<sup>6</sup> . Furthermore, the EO-retrieved SCA assimilation has been used to correct model output.


## Discover the products <!--{ as="eox-map" mode="tour" }-->

### <!--{ layers='[{"type":"Tile","properties":{"id":"customId"},"source":{"type":"WMTSCapabilities","url":"https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml","layer":"s2cloudless-2017"}}]' center=[10.739,46.958] zoom="11" animationOptions="{duration:500}" }-->

#### Snow Cover Area (SCA)

The product for the 2022/2023 winter season is extracted from [Copernicus Gap-filled Fractional Snow Cover](https://land.copernicus.eu/en/products/snow) (GFSC) products  and it reports the values of GFSC from 0 to 100. Values above 100 represent clouds and no data.

### <!--{ layers='[{"type":"Tile","properties":{"id":"customId"},"source":{"type":"WMTSCapabilities","url":"https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml","layer":"s2cloudless-2017"}}]' center=[11.021,47.199] zoom="11" animationOptions="{duration:500}" }-->

#### Snow Water Equivalent (SWE)

The products for the 2022/2023 winter season have been generated by the SnowMaps processing chain, built on the GEOtop physical model, which combines reanalysis weather data, local weather-station and snow-gauge measurements, and snow-cover information derived from Sentinel-2 satellite, following the approach of Dall’Amico et al. (2025).

### <!--{ layers='[{"type":"Tile","properties":{"id":"customId"},"source":{"type":"WMTSCapabilities","url":"https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml","layer":"s2cloudless-2017"}}]' center=[11.707,47.501] zoom="11" animationOptions="{duration:500}" }-->

#### Snow Depth (HS)

The products for the 2022/2023 winter season have been generated by the SnowMaps processing chain, built on the GEOtop physical model, which combines reanalysis weather data, local weather-station and snow-gauge measurements, and snow-cover information derived from Sentinel-2 satellite, following the approach of Dall’Amico et al. (2025).

### <!--{ layers='[{"type":"Tile","properties":{"id":"customId"},"source":{"type":"WMTSCapabilities","url":"https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml","layer":"s2cloudless-2017"}}]' center=[10.739,46.958] zoom="11" animationOptions="{duration:500}" }-->

#### Snow Melt (SM)

The products for the 2022/2023 winter season have been generated by the SnowMaps processing chain, built on the GEOtop physical model, which combines reanalysis weather data, local weather-station and snow-gauge measurements, and snow-cover information derived from Sentinel-2 satellite, following the approach of Dall’Amico et al. (2025).

## References
<small>
[1] Dall’Amico, M., Endrizzi S. and Tasin S. (2018). Mysnowmaps: operative high-resolution real-time snow mapping, Proceedings of the International Snow Science Workshop, Innsbruck, 328-332

[2] Endrizzi S., Gruber S., Dall'Amico M. and Rigon R. (2014), GEOtop 2.0: simulating the combined energy and water balance at and below the land surface accounting for soil freezing, snow cover and terrain effects, Geosci. Model Dev., 7, 2831-2857. Disponibile su: http://www.geosci-model-dev.net/7/2831/2014/ 

[3] Dall'Amico M., Zambon F., Cagnati A., Crepaz A. and Endrizzi S. (2017): Realizzazione mappe di innevamento, Neve e Valanghe 83, AINEVA. https://www.aineva.it/wp-content/uploads/Pubblicazioni/Rivista83/nv83_3.pdf

[4] García-García et al., Intercomparison of Earth Observation products for hyper-resolution hydrological modelling over Europe, Remote Sensing of Environment, under review.

[5] Dalla Torre, D., Di Marco, N., Menapace, A., Avesani, D., Righetti, M., & Majone, B. (2024). Suitability of ERA5-Land reanalysis dataset for hydrological modelling in the Alpine region. Journal of Hydrology: Regional Studies, 52, 101718.

[6] Dall’Amico, M., Tasin, S., Di Paolo, F. et al. 30-years (1991-2021) Snow Water Equivalent Dataset in the Po River District, Italy. Sci Data 12, 374 (2025). https://doi.org/10.1038/s41597-025-04633-5
</small>

## Contacts

Interested in using the Waterjade snow service for your application? Contact the team for more information about pricing and availability [**via email**](mailto:info@waterjade.com) or through the [**website contact form**](https://waterjade.com/en/contacts/).

![](https://workspace-ui-public.gtif-at-ew.hub-cf.eox.at/api/public/share/public-5fc4gif9-83/thumbnails/waterjade-logo.png)
