---
cover-image: https://raw.githubusercontent.com/triebnigg/public-narratives/triebnigg/evapotranspiration-monitoring-2/assets/triebnigg/solar-potential-1749907032353.webp
domain: Energy Transition
tags:  photovolatic, remote sensing, solar radiation
provider: GeoSphere
---

# High-resolution Forecasts of Solar Potential <!--{ as="img" mode="hero" src="https://raw.githubusercontent.com/triebnigg/public-narratives/triebnigg/evapotranspiration-monitoring-2/assets/triebnigg/solar-potential-1749907032353.webp"}-->

Every location tells a different story when it comes to solar energy. The amount of sunlight reaching a surface is shaped not only by weather, but also by terrain, surrounding features and local environmental conditions. By combining high-resolution geospatial and meteorological data with physical modelling, this service brings these elements together to uncover the solar radiation and photovoltaic potential of any given area. The result is a detailed spatial and temporal perspective on where solar energy potential lies and how it changes over time.


## Service Description
Solar energy availability is influenced by a range of meteorological and geographical factors. In addition to solar radiation and current weather conditions, the geographical characteristics of a location play an important role. Topography, terrain orientation and shading from buildings or vegetation affect the amount of solar radiation available at a given surface. Temperature, wind, dust deposition and snow cover can also influence the performance of photovoltaic systems.

To represent these different influencing factors together, the service combines meteorological data, high-resolution geospatial information and physical modelling approaches. On this basis, near-surface solar radiation and theoretical photovoltaic generation potential are calculated and represented in a spatially and temporally differentiated way.
The calculations are based on STRAHLGRID, a solar radiation model developed by GeoSphere Austria. It calculates direct, diffuse and global radiation while taking atmospheric conditions, cloud cover and topographic effects into account. The integration of high-resolution digital surface models further refines the calculations. This makes it possible to account not only for large-scale topography but also for local shading effects caused by buildings, structures and trees. The spatial resolution of the radiation information can thereby be increased from 100 metres to as fine as one metre.

Building on the solar radiation information, theoretical photovoltaic potential is estimated using temperature and wind forecasts. In addition, model-based information on potential performance reductions caused by dust deposition and snow cover on photovoltaic modules can be incorporated. This means that the assessment takes account of further relevant influences alongside meteorological and geographical conditions.
By combining these data and models, the service produces a detailed representation of solar energy potential that makes both spatial differences and temporal changes visible. It therefore enables a differentiated assessment of solar radiation and theoretical photovoltaic potential under changing environmental and weather conditions.

## Workflow
The processing chain brings together solar radiation calculations, spatial refinement and photovoltaic modelling. Additional modules can be used to incorporate estimates of dust- and snow-related effects.

![workflow_eng.png](https://raw.githubusercontent.com/GTIF-Austria/public-narratives/19eeaee6e2bf8bbd2a2ac61d27693b086ac9cbe5/assets/vseitner/workfloweng-1793716854352.png)

## Key Features
* **Solar radiation:** Calculation of direct, diffuse and global radiation on horizontal surfaces and surfaces following the actual terrain.
* **Spatial refinement:** Downscaling of radiation information from 100 × 100 m to a resolution of up to 1 × 1 m, taking local shading by buildings, structures and trees into account.
* **Photovoltaic potential:** Estimation of theoretical PV potential based on global radiation, temperature and wind.
* **Dust effects:** Model-based estimation of potential soiling of PV modules using particulate matter and precipitation forecasts.
* **Snow effects:** Model-based estimation of snow coverage and potential associated performance losses, taking snowfall, temperature, irradiance and module inclination into account.

## Examples

### Overview

![infodienst_solar_step1](https://github.com/user-attachments/assets/d85df220-58a1-400d-9faa-bbcb1cd1e664)

_Fig 1: Example output of global solar radiation from *STRAHLGRID*. 1300 UTC of an arbitrary day._

![infodienst_solar_step2](https://github.com/user-attachments/assets/04db3bc8-5907-4b3c-8cfd-250d26366a81)
_Fig 2: Example output of global solar radiation from *STRAHLGRID*. 1400 UTC of an arbitrary day._ 

The output of this radiation model is then going to be converted into solar power generation potential by the method of *Jerez et al (2015)*.  The output is the potential for the generated power. To obtain the power at the installed system, this value must be multiplied by the nominal installed watts.

![infodienst_solar_potential_step1](https://github.com/user-attachments/assets/dcf92c00-ab12-46e0-b433-601469fb58d7)
_Fig 3: Example output of solar potential. 1300 UTC of an arbitrary day._

![infodienst_solar_potential_step2](https://github.com/user-attachments/assets/5e93041a-39d0-4d48-9469-5c1a86939032)
_Fig 4: Example output of solar potential. 1400 UTC of an arbitrary day._

### Examples of spatial representation

The following figures show examples of global radiation and theoretical solar potential for the municipality of Baden on 5 March 2026. Comparing the 100 m and 1 m resolutions illustrates how local terrain, buildings and vegetation effects become more apparent at the finer resolution.



## Data and Modelling Overview
The processing chain brings together solar radiation calculations, spatial refinement and photovoltaic modelling. Additional modules can be used to incorporate estimates of dust- and snow-related effects.

## Snow and Dust Infromation
And addiation feature of this product is, that not only the solar potential can be calculated, but also warnings on snow and dust covers can be provided. These warnings are genereted through the integration of GeoSphere Austria's operational snow model *SNOWGRID*, and dust forecasts from *WRF-Chem*.

## Technical features
|                       |               |
| --------------------- | -------------: |
| spatial resolution    | 100(0) m         |
| temporal resolution   | 1 hour        |
| forecast range        | +30 hours     |
| forecast time         | 00 UTC        |
| snow cover            | yes/no        |
| dust cover      | yes/no              |

The model chain for Austria is implemented as default. The model can be adapted to other regions with some additional effort.

# Offene Fragen... <!--{ as="img" mode="hero" src="" }-->
#### 

# Organizational details and contact <!--{ as="img" mode="hero" src="" }-->
#### 

## Available services
1. **Free Version** <br>
Example forecasts for selected Austrian cities during project runtime.
2. **Commercial version:** upon request, please contact [Gerhard Wotawa](mailto:gerhard.wotawa@geosphere.at), [Bernhard Niedermoser](mailto:bernhard.niedermoser@geosphere.at)


# References <!--{ as="img" mode="hero" src="" }-->
#### 