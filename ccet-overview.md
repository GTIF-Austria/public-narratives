---
cover-image: https://raw.githubusercontent.com/GTIF-Austria/public-narratives/82e054c189bcc2619ff308c5268297f4c4474e0d/assets/MichaelaLandauer/CCET-Overview-1790868019973.png
date: 2025-01-01
theme: Climate Change Explorer for Tourism
tags: tag1,tag2
provider: narrative_provider1,narrative_provider2
---

# Climate Change Explorer for Tourism <!--{ as="img" mode="hero" src="https://raw.githubusercontent.com/GTIF-Austria/public-narratives/82e054c189bcc2619ff308c5268297f4c4474e0d/assets/MichaelaLandauer/CCET-Overview-1790868019973.png" }-->
### How climate-related geodata can support sustainable tourism planning and development
#### 

## Background: a digital climate twin for tourism
Climate change poses growing challenges for tourism worldwide, significantly altering travel behaviour and the landscape of tourism offerings. The Alpine region is particularly affected by these developments, evident for example in the rapid retreat of glaciers, thawing permafrost, and a marked decline in snow depths. The **[second Austrian Climate Change Assessment Report**](url), published in June 2025, shows that the country has already warmed by 3.1°C – with dramatic consequences for the population and the economy. Fostering sustainable development in tourism therefore requires well-founded knowledge of local climate hazards. 

Planning and evaluating scenarios and climate-smart options for action require specific climate data and indicators to be combined with tourism-specific data. The Climate Change Explorer for Tourism (CCET) is designed to provide decision-makers in Austria's tourism regions with a user-friendly picture of the expected impacts of climate change, and an assessment of climate-related risk factors, based on climatic data alongside satellite-derived geoinformation. 

The idea for the tool emerged from a workshop held as part of the Green Data Hub, together with Österreich Werbung, the World Bank and the Austrian Federal Computing Centre (BRZ) – conceived as a digital “climate twin” for tourism, providing historical, current and forecast data to build awareness and support informed decisions. Building on this, a prototype was developed in consultation with tourism organisations and mountain railway operators, and has since been advanced further by [GeoVille](https://www.geoville.com/), [Österreich Werbung](https://b2b.austria.info/de-at/), [EOX](https://eox.at/) and [BRZ](https://www.brz.gv.at/) as part of Digital Twin Austria (GTIF-AT EA). 

Stakeholder workshops distilled a wide range of user stories into three use cases, each shedding light on a different facet of the project's guiding question:  

**“How can we factor climate change into tourism planning and development in Austria?”**

## The bigger picture
Beyond the three use cases, the project's operational concept frames a set of longer-term goals for the tool – addressing the challenges of climate change through informed decisions, better planning and greater awareness: 

- **Tourism management**: supporting sustainable planning and adapting tourism offerings and infrastructure, balancing economic and ecological goals. 

- **Public awareness**: making climate impacts understandable to a wider audience, to build awareness and encourage engagement with climate action. 

- **Informed decision-making**: giving policymakers, scientists and businesses a common, evidence-based picture to work from. 

- **Risk management**: as real-time and forecast data are integrated, supporting earlier warnings and better-prepared responses to extreme weather and natural hazards. 

- **Research and development**: providing data access and analysis tools that researchers can use to study patterns, test hypotheses and generate new insights. 
- **Economic opportunity**: giving businesses and investors a basis for sustainable planning and investment decisions. 

- **Transparency and collaboration**: encouraging open data-sharing and joint problem-solving across government, science and industry.

## The three Use Cases
Explore each Use Case in detail on its own page: 

- **[Use Case 1 – Climate Indicators](https://gtif-austria.info/explore?indicator=climate_indicators&x=13.3000&y=47.7675&z=8.2272&template=light&datetime=2026-05-26)**: 

[**Use Case 1 - Climate Indicators**](https://gtif-austria.info/narratives/use-case-1-climate-indicators):how the climate in a given region is changing, using indicators such as hot days, tropical nights and strong precipitation days.  

- [**Use Case 2 – Climate Hazards**](https://gtif-austria.info/narratives/use-case-2-climate-hazards): how exposed tourism destinations are to climate-related hazards, from declining snow cover to flooding and heat stress. 

- [**Use Case 3 – Tourism Indicators**](https://gtif-austria.info/narratives/use-case-3-tourism-indicators): how climate change is already reflected in visitor demand, by linking climate data with overnight-stay forecasts.

Each use case draws on different datasets and time horizons, chosen to suit its particular question:

![Bild (8).png](https://raw.githubusercontent.com/GTIF-Austria/public-narratives/d89d4f2e2a4350c6c9bf5a499f1ce744dc5534e8/assets/MichaelaLandauer/Bild-8-1790260140287.png)

*Note: Use Case 1 relies on the ÖKS15 climate projections under two future scenarios (RCP4.5/RCP8.5) running to 2100, whereas Use Cases 2 and 3 are built on observed historical data (SNOWGRID-CL, SPARTACUS) combined with recent and forecast tourism data, focused on the present and very near future.*

## What you can do with the tool
Across all three use cases, the Climate Change Explorer for Tourism offers the same set of interactive functions: 

- **Compare**: place regions and destinations side by side, freely selected. 

- **Simulate**: play through future climate changes and the effect of possible measures. 

- **Explore time**: a time slider spanning months and decades, making the summer/winter contrast visible. 

- **Locate**: search for a location and hover over the map for exact values. 

- **Interpret**: guidance to help make sense of each indicator. 

- **Dowload**: use data for your own analysis and applications. 

*Note: the tool does not yet operate in real time at this stage of the project.*

## Mapping Austria's Climate Indicators <!--{ as="eox-map" mode="tour" position="right" }-->

### <!--{ layers='[{"type":"Tile","properties":{"id":"cloudless-2025;:;EPSG:3857","title":"EOxCloudless 2025","visible":true},"source":{"type":"XYZ","url":"https://{a-e}.s2maps-tiles.eu/wmts/1.0.0/s2cloudless-2025_3857/default/g/{z}/{y}/{x}.jpeg","projection":"EPSG:3857","attributions":"{ EOxCloudless 2025: <a href=\"//s2maps.eu\" target=\"_blank\">Sentinel-2 cloudless - s2maps.eu</a> by <a href=\"//eox.at\" target=\"_blank\">EOX IT Services GmbH</a> (Contains modified Copernicus Sentinel data 2025) }","tileGrid":{"tileSize":[256,256]}}},{"type":"VectorTile","declutter":true,"properties":{"id":"climate_indicators;:;2026-05-26T00:00:00Z;:;Climate Indicators;:;EPSG:3857","title":"Climate Indicators"},"source":{"type":"VectorTile","format":{"type":"MVT"},"url":"https://eoapi.workspace.gtif-eox.hub-otc.eox.at/vector/collections/public.climate_flat_geoms_master/tiles/WebMercatorQuad/{z}/{x}/{y}?scenario=rcp45&metric=hot_days&decade=2051_2060","projection":"EPSG:3857"},"style":{"variables":{"scenario":"rcp45","decade":"2051_2060","month":"jul","selected_elevation":"full","selected_metric":"hot_days","aggregation":"mean","combined_prop":"full_jul_mean","vmin":0,"vmax":10},"tooltip":[{"id":"tourism_region","title":"Region"},{"id":"scenario","title":"Scenario"},{"id":"metric","title":"Metric"},{"id":"full_jul_mean","title":"Value (full | 2051_2060 jul)","decimals":2}],"fill-color":["interpolate",["linear"],["/",["-",["coalesce",["get","full_jul_mean"],0],0],["-",10,0]],0,[254,224,210,1],0.143,[252,187,161,1],0.286,[252,146,114,1],0.429,[251,106,74,1],0.571,[239,59,44,1],0.714,[203,24,29,1],0.857,[165,15,21,1],1,[103,0,13,1]],"stroke-color":"black","stroke-width":1}},{"type":"Tile","properties":{"id":"overlay_bright;:;EPSG:3857","title":"Overlay labels","visible":true},"source":{"type":"XYZ","url":"https://{a-e}.s2maps-tiles.eu/wmts/1.0.0/overlay_base_bright_3857/default/g/{z}/{y}/{x}.png","projection":"EPSG:3857","attributions":"{ Overlay: Data &copy; <a href=\"http://www.openstreetmap.org/copyright\" target=\"_blank\">OpenStreetMap</a> contributors, Made with Natural Earth, Rendering &copy; <a href=\"//eox.at\" target=\"_blank\">EOX</a> }","tileGrid":{"tileSize":[256,256]}}}]' zoom="7.2272" center=[13.350100000000001,47.6455] projection="" animationOptions={duration:500}}-->
#### Tour step title
Select one or more regions by clicking with the mouse and compare data on climatic parameters such as hot days, tropical nights and heavy precipitation days, as well as decades between 1951 and 2100.

## Who it's for
Beyond tourism regions, destinations, businesses and municipalities, the project's operational concept names a wider circle of users who benefit from the tool: 

- **Cable car and ski resort operators**: assessing snow reliability, planning snowmaking and investment. 

- **Tourism associations and destinations**: developing year-round tourism, timing marketing to the climate calendar. 

- **Hospitality and gastronomy**: optimising seasonal planning, preparing heat protection for guests and staff. 

- **Regional and national policymakers**: shaping funding programmes, tourism strategy and spatial planning with evidence. 

- **Science and research**: validating indicators and helping develop the platform's methodology.

## How the tool works
Behind the three use cases lies a five-stage operating model that turns raw data into decision support: 

**1. Data delivery**: climate data (GeoSphere Austria), tourism statistics (Statistik Austria), natural-hazard data, geodata and satellite data (Copernicus) arrive from a wide range of sources. 

**2. Data integration**: datasets are cross-referenced spatially (e.g. matching 1 km climate grids to municipalities), temporally (aligning daily, monthly and seasonal values with booking periods), and by elevation band. 

**3. Processing and quality assurance**: data is cleaned, standard indicators are derived, and results are aggregated to the relevant decision-making levels (day, month, season; municipality, region, state). 

**4. Analysis and visualisation**: results are shown as choropleth maps and charts within the GTIF framework, with filters and a comparison mode for different regions, parameters or time periods. 

**5. Decision support and monitoring**: thresholds and alerts, scenario calculators and structured reports translate the data into concrete options for tourism regions, policymakers and funding bodies.

## CCET and Austria's Vision T
In June 2026, the Federal Ministry for Economic Affairs, Energy and Tourism presented [Vision T](https://www.bmwet.gv.at/Themen/Tourismus/vision-t.html), Austria's national tourism strategy to 2035, structured around five strategic fields of action. The project's own operational concept explicitly names Vision T as a reference use case for the tool, and four of the five fields connect directly to what the CCET delivers: 

- **Resources & Responsibility**: the strongest fit. This field's 2035 target picture explicitly names temperature changes and weather fluctuations as a new challenge and calls for recognising climate adaptation needs early – precisely what the three CCET use cases are designed to deliver. 

- **Economic Strength & Resilience**: a secondary fit. The strategy's tension field “year-round operation vs. economic viability” explicitly notes that climate-driven demand shifts must be factored into season extension, which Use Cases 1 and 3 speak to directly. 

- **Innovation & Digitalisation**: a structural fit. The strategy calls for “networked data spaces” with low-threshold access to high-quality tourism data – exactly the role the CCET plays for climate-related information. 

- **Value & Co-Design**: a fourth fit. This field is about positioning tourism as a driver for liveable regions, developed together with local communities. By showing concretely how living conditions in a municipality are changing – for example rising heat exposure – the CCET gives residents and tourism actors a shared, evidence-based starting point for jointly developing better infrastructure and quality of life. 

Overall, four of Vision T's five strategic fields connect to the CCET – only Labour Market & Skilled Workers remains unaffected – underlining the tool's broad relevance for the strategy.

## Outlook
The project's operational concept also outlines ideas under discussion for further development: daily data feeds from the Green Data Hub and the Österreich Werbung Tourism Data Space, an AI assistant to help translate data into concrete actions, role-based access for different user groups, and usage-based recommendations. These are exploratory directions, not features of the current tool.

## In summary
Together, the three use cases make climate change tangible for Austria's tourism sector in three complementary steps: Use Case 1 shows how the climate itself is changing; Use Case 2 shows what hazards this creates for destinations, starting with the decline in snow cover; and Use Case 3 shows how these changes are already reflected in visitor demand. Taken together, the Climate Change Explorer for Tourism gives tourism regions, destinations, businesses and public administration an evidence-based foundation for climate-smart planning.