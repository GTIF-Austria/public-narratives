---
cover-image: https://data.services.geoville.com/s/p8oFTGsWmciRt6c
date: 2026-11-11
theme: Sustainable Cities
tags: Land Surface Tempreature, Land Use Change, Climate Change
provider: GeoVille
---

# Land surface temperatures projections, considering climate and land use changes <!--{ as="img" mode="hero" src="https://raw.githubusercontent.com/gofweiss-source/Heatgrid/a056a475ebd99da08bfd75e0aae25a4aabcf7bbd/Title_picture_gtif_heatgrid.png" }-->
### High-resolution projections of future land surface temperatures across urban areas in Austria under different climate scenarios, revealing the impact of land use changes, to support the mitigation and adaptation of heat risk and identify the effects of a potential urban growth. <!--{ style="font-size:1.5rem;opacity:0.7;margin-top:1rem;" }-->

## Challenge

Climate change is causing a significant increase in land surface temperatures in urban areas, concrete, asphalt and built infrastructure trap solar energy, elevating temperatures and leading to the urban heat island effect. This intensifies heat exposure and increases demand for cooling, with implications for public health, infrastructure, and energy systems. At the same time, the growing urban population as well as the  expansive demand for areas due to activities and consumption patterns lead to an increasing urban sprawl and soil sealing. 
One important factor influencing land surface temperature is land use, as this affects energy absorption, storage, and release. Addressing urban heat risks requires mitigation and adaptation strategies that reflect local conditions and consider possible land use changes under a changing climate. 

**How will land surface temperatures in Austrian urban areas evolve over the coming decades?** 

**How could land use changes influence future land surface temperature patterns?**

## Capability 

### Description

This capability provides high-resolution (70 m) projections of land surface temperature (LST), based on the SSP3-7.0 scenario (Shared Socioeconomic Pathway, high-emission future with continuous increases in CO₂ emissions and limited global mitigation efforts) and two models. The capability focuses on the urban areas of Vienna, Graz and Innsbruck in Austria, covering the period from 2000 to 2049 (aggregated in decades) and showing the average minimum and maximum temperatures during hot spells in the morning and afternoon.
Furthermore, it examines the relationship between land use and LST to evaluate the potential influence of alternative land use on local surface temperatures. This enables users to explore the temperature effects of land use changes (LUC) under future climate conditions.
The resulting maps highlight spatial variations in future LST, aiding the identification of potential hotspots and the assessment of the implications of land use choices. They also facilitate the exploration of targeted measures for urban heat mitigation and adaptation to urban heat risks.
![*Overview map of the areas of interest*](https://raw.githubusercontent.com/gofweiss-source/Heatgrid/a056a475ebd99da08bfd75e0aae25a4aabcf7bbd/AoI%20Heatgrid.png) <!--{ width="400" style="display: block; margin: auto;"}-->

### Method
![*Flowchart of the method*](https://raw.githubusercontent.com/gofweiss-source/Heatgrid/a056a475ebd99da08bfd75e0aae25a4aabcf7bbd/Method%20Heatgrid.png)

### Technical features

#### Spatial resolution
70 m grid
#### Geographical coverage
- Urban area | S2-tile | CRS (EPSG) | extent (minx, miny, maxx, maxy) | area
- Graz | 33TWN 32633 | 524970, 5190280, 544920, 5220100 | 595 Km²  
- Innsbruck | 32TPT 32632 | 674970, 5230040, 689950, 5245090 | 225 Km²
- Vienna | 33UWP 32633 | 589930, 5330000, 609740, 5355060 | 496 Km²

#### Time extension
Two times (averaged coldest two morning and three warmest afternoon hours of 4-days-hot-spell per year between 2000 and 2049) averaged per decade (from 2000 to 2009, from 2010 to 2019, from 2020 to 2029, from 2030 to 2039, from 2040 to 2049).

#### Input data
-	[ECOSTRESS](https://ecostress.jpl.nasa.gov/)
-	reflectance data from [Sentinel-2](https://dataspace.copernicus.eu/data-collections/copernicus-sentinel-missions/sentinel-2) (blue, green, red, NIR, SWIR-1, SWIR-2)
-	meteorological features from [INCA](https://data.hub.geosphere.at/de/dataset/inca-v1-1h-1km) (air temperature at 2m above ground, global radiation, relative humidity at 2m above ground, west-east wind speed, south-north wind speed) to train the 70m LST modeling
-	meteorological features from the Climate DT data of [DestinationEarth](https://platform.destine.eu/) (air temperature at 2m above ground, global radiation, relative humidity at 2m above ground, west-east wind speed, south-north wind speed) for the two climate scenarios predictions [ICON](https://mpimet.mpg.de/forschung/modellierung) (developed by DWD/MPI-M) and [IFS-NEMO](https://www.ecmwf.int/en/elibrary/75709-coupling-nemo-and-ifs-models-single-executable) (developed by  ECMWF).
-	ancillary features (terrain aspect, digital elevation model, imperviousness, terrain slope, tree cover density, water and wetness index)
-	LULUCF 10m data from another Geoville’s project [GHG-Kit](https://ghg-kit.at/) (see narrative [GHG-KIT LULUCF Activity Data](https://gtif-austria.info/narratives/land_use_land_use_change_and_forestry))

### For whom? For what?
#### Target groups
The capability can support:
-	Municipalities and regional authorities — urban development, spatial planning, and climate adaptation strategies.
-	Urban planners, architects, and landscape architects — evaluating the potential thermal implications of development and design choices.
-	Real estate developers and property owners — understanding local surface heat patterns and informing site planning.
-	Healthcare and care infrastructure, schools, and hospitals — identifying potentially heat-exposed sites and informing adaptation planning.
-	Businesses and infrastructure operators — assessing surface heat conditions around facilities and operational sites.

#### Potential use cases
The capability can support planning and assessment related to:
-	Urban development and redevelopment — exploring the potential temperature implications of new construction and renovation.
-	Heat mitigation and adaptation — identifying potential hotspots and prioritising areas for intervention.
-	Greening and de-sealing — assessing the potential surface-temperature benefits of vegetation, permeable surfaces, and other land-use changes.
-	Climate-resilient site planning — comparing local temperature patterns to inform the placement and design of buildings, outdoor spaces, and infrastructure.
-	Long-term climate adaptation — exploring how urban surface-temperature patterns may evolve under different climate scenarios.

### About us
Provider: [GeoVille](https://www.geoville.com/)

![GeoVille logo](https://raw.githubusercontent.com/gofweiss-source/Heatgrid/a056a475ebd99da08bfd75e0aae25a4aabcf7bbd/logo_GeoVille.png) <!--{ width="100" }-->

Project partners:  [EOX](https://eox.at/), [Austria Tourism](http://www.austriatourism.com/),  [Bundesrechenzentrum](https://www.brz.gv.at/) (BRZ) and [Land-, forst- und wasserwirtschaftliche Rechenzentrum](https://www.lfrz.gv.at/) (LFRZ)

![EOX logo](https://raw.githubusercontent.com/gofweiss-source/Heatgrid/a056a475ebd99da08bfd75e0aae25a4aabcf7bbd/logo_EOx.png) <!--{ width="100" }-->
![Austria Tourism logo](https://raw.githubusercontent.com/gofweiss-source/Heatgrid/a056a475ebd99da08bfd75e0aae25a4aabcf7bbd/logo_AustriaTourism.png) <!--{ width="100" }-->
![Bundesrechenzentrum logo](https://raw.githubusercontent.com/gofweiss-source/Heatgrid/a056a475ebd99da08bfd75e0aae25a4aabcf7bbd/logo_BRZ.png) <!--{ width="100" }-->
![Land-, forst- und wasserwirtschaftliche Rechenzentrum logo](https://raw.githubusercontent.com/gofweiss-source/Heatgrid/aa635caafad36feae98946b7f458aaa76c67f99b/logo_LFRZ.jpg) <!--{ width="100" }-->