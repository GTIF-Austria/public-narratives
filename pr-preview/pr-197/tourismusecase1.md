# GTIF-AT EA - Climate Change Explorer for Tourism <!--{ as="img" mode="hero" src="https://loremflickr.com/1280/720/austria,mountains,tourism" }-->
#### How climate-related geodata can support sustainable tourism planning and development

## GTIF Austria: Climate Change Explorer for Tourism
### Use Case 1 - Climate Changes

The Climate Change Explorer for Tourism (CCET) is a joint initiative by GeoVille, Österreich Werbung, EOX and BRZ within Digital Twin Austria (GTIF-AT EA), giving Austria's tourism regions a user-friendly picture of climate change impacts and risks. This page looks at the first of three use cases showcased in the tool.

### What it's about
This use case visualises projected climate changes using metrics that are directly relevant and useful for the tourism sector. It forms the foundation of the whole tool, addressing the question: how is the climate in a given region changing, and what long-term trends can be derived from it?

### The data behind it
The indicators draw on the ÖKS15 climate projection dataset from GeoSphere Austria [1], calculated under two IPCC scenarios: RCP4.5 (a moderate pathway) and RCP8.5 (a pessimistic, high-emissions pathway). Temperature, precipitation and wind data are available at a spatial resolution of 1 km, on a daily basis, from 2011 to 2100.

For each decade between 1951 and 2100, the number of days meeting a given climatic criterion is counted for every month; these monthly counts are then averaged across all years within the respective decade to obtain a monthly climatology. The grid cell values are then spatially averaged within the defined spatial units - municipalities (LAU2 level), the three elevation zones (valley bottom, mid-altitude and mountain peaks), and tourism destination boundaries provided by Österreich Werbung - to obtain one indicator value per month and decade for each spatial unit.

### What is measured
- **Hot days**: days with a maximum temperature above 30°C
- **Tropical nights**: days with a minimum temperature above 20°C
- **Beach/lake days**: days with a maximum temperature above 23°C and more than 250 W/m² of daily mean solar radiation
- **Ice days**: days with a maximum temperature below 0°C
- **Heat wave duration index (HWDI)**: the annual count of days forming part of a run of at least three consecutive days on which the maximum temperature exceeds the 90th-percentile threshold, based on the 1961-1990 reference period
- **Strong precipitation days**: days with 10 mm or more of precipitation
- **Dry days**: days with less than 1 mm of precipitation
- **Strong wind days**: days on which the mean wind speed exceeds 11.1 m/s

### Benefit for users
- Tourism regions can compare climate data across several destinations and use this to build long-term strategies for sustainable tourism across an entire region.
- Individual destinations get a clear picture of how their local climate is changing, informing climate-friendly development strategies.
- Because projections run to 2100 under two scenarios, destinations can weigh a moderate against a high-emissions future and plan infrastructure adaptations accordingly, well ahead of time.

[1] https://data.hub.geosphere.at/group/oks15

![logo-geoville.svg](https://raw.githubusercontent.com/GTIF-Austria/public-narratives/7282725b766961a1549eee7e4f0589940901c3c1/assets/lubojr/logo-geoville-1789049725394.svg)

## Exploring Austrian Tourism Hubs <!--{ as="eox-map" mode="tour" position="right" }-->

### <!--{ zoom=10 center=[16.3738,48.2082] layers='[{"type":"Tile","properties":{"id":"s2cloudless"},"source":{"type":"WMTSCapabilities","url":"https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml","layer":"s2cloudless-2025_3857"}}]' animationOptions='{"duration":500}' }-->
#### Vienna
The capital city represents the urban center of Austrian tourism, often a starting point for international travelers.

### <!--{ zoom=10 center=[13.055,47.8095] layers='[{"type":"Tile","properties":{"id":"s2cloudless"},"source":{"type":"WMTSCapabilities","url":"https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml","layer":"s2cloudless-2025_3857"}}]' animationOptions='{"duration":500}' }-->
#### Salzburg
Known for its culture and proximity to the northern Alps, Salzburg is a major destination hub.

### <!--{ zoom=10 center=[11.3945,47.2692] layers='[{"type":"Tile","properties":{"id":"s2cloudless"},"source":{"type":"WMTSCapabilities","url":"https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml","layer":"s2cloudless-2025_3857"}}]' animationOptions='{"duration":500}' }-->
#### Innsbruck
Nestled in the heart of the Alps, Innsbruck is a focal point for winter and summer alpine tourism.

### <!--{ layers='[{"type":"Tile","properties":{"id":"cloudless-2025;:;EPSG:3857","title":"EOxCloudless 2025","visible":true},"source":{"type":"XYZ","url":"https://{a-e}.s2maps-tiles.eu/wmts/1.0.0/s2cloudless-2025_3857/default/g/{z}/{y}/{x}.jpeg","projection":"EPSG:3857","attributions":"{ EOxCloudless 2025: <a href=\"//s2maps.eu\" target=\"_blank\">Sentinel-2 cloudless - s2maps.eu</a> by <a href=\"//eox.at\" target=\"_blank\">EOX IT Services GmbH</a> (Contains modified Copernicus Sentinel data 2025) }","tileGrid":{"tileSize":[256,256]}}},{"type":"VectorTile","declutter":true,"properties":{"id":"tourism_uc3;:;2026-02-15T00:00:00Z;:;Alpine Tourism & Climate Dynamics;:;EPSG:3857","title":"Alpine Tourism & Climate Dynamics"},"source":{"type":"VectorTile","format":{"type":"MVT"},"url":"https://eoapi.workspace.gtif-eox.hub-otc.eox.at/vector/collections/public.gtif_tourism_uc3_for_date/tiles/WebMercatorQuad/{z}/{x}/{y}?target_date=2026-02-15","projection":"EPSG:3857"},"style":{"variables":{"prop":"stays"},"tooltip":[{"id":"tourism_region","title":"Tourism Region"},{"id":"tourism_id","title":"Tourism ID"},{"id":"region_type","title":"Region Type"},{"id":"season","title":"Season"},{"id":"stays","title":"Overnight Stays","decimals":0},{"id":"snow_depth_mean","title":"Mean Snow Depth (m) ","decimals":1},{"id":"max_temp_mean","title":"Maximum Temperature (°C) ","decimals":1},{"id":"precip_sum_mean","title":"Mean Precipitation Sum (mm)","decimals":1}],"fill-color":["case",["==",["get","stays"],"N/A"],[128,128,128,0.25],["==",["coalesce",["get","stays"],"N/A"],"N/A"],[0,0,0,0],["match","stays","stays",["interpolate",["linear"],["/",["-",["get","stays"],0],["-",10000,0]],0,[255,247,236,1],0.125,[254,232,200,1],0.25,[253,212,158,1],0.375,[253,187,132,1],0.5,[252,141,89,1],0.625,[239,101,72,1],0.75,[215,48,31,1],0.875,[179,0,0,1],1,[127,0,0,1]],"snow_depth_mean",["interpolate",["linear"],["/",["-",["get","snow_depth_mean"],0],["-",0.5,0]],0,[247,252,253,1],0.125,[224,236,244,1],0.25,[191,211,230,1],0.375,[158,188,218,1],0.5,[140,150,198,1],0.625,[140,107,177,1],0.75,[136,65,157,1],0.875,[129,15,124,1],1,[77,0,75,1]],"max_temp_mean",["interpolate",["linear"],["/",["-",["get","max_temp_mean"],-10],["-",35,-10]],0,[49,54,149,1],0.1,[69,117,180,1],0.2,[116,173,209,1],0.3,[171,217,233,1],0.4,[224,243,248,1],0.5,[255,255,191,1],0.6,[254,224,144,1],0.7,[253,174,97,1],0.8,[244,109,67,1],0.9,[215,48,39,1],1,[165,0,38,1]],"precip_sum_mean",["interpolate",["linear"],["/",["-",["get","precip_sum_mean"],0],["-",50,0]],0,[255,255,229,1],0.125,[247,252,185,1],0.25,[217,240,163,1],0.375,[173,221,142,1],0.5,[120,198,121,1],0.625,[65,171,93,1],0.75,[35,132,67,1],0.875,[0,104,55,1],1,[0,69,41,1]],[128,128,128,1]]],"stroke-color":"black","stroke-width":1}},{"type":"Tile","properties":{"id":"overlay_bright;:;EPSG:3857","title":"Overlay labels","visible":true},"source":{"type":"XYZ","url":"https://{a-e}.s2maps-tiles.eu/wmts/1.0.0/overlay_base_bright_3857/default/g/{z}/{y}/{x}.png","projection":"EPSG:3857","attributions":"{ Overlay: Data &copy; <a href=\"http://www.openstreetmap.org/copyright\" target=\"_blank\">OpenStreetMap</a> contributors, Made with Natural Earth, Rendering &copy; <a href=\"//eox.at\" target=\"_blank\">EOX</a> }","tileGrid":{"tileSize":[256,256]}}}]' zoom="9.293317039631066" center=[15.702026824413107,48.01742525942359] projection="" animationOptions={duration:500}}-->
#### Tour step title
Text describing the current step of the tour and why it is interesting what the map shows currently
