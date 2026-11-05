---
cover-image: https://raw.githubusercontent.com/triebnigg/public-narratives/triebnigg/evapotranspiration-monitoring-2/assets/triebnigg/solar-potential-1749907032353.webp
domain: Energy Transition
tags:  photovolatic, remote sensing, solar radiation
provider: GeoSphere
---

# High-resolution Forecasts of Solar Potential <!--{ as="img" mode="hero" src="https://raw.githubusercontent.com/triebnigg/public-narratives/triebnigg/evapotranspiration-monitoring-2/assets/triebnigg/solar-potential-1749907032353.webp"}-->

Every location tells a different story when it comes to solar energy. The amount of sunlight reaching a surface is shaped not only by weather, but also by terrain, surrounding features and local environmental conditions. By combining high-resolution geospatial and meteorological data with physical modelling, this service brings these elements together to uncover the solar radiation and photovoltaic potential of any given area. The result is a detailed spatial and temporal perspective on where solar energy potential lies and how it changes over time.

## About the service

This service combines meteorological data, high-resolution geospatial information and physical modelling approaches. On this basis, near-surface solar radiation and theoretical photovoltaic generation potential are calculated and represented in a spatially and temporally differentiated way.

##### What influences the solar energy potential?

<div id="user-content-toc">
🌅 <strong>Sun and Weather</strong>
  <ul>
    ☀️ solar radiation<br>
    ☁️ cloud cover<br>
    🌡️ temperature<br>
    🌬️️️  wind<br>
    💨 ️dust cover<br>
    ❄️ snow cover
  </ul>
</div>

<div id="user-content-toc">
🌅 <strong>Geographic Conditons</strong>
  <ul>
    🏔️ topography<br>
    🧭 terrain orientation<br>
    🌥️ shading<br>
    🏢 buildings<br>
    🌳 vegetation
  </ul>
</div>

##### What does the service deliver? 

The processing chain brings together solar radiation calculations, spatial refinement and photovoltaic modelling. Additional modules can be used to incorporate estimates of dust- and snow-related effects.

<div style="flex:1; background:#FFFACD; padding:16px; border-radius:10px;">
    <h5> ☀️ ️Radiation Information</h5>
    <p> Radiation modelling is done with the STRAHLGRID model <br> --> caluclation of direct, diffuse and global radiation <br> --> <strong>100x100m</strong> spatial resolution
    <p> Downscaling to <strong>1x1m</strong> can be performed to include <strong>shading</strong> effects of <strong>buildings</strong> and <strong>vegetation</strong>.
  </div>

<br>

<div style="flex:1; background:#C1E1C1; padding:16px; border-radius:10px;">
    <h5> 🔋 PV potential Information</h5>
    <p>The PV potential modelling combines solar radiation output with <strong>temperature</strong> and <strong>wind</strong> forecasts.</p>
    <p>--> theoretical photovoltaic <strong>potential</strong> </p>
  </div>
  
<br>
  
<div style="flex:1; background:#F1EBFA; padding:16px; border-radius:10px;">
    <h5> ℹ️ Additional Information</h5>
    <p> The assessment takes account of further relevant <strong>influences</strong> alongside meteorological and geographical conditions. This includes information on <strong>snow cover</strong> and <strong>dust deposition</strong> coverage on photovoltaic modules.
  </div>


## Key Features
* **Solar radiation:** Calculation of direct, diffuse and global radiation on horizontal surfaces and surfaces following the actual terrain.
* **Spatial refinement:** Downscaling of radiation information from 100 × 100 m to a resolution of up to 1 × 1 m, taking local shading by buildings, structures and trees into account.
* **Photovoltaic potential:** Estimation of theoretical PV potential based on global radiation, temperature and wind.
* **Dust effects:** Model-based estimation of potential soiling of PV modules using particulate matter and precipitation forecasts.
* **Snow effects:** Model-based estimation of snow coverage and potential associated performance losses, taking snowfall, temperature, irradiance and module inclination into account.

## What might it look like?

##### Overview

The following figures show the output of solar radiation on 100x100m for Austria at two consecutive time steps.

| ![infodienst_solar_step1](https://github.com/user-attachments/assets/d85df220-58a1-400d-9faa-bbcb1cd1e664)|![infodienst_solar_step2](https://github.com/user-attachments/assets/04db3bc8-5907-4b3c-8cfd-250d26366a81) |
|:---:|:---:|

The output of this radiation model is then going to be converted into solar power generation potential by the method of *Jerez et al (2015)*.  The output is the potential for the generated power. To obtain the power at the installed system, this value must be multiplied by the nominal installed watts.

| ![infodienst_solar_potential_step1](https://github.com/user-attachments/assets/dcf92c00-ab12-46e0-b433-601469fb58d7)| ![infodienst_solar_potential_step2](https://github.com/user-attachments/assets/5e93041a-39d0-4d48-9469-5c1a86939032)|
|:---:|:---:|



##### Examples of spatial representation

The following figures show examples of global radiation and theoretical solar potential for the municipality of Baden on 5 March 2026. Comparing the 100 m and 1 m resolutions illustrates how local terrain, buildings and vegetation effects become more apparent at the finer resolution.

| <sub>**11:00 UTC**<sub> | <sub>**14:00  UTC**<sub> |
|:---:|:---:|
| ![GLO_real_100m_Baden_cropped_2026-03-05-1100.png](https://raw.githubusercontent.com/GTIF-Austria/public-narratives/e5d3580f1ff0a325cd158d6c42af78125f713eda/assets/vseitner/GLOreal100mBadencropped2026-03-05-1100-1793867873944.png) <sub> GLO real (100m) <sub> | ![GLO_real_100m_Baden_cropped_2026-03-05-1400.png](https://raw.githubusercontent.com/GTIF-Austria/public-narratives/87883185bc10345f61da72a4bbf1751f1f16f251/assets/vseitner/GLOreal100mBadencropped2026-03-05-1400-1793867893453.png) <sub> GLO real (100m) <sub>|
| ![PVpot_100m_Baden_cropped_2026-03-05-1100.png](https://raw.githubusercontent.com/GTIF-Austria/public-narratives/13219b7e43f973fa596c36de97a2425925436045/assets/vseitner/PVpot100mBadencropped2026-03-05-1100-1793868225287.png) <sub> PV pot (100m) <sub> | ![PVpot_100m_Baden_cropped_2026-03-05-1400.png](https://raw.githubusercontent.com/GTIF-Austria/public-narratives/0a5d5632feb6625b8549401e343fa4ca2800b119/assets/vseitner/PVpot100mBadencropped2026-03-05-1400-1793868255134.png) <sub> PV pot (100m) <sub>|
|![glo_real_downscaled_2026-03-05-1100.png](https://raw.githubusercontent.com/GTIF-Austria/public-narratives/bb48701d3b9e781c19dc0e1e919e39f454e88056/assets/vseitner/glorealdownscaled2026-03-05-1100-1793868489211.png) <sub> GLO real (1m) <sub> | ![glo_real_downscaled_2026-03-05-1400.png](https://raw.githubusercontent.com/GTIF-Austria/public-narratives/bcc2ce4edd8c540d76a2d594f2c09330d78e60d3/assets/vseitner/glorealdownscaled2026-03-05-1400-1793868513250.png) <sub> GLO real (1m) <sub>|
| ![pvpot_downscaled_2026-03-05-1100.png](https://raw.githubusercontent.com/GTIF-Austria/public-narratives/64a3272b2ac1c3b6b6bca15743a409a397b47a88/assets/vseitner/pvpotdownscaled2026-03-05-1100-1793868549275.png) <sub> PV pot (1m) <sub>| ![pvpot_downscaled_2026-03-05-1400.png](https://raw.githubusercontent.com/GTIF-Austria/public-narratives/94ba0d2eb64de943fd3feec0376d62902e48287a/assets/vseitner/pvpotdownscaled2026-03-05-1400-1793868569892.png) <sub> PV pot (1m) <sub>|




## Technical features
|                       |               |
| --------------------- | -------------: |
| spatial resolution    | 100 m  (up to 1m)        |
| temporal resolution   | 1 hour        |
| forecast range        | +30 hours     |
| forecast time         | 00 UTC        |
| snow cover            | yes/no        |
| dust cover      | yes/no              |

The model chain can be adapted to any other region with some additional effort.



## Details

##### Organisation
This service is provided by [GeoSphere Austria](https://www.geosphere.at/en).

##### Available services
1. **Free Version** <br>
Example forecasts for selected muncipality during project runtime.
2. **Commercial version:** upon request, please contact [Gerhard Wotawa](mailto:gerhard.wotawa@geosphere.at), [Bernhard Niedermoser](mailto:bernhard.niedermoser@geosphere.at)

###### Scientific Background and References
<div style="font-size: 10px; line-height: 1.3;">

* Seitner et al. (2024): STRAHLGRID, a solar radiation model with applications across different spatial scales. https://doi.org/10.5194/ems2024-366
* Hieden et al. (2011): The Integrated Nowcasting through Comprehensive Analysis (INCA) System and its validation over the Eastern Alpine Region. DOI: 10.1175/2010WAF2222451.1
* Göbel et al. (2022): Development of a very high resolution solar radiation cadaster for estimating solar energy potential across the entire federal state of Salzburg, Austria. https://doi.org/10.5194/ems2022-396
* Jerez et al. (2015): The impact of climate change on photovoltaic power generation in Europe. Nature Communications. https://doi.org/10.1038/ncomms10014
* Olefs et al. (2020): Changes in snow depth, snow cover duration, and potential snowmaking conditions in Austria, 1961–2020 – a model based approach. Atmosphere, 11(12), 1330. https://doi.org/10.3390/atmos11121330
* HSU Soiling Model, pvlib-python documentation: https://pvlib-python.readthedocs.io/en/latest/reference/generated/pvlib.soiling.hsu.html
* NREL Snow Model, pvlib-python documentation: https://pvlib-python.readthedocs.io/en/stable/reference/effects_on_pv_system_output/snow.html
</div>

