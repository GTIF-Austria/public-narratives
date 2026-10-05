---
cover-image: https://placehold.co/600x400/png
date: 2025-01-01
theme: Use Case 2 - Climate Hazards
tags: tag1,tag2
provider: narrative_provider1,narrative_provider2
---

# Climate Change Explorer for Tourism <!--{ as="img" mode="hero" src="https://raw.githubusercontent.com/GTIF-Austria/public-narratives/a119e16f897695fb696bb1d963ff901183c7332e/assets/MichaelaLandauer/CCETUC-2Climate-threats-1790866217063.jpg" }-->
### Use Case 2 - Climate Hazards <!--{ style="font-size:1.5rem;opacity:0.7;margin-top:1rem;" }-->

The Climate Change Explorer for Tourism (CCET) is a joint initiative by GeoVille, Österreich Werbung, EOX and BRZ within Digital Twin Austria (GTIF-AT EA), giving Austria's tourism regions a user-friendly picture of climate change impacts and hazards. This page looks at the second of three use cases showcased in the tool.

## What it's about

This use case assesses the increasing exposure of tourism destinations to climate-related hazards – in other words, how vulnerable a given destination is becoming as the climate changes. In this use case, the term “threat” refers to the impact of temperature changes for tourism. In the scope of the project, snow loss has been assessed as one example of these threats. The development of this indicator aims at completing those provided by the [Platform HORA](https://hora.gv.at/#/chwrz:-/bgrau/a-/@47.72463,13.50823,8z) of the BMLUK, already assessing natural hazards and risks all over Austria.

## The data behind it

The data for snow depth comes from the public dataset [SNOWGRID-CL dataset](https://data.hub.geosphere.at/dataset/snowgrid_cl-v2-1d-1km) owned by GeoSphere Austria providing daily updated analyses of daily snow depth and snow water equivalent (SWE) on a 1x1 km grid covering all of Austria since 01.01.1961.

HORA Floods: “The ‘flood risk zoning’ map shows those areas at risk from 30-year, 100-year and 300-year flood events. It should be noted that flood defences (particularly those recently constructed) are not taken into account across the entire area.

Avalanches: The risk posed by avalanches is defined in so-called hazard zone plans, which are drawn up by the Austrian Torrent and Avalanche Control Authority. The hazard zone plan (GZP) is a comprehensive assessment of the risks posed by torrents, avalanches and erosion. It forms the basis for planning protective measures and for assessing their urgency. It supports the building authorities, local and regional spatial planning, and serves the purposes of public safety.

Heatwave: A heatwave according to Kysely (Kysely episode) is identified as soon as the maximum temperature exceeds 30 °C on at least three consecutive days and persists for as long as the average maximum temperature over the entire episode remains above 30 °C and the maximum temperature on any given day does not fall below 25 °C. The figure given is the total number of days falling within a Kysely episode. Data source: SPARTACUS (Spatiotemporal Reconstruction Dataset of Climate in Austria)

Hot days: The figures shown represent the average number of days per year during the 1991–2020 climate period. Data source: SPARTACUS (Spatiotemporal Reconstruction Dataset of Climate in Austria)


Translated with DeepL.com (free version)

## Processing method

Average snow depth between November and April across Austria is compared between a historical reference period (1961–1990) and recent years (2011–2026) at a spatial resolution of 1 km. For each location, the snow depth anomaly is calculated as both an absolute change in centimeters and a percentage change relative to the historical average.

**Output**

The layer “snow depth changes” shows the percentage of recent gain or loss of snow depth in centimeters.

## Hazards under consideration
- Flood risk
- Avalanche risk
- Head days >=30 C risk
- Heat episodes risk
- Snow decline risk

## Benefit for users 
Tourism regions gain a long-term, evidence-based picture of climate hazards across the whole region, supporting decisions on adapting tourism infrastructure. 

Individual destinations can see, cell by cell, how far their local snow cover has already declined – valuable evidence for decisions on snowmaking, resource planning and diversification into snow-independent offerings. 

As further hazards such as flooding, avalanches or heat stress are added, destinations will increasingly be able to weigh up several climate hazards together, rather than assessing each in isolation. 

