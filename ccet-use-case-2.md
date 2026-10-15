---
cover-image: https://raw.githubusercontent.com/GTIF-Austria/public-narratives/a119e16f897695fb696bb1d963ff901183c7332e/assets/MichaelaLandauer/CCETUC-2Climate-threats-1790866217063.jpg
date: 2025-01-01
theme: Use Case 2 - Climate Hazards
tags: tag1,tag2
provider: narrative_provider1,narrative_provider2
---

# Climate Change Explorer for Tourism <!--{ as="img" mode="hero" src="https://raw.githubusercontent.com/GTIF-Austria/public-narratives/a119e16f897695fb696bb1d963ff901183c7332e/assets/MichaelaLandauer/CCETUC-2Climate-threats-1790866217063.jpg" }-->
### Use Case 2 - Climate Hazards

## Overview
The Climate Change Explorer for Tourism (CCET) is a joint initiative by [**GeoVille**](https://www.geoville.com/), [**Österreich Werbung**](https://b2b.austria.info/de-at/), [**EOX**](https://eox.at/) and [**BRZ**](https://www.brz.gv.at/) within Digital Twin Austria (GTIF-AT EA), giving Austria's tourism regions a user-friendly picture of climate change impacts and hazards. This page looks at the second of three use cases showcased in the tool.

## What Use Case 2 is about
This use case assesses the increasing exposure of tourism destinations to climate-related hazards – in other words, how vulnerable a given destination is becoming as the climate changes. In this use case, the term “threat” refers to the impact of temperature changes for tourism. In the scope of the project, snow loss has been assessed as one example of these threats. The development of this indicator aims at completing those provided by the [**Platform HORA**](https://hora.gv.at/#/chwrz:-/bgrau/a-/@47.72463,13.50823,8z) of the BMLUK, already assessing natural hazards and risks all over Austria.

## Exploring Climate Hazards in Austria <!--{ as="eox-map" mode="tour" position="right" }-->

### <!--{ layers='[{"type":"Tile","properties":{"id":"geoland_base;:;EPSG:3857","title":"Geoland Basemap","visible":true},"source":{"type":"XYZ","url":"https://mapsneu.wien.gv.at/basemap/geolandbasemap/normal/google3857/{z}/{y}/{x}.png","projection":"EPSG:3857","attributions":"{ Datenquelle: <a href=\"https://basemap.at\" target=\"_blank\" property=\"dct:title\">basemap.at</a> }","tileGrid":{"tileSize":[256,256]}}},{"type":"VectorTile","declutter":true,"properties":{"id":"tourism_uc2_stats;:;2030-01-01T00:00:00Z;:;Climate Hazards Statistics;:;EPSG:3857","title":"Climate Hazards Statistics"},"source":{"type":"VectorTile","format":{"type":"MVT"},"url":"https://eoapi.workspace.gtif-eox.hub-otc.eox.at/vector/collections/public.tourism_risk_stats_new/tiles/WebMercatorQuad/{z}/{x}/{y}","projection":"EPSG:3857"},"style":{"tooltip":[{"id":"tourism_region","title":"Tourism Region"}],"fill-color":[244,166,184,0.5],"stroke-color":"black","stroke-width":1.5,"variables":{"vmin":0,"vmax":10,"scenario":"rcp45","selected_metric":"hot_days","decade":"2051_2060","aggregation":"mean","month":"jul","selected_elevation":"full","combined_prop":"full_jul_mean"}}},{"type":"Tile","properties":{"id":"overlay_bright;:;EPSG:3857","title":"Overlay labels","visible":true},"source":{"type":"XYZ","url":"https://{a-e}.s2maps-tiles.eu/wmts/1.0.0/overlay_base_bright_3857/default/g/{z}/{y}/{x}.png","projection":"EPSG:3857","attributions":"{ Overlay: Data &copy; <a href=\"http://www.openstreetmap.org/copyright\" target=\"_blank\">OpenStreetMap</a> contributors, Made with Natural Earth, Rendering &copy; <a href=\"//eox.at\" target=\"_blank\">EOX</a> }","tileGrid":{"tileSize":[256,256]}}}]' zoom="7.560557146816587" center=[14.547234215383504,48.10443376958361] projection="" animationOptions={duration:500}}-->
#### Tour step title
Explore Climate Hazards such as snow decline, flood and avalche risk in Austria.

## The data behind it
The data for Use Case 2 come from two different sources:

**1. SNOWGRID-CL dataset**

The data for snow depth comes from the public dataset [SNOWGRID-CL dataset](https://data.hub.geosphere.at/dataset/snowgrid_cl-v2-1d-1km) owned by GeoSphere Austria providing daily updated analyses of daily snow depth and snow water equivalent (SWE) on a 1x1 km grid covering all of Austria since 01.01.1961.

Average snow depth between November and April across Austria is compared between a historical reference period (1961–1990) and recent years (2011–2026) at a spatial resolution of 1 km. For each location, the snow depth anomaly is calculated as both an absolute change in centimeters and a percentage change relative to the historical average.

The layer “snow depth changes” shows the percentage of recent gain or loss of snow depth in centimeters.

**2. HORA**

- **Flood risk**: “The ‘flood risk zoning’ map shows those areas at risk from 30-year, 100-year and 300-year flood events. It should be noted that flood defences (particularly those recently constructed) are not taken into account across the entire area.

- **Avalanche risk**: The risk posed by avalanches is defined in so-called hazard zone plans, which are drawn up by the Austrian Torrent and Avalanche Control Authority. The hazard zone plan (GZP) is a comprehensive assessment of the risks posed by torrents, avalanches and erosion. It forms the basis for planning protective measures and for assessing their urgency. It supports the building authorities, local and regional spatial planning, and serves the purposes of public safety.

- **Hot days**: The figures shown represent the average number of days per year during the 1991–2020 climate period. Data source: SPARTACUS (Spatiotemporal Reconstruction Dataset of Climate in Austria)
 
- **Heat episodes**: A heatwave according to Kysely (Kysely episode) is identified as soon as the maximum temperature exceeds 30 °C on at least three consecutive days and persists for as long as the average maximum temperature over the entire episode remains above 30 °C and the maximum temperature on any given day does not fall below 25 °C. The figure given is the total number of days falling within a Kysely episode. Data source: SPARTACUS (Spatiotemporal Reconstruction Dataset of Climate in Austria)

## Benefit for users
Tourism regions gain a long-term, evidence-based picture of climate hazards across the whole region, supporting decisions on adapting tourism infrastructure. 

Individual destinations can see, cell by cell, how far their local snow cover has already declined – valuable evidence for decisions on snowmaking, resource planning and diversification into snow-independent offerings. 

As further hazards such as flooding, avalanches or heat stress are added, destinations will increasingly be able to weigh up several climate hazards together, rather than assessing each in isolation.