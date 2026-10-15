---
cover-image: https://raw.githubusercontent.com/GTIF-Austria/public-narratives/d00b1ba0ec630812811f0fb37cd6df9f655fd8a8/assets/MichaelaLandauer/20260929121021-1790865830383.jpg
date: 2025-01-01
theme: Use Case 1 - Climate Indicators
tags: tag1,tag2
provider: narrative_provider1,narrative_provider2
---

# Climate Change Explorer for Tourism <!--{ as="img" mode="hero" src="https://raw.githubusercontent.com/GTIF-Austria/public-narratives/d00b1ba0ec630812811f0fb37cd6df9f655fd8a8/assets/MichaelaLandauer/20260929121021-1790865830383.jpg" }-->
### Use Case 1 - Climate Indicators

## Overview
The Climate Change Explorer for Tourism (CCET) is a joint initiative by [**GeoVille**](https://www.geoville.com/), [**Österreich Werbung**](https://b2b.austria.info/de-at/), [**EOX**](https://eox.at/) and [**BRZ**](https://www.brz.gv.at/) within Digital Twin Austria (GTIF-AT EA), giving Austria's tourism regions a user-friendly picture of climate change impacts and hazards. This page looks at the first of three use cases showcased in the tool.

## What Use Case 1 is about 
This use case visualises projected climate changes using metrics that are directly relevant and useful for the tourism sector. It forms the foundation of the whole tool, addressing the question: how is the climate in a given region changing, and what long-term trends can be derived from it?

## Exploring Climate Indicators for sustainable tourism planning and development <!--{ as="eox-map" mode="tour" position="right" }-->
### <!--{ layers='[{"type":"Tile","properties":{"id":"cloudless-2025;:;EPSG:3857","title":"EOxCloudless 2025","visible":true},"source":{"type":"XYZ","url":"https://{a-e}.s2maps-tiles.eu/wmts/1.0.0/s2cloudless-2025_3857/default/g/{z}/{y}/{x}.jpeg","projection":"EPSG:3857","attributions":"{ EOxCloudless 2025: <a href=\"//s2maps.eu\" target=\"_blank\">Sentinel-2 cloudless - s2maps.eu</a> by <a href=\"//eox.at\" target=\"_blank\">EOX IT Services GmbH</a> (Contains modified Copernicus Sentinel data 2025) }","tileGrid":{"tileSize":[256,256]}}},{"type":"VectorTile","declutter":true,"properties":{"id":"climate_indicators;:;2026-05-26T00:00:00Z;:;Climate Indicators;:;EPSG:3857","title":"Climate Indicators"},"source":{"type":"VectorTile","format":{"type":"MVT"},"url":"https://eoapi.workspace.gtif-eox.hub-otc.eox.at/vector/collections/public.climate_flat_geoms_master/tiles/WebMercatorQuad/{z}/{x}/{y}?scenario=rcp45&metric=hot_days&decade=2051_2060","projection":"EPSG:3857"},"style":{"variables":{"scenario":"rcp45","decade":"2051_2060","month":"jul","selected_elevation":"full","selected_metric":"hot_days","aggregation":"mean","combined_prop":"full_jul_mean","vmin":0,"vmax":10},"tooltip":[{"id":"tourism_region","title":"Region"},{"id":"scenario","title":"Scenario"},{"id":"metric","title":"Metric"},{"id":"full_jul_mean","title":"Value (full | 2051_2060 jul)","decimals":2}],"fill-color":["interpolate",["linear"],["/",["-",["coalesce",["get","full_jul_mean"],0],0],["-",10,0]],0,[254,224,210,1],0.143,[252,187,161,1],0.286,[252,146,114,1],0.429,[251,106,74,1],0.571,[239,59,44,1],0.714,[203,24,29,1],0.857,[165,15,21,1],1,[103,0,13,1]],"stroke-color":"black","stroke-width":1}},{"type":"Tile","properties":{"id":"overlay_bright;:;EPSG:3857","title":"Overlay labels","visible":true},"source":{"type":"XYZ","url":"https://{a-e}.s2maps-tiles.eu/wmts/1.0.0/overlay_base_bright_3857/default/g/{z}/{y}/{x}.png","projection":"EPSG:3857","attributions":"{ Overlay: Data &copy; <a href=\"http://www.openstreetmap.org/copyright\" target=\"_blank\">OpenStreetMap</a> contributors, Made with Natural Earth, Rendering &copy; <a href=\"//eox.at\" target=\"_blank\">EOX</a> }","tileGrid":{"tileSize":[256,256]}}}]' zoom="7.227223813483254" center=[13.64313143623767,47.36907650924309] projection="" animationOptions={duration:500}}-->
#### Tour step title
Explore Climate Indicators such as hot days, tropical nights or heavy precipitation days for sustainable tourism planning and development.

## The data behind it
The indicators draw on the ÖKS15 climate projection dataset from [GeoSphere Austria](https://data.hub.geosphere.at/group/oks15), calculated under two IPCC scenarios: RCP4.5 (a moderate pathway) and RCP8.5 (a pessimistic, high-emissions pathway). Temperature, precipitation and wind data are available at a spatial resolution of 1 km, on a daily basis, from 2011 to 2100. 

For each decade between 1951 and 2100, the number of days meeting a given climatic criterion is counted for every month; these monthly counts are then averaged across all years within the respective decade to obtain a monthly climatology. The grid cell values are then spatially averaged within the defined spatial units – municipalities (LAU2 level), the three elevation zones (valley bottom (≤10th altitude percentile), mid-altitude (45th-55th altitude percentile), mountain peaks (≥90th altitude percentile), and tourism destination boundaries provided by Österreich Werbung – to obtain one indicator value per month and decade for each spatial unit. 

## What is measured

- **Hot day**s: days with a maximum temperature above 30°C 

- **Tropical nights**: days with a minimum temperature above 20°C 

- **Beach/lake days**: days with a maximum temperature above 23°C and more than 250 W/m² of daily mean solar radiation 

- **Ice days**: days with a maximum temperature below 0°C 

- **Heat wave duration index (HWDI)**: the annual count of days forming part of a run of at least three consecutive days on which the maximum temperature exceeds the 90th-percentile threshold, based on the 1961–1990 reference period 

- **Strong precipitation day**s: days with 10 mm or more of precipitation 

- **Dry days**: days with less than 1 mm of precipitation 

- **Strong wind days**: days on which the mean wind speed exceeds 11.1 m/s

## Benefit for users

- Tourism regions can compare climate data across several destinations and use this to build long-term strategies for sustainable tourism across an entire region. 

- Individual destinations get a clear picture of how their local climate is changing, informing climate-friendly development strategies. 

- Because projections run to 2100 under two scenarios, destinations can weigh a moderate against a high-emissions future and plan infrastructure adaptations accordingly, well ahead of time. 