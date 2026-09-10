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
