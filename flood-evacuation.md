---
cover-image: https://raw.githubusercontent.com/maximilianvie/public-narratives/refs/heads/main/assets/flood_narratives/flood-evacuation/population_all_residents.png
domain: Sustainable Cities
tags: flooding, evacuation, climate adaptation, traffic simulation, synthetic population, GEPOC, scenarify, SUMO
provider: dwh,TU Wien,VRVis
---

# Flood Evacuation

### Combining population data, dynamic flood modelling and traffic simulation to support evacuation planning <!--{ style="font-size:1.5rem;opacity:0.7;margin-top:1rem;" }-->

## Introduction

Heavy precipitation has become more frequent and more intense over most land areas since the 1950s, and further warming will very likely intensify it in most regions ([IPCC, 2021][ref-ipcc]). In Austria, more intense heavy rainfall is expected to increase flood hazards, and summer floods are projected to become more frequent, particularly in small Alpine catchments ([Fuchs et al., 2025][ref-climate]).

Severe floods can force entire villages to be evacuated. In September 2024, seven settlements in Lower Austria’s Tullnerfeld region were evacuated after heavy rainfall ([ORF, 2024][ref-rust-evacuation]). Therefore, municipalities in flood-prone areas should be prepared for evacuations.

In the POPSICLE research project, we investigate how simulation can support decisions on flood evacuation. A municipality preparing for an evacuation should aim to find answers to questions such as: Where could traffic accumulate? Which residential areas might be cut off? How many cars would get out, and when?

To answer these questions, we bring three models together. The population model **GEPOC ABM**, short for Generic Population Concept – Agent-Based Model ([Bicher et al., 2018][ref-gepoc-2018], [2025a][ref-gepoc]), describes where people live. The simulation platform **scenarify** by VRVis ([VRVis, n.d.-c][ref-scenarify-product]) describes which roads flood, and when. The open-source traffic simulator **SUMO** ([Alvarez Lopez et al., 2018][ref-sumo]) combines the two: cars start at the residents' homes and drive along a road network derived from OpenStreetMap ([© OpenStreetMap contributors][ref-osm]) towards safe exit points, while the rising water gradually closes roads. We extended the functionalities of SUMO within this project to support the dynamic closing of streets and agent-specific knowledge about blocked roads.

![Overview: population data from GEPOC ABM and flood data from scenarify serve as inputs to a traffic simulation based on SUMO][overview-image]

*Figure 1. Overview of the approach: population data from GEPOC ABM and flood data from scenarify serve as inputs to a traffic simulation based on SUMO.*

We demonstrate the approach in the Möllbrücke–Sachsenburg area in Carinthia, which is an area at high risk of flooding.

## Where does the evacuation begin?

The evacuation starts at people's homes. GEPOC ABM simulates the Austrian population and how it develops over time; each agent represents a person with a sex, an age and a place of residence given as geographic coordinates ([Bicher et al., 2025a][ref-gepoc]). The model is openly parametrised and validated for Austria ([Bicher et al., 2025b][ref-gepoc-params], [2026][ref-gepoc-journal]).

For this evacuation experiment, we use a single snapshot: the synthetic population coordinates that GEPOC ABM generated for 1 January 2025, which are published as open data ([Giannandrea, 2026][ref-population]). In the study area, the snapshot contains 1,833 synthetic residents at 1,121 home locations (Figure 2). The agents are assigned to existing buildings taken from OpenStreetMap, but they just statistically represent the population and do not identify the people who actually live there.

![Home locations of all 1,833 synthetic residents in the Möllbrücke–Sachsenburg study area.][population-image]

*Figure 2. Home locations of all 1,833 synthetic residents in the Möllbrücke–Sachsenburg study area. Data: [Giannandrea (2026)][ref-population]; roads © OpenStreetMap contributors.*

To estimate the number of cars, we apply the passenger-car ownership rate of the district of Spittal an der Drau, 663.7 cars per 1,000 residents ([Statistics Austria, n.d.][ref-cars]). Based on the ratio, the study area has overall 1,217 cars. Each car is simulated individually and starts on a suitable road near to its home.

## Which roads flood, and when?

The flood information comes from **scenarify**, VRVis's web-based platform for hydrodynamic simulation, 3D visualisation and decision support ([VRVis, n.d.-c][ref-scenarify-product]). Its hydrodynamic model computes how water spreads across the terrain by solving the shallow water equations on a regular grid ([VRVis, n.d.-a][ref-scenarify-model]).

In [Validating Flood Scenarios from Space](flood-validation.md), we show how satellite-derived flood maps can be used to validate simulations of historical floods.

For this study, we use a scenarify flood scenario for Sachsenburg, computed on a 1 m grid and covering about 3.4 × 2.3 km. We take three hours of the scenario and, for every minute, transfer the maximum water depth reached so far ([VRVis, n.d.-b][ref-scenarify]) to 10 m sections of the roads. From a depth of 10 cm, a road section closes to new traffic. If the water depth is below 10 cm, cars can still enter the street, but at a maximum speed of 5 km/h.

## How do drivers react to the water?

SUMO is an open-source microscopic traffic simulator: it models individual vehicles and their interactions on a road network ([Alvarez Lopez et al., 2018][ref-sumo]). We substantially extended it within this research project and enabled it to model dynamically changing road conditions.

Agents know the road network and where the exits are. They discover road closures as they encounter them and remember which roads are blocked. When a road is closed, they turn around and look for another route to their destination. If they cannot find a route to the exit they originally wanted to reach, they try to find a different exit. Drivers also look for another route if they spend too long in a queue.

The first video shows a simulation run with a two-hour departure window. 1,217 cars are scheduled to leave home at random times spread evenly over the first two hours, each heading for one of nine exits.

<video src="https://raw.githubusercontent.com/maximilianvie/public-narratives/refs/heads/main/assets/flood_narratives/flood-evacuation/evacuation_overview.mp4" poster="https://raw.githubusercontent.com/maximilianvie/public-narratives/refs/heads/main/assets/flood_narratives/flood-evacuation/evacuation_video_still_0130.png" controls></video>

*Video 1. This video shows a two-hour departure run. Red roads are flooded and closed to new traffic. Light blue roads show shallow water.*

To view the traffic and flooding together in 3D, we import the SUMO simulation results back into scenarify. The second video shows the simulated vehicles reacting to the floods in scenarify.

<video src="https://raw.githubusercontent.com/maximilianvie/public-narratives/refs/heads/main/assets/flood_narratives/flood-evacuation/evacuation_scenarify.mp4" poster="https://raw.githubusercontent.com/maximilianvie/public-narratives/refs/heads/main/assets/flood_narratives/flood-evacuation/evacuation_scenarify_still.jpg" controls preload="metadata"></video>

*Video 2. SUMO vehicle movements visualised together with scenarify's flood simulation.*

## How much does departure timing matter?

We compare three departure windows under the same flood scenario: the same 1,217 cars, with the same homes and initial routes. The agents are scheduled to leave within one, two or three hours. The planned departure order stays the same across the three runs. Only the scheduled times are scaled to fit each window.

Times are given in simulation time, starting at 00:00. The floods rise from 00:00 to 03:00. All runs end at 03:30, and a car counts as evacuated only if it has reached an exit by then. Cars that become trapped or stranded remain on the road and continue to take up space.

With a one-hour departure window, 1,083 of 1,217 cars (89.0%) reach an exit. With a two-hour window, this falls to 776 (63.8%), and with a three-hour window to 528 (43.4%) (Figure 3). In this scenario, the sooner the cars set off, the more of them get out.

![Number and percentage of all 1,217 planned cars reaching an exit for one-, two- and three-hour departure windows.][results-image]

*Figure 3. Number and percentage of all 1,217 planned cars reaching an exit for one-, two- and three-hour departure windows.*

Figure 4 shows, for each area, the share of cars scheduled to leave from there that failed to reach an exit by the end of the simulation. With a one-hour window, these cars come mainly from the south-west of the study area around Sachsenburg, while Möllbrücke clears almost completely. With longer windows, the affected areas spread across Sachsenburg and into Möllbrücke. The maps show which residential areas are difficult to evacuate under each departure schedule.

![Home areas of cars not evacuated at the end of a simulation run. Only cells containing modelled homes are coloured.][home-failure-image]

*Figure 4. Home areas of cars not evacuated at the end of a simulation run. Only cells containing modelled homes are coloured. Data: [Giannandrea (2026)][ref-population]; roads © OpenStreetMap contributors.*

## Assumptions and limitations

This demonstration is a research proof of concept. The results depend on the input data and, among other things, on the assumptions below.

| Topic | Assumption |
| --- | --- |
| Residents | All synthetic residents of the study area are at home when the evacuation starts. |
| Number of cars | The number of cars is derived from the district-average car ownership rate, and residents take all of their cars with them. |
| Departure times | Planned departure times are spread evenly over the time windows.|
| Driver knowledge | Drivers know the road network and the exits, but learn about flooded roads only when they reach them. |
| Water depth | The 10 cm closure threshold and the 5 km/h limit on shallower water are modelling assumptions. |

## From simulation to municipal planning

In this flood scenario, the time of departure makes a large difference. For the one-hour departure window, almost nine in ten cars reach an exit. In the scenario with the three-hour window, fewer than half of the cars successfully evacuate.

Scenario results like these let a municipality examine an evacuation before an emergency. Municipalities can use the results to identify road connections worth investigating, weigh the consequences of departure timing and see which areas may need additional planning attention. Comparing several scenarios reveals whether a bottleneck persists across conditions or belongs to one particular combination of flooding and traffic.

## References

- Alvarez Lopez, P., Behrisch, M., Bieker-Walz, L., Erdmann, J., Flötteröd, Y.-P., Hilbrich, R., Lücken, L., Rummel, J., Wagner, P., & Wießner, E. (2018). Microscopic traffic simulation using SUMO. In *2018 21st International Conference on Intelligent Transportation Systems (ITSC)* (pp. 2575–2582). IEEE. [https://doi.org/10.1109/ITSC.2018.8569938][ref-sumo]
- Bicher, M., Urach, C., & Popper, N. (2018). GEPOC ABM: A generic agent-based population model for Austria. In *Proceedings of the 2018 Winter Simulation Conference (WSC)* (pp. 2656–2667). IEEE. [https://doi.org/10.1109/WSC.2018.8632170][ref-gepoc-2018]
- Bicher, M., Brunmeir, D., Rippinger, C., Urach, C., Viehauser, M., Giannandrea, D., Kastinger, H., & Popper, N. (2025a). *GEPOC ABM, Generic Population Concept – Agent-Based Model, version 2.2* (arXiv:2510.20840). arXiv. [https://doi.org/10.48550/arXiv.2510.20840][ref-gepoc]
- Bicher, M., Viehauser, M., Giannandrea, D., Kastinger, H., Brunmeir, D., Rippinger, C., Urach, C., & Popper, N. (2025b). *GEPOC Parameters – Open source parametrisation and validation for Austria, version 2.0* (arXiv:2511.00048). arXiv. [https://doi.org/10.48550/arXiv.2511.00048][ref-gepoc-params]
- Bicher, M., Viehauser, M., Giannandrea, D., Kastinger, H., Brunmeir, D., & Popper, N. (2026). Novel concepts for agent-based population modelling and simulation: GEPOC ABM 2025. *Simulation Modelling Practice and Theory, 152*, 103339. [https://doi.org/10.1016/j.simpat.2026.103339][ref-gepoc-journal]
- Fuchs, S., Schöner, W., Steiger, R., et al. (2025). The Austrian Alps as multi-dimensional focal area. In D. Huppmann, M. Keiler, K. Riahi, & H. Rieder (Eds.), *Second Austrian Assessment Report on Climate Change (AAR2) of the Austrian Panel on Climate Change (APCC)*, Chapter 7. Austrian Academy of Sciences Press. [https://doi.org/10.1553/aar2-ch7][ref-climate]
- Giannandrea, D. (2026). *Austrian synthetic population coordinates by GEPOC ABM* (Version 1) [Data set; reference date 1 January 2025]. TU Wien. [https://doi.org/10.48436/c4nk9-m2n74][ref-population]
- IPCC. (2021). Summary for policymakers. In V. Masson-Delmotte et al. (Eds.), *Climate change 2021: The physical science basis. Contribution of Working Group I to the Sixth Assessment Report of the Intergovernmental Panel on Climate Change* (pp. 3–32). Cambridge University Press. [https://doi.org/10.1017/9781009157896.001][ref-ipcc] (statements A.3.2 and B.2.4)
- OpenStreetMap contributors. (n.d.). *OpenStreetMap* [Data set]. Available under the Open Database License. [Copyright and attribution][ref-osm]
- ORF. (2024, September 17). *Sieben Ortschaften evakuiert, vier Tote* [Seven localities evacuated, four dead]. noe.ORF.at. [https://noe.orf.at/stories/3273454/][ref-rust-evacuation]
- Statistics Austria. (n.d.). *Kfz-Bestand 2024* [Motor vehicle stock 2024; interactive map]. STATatlas. [STATatlas][ref-cars]: select 2024 → Motorisierungsgrad → Pkw → Bezirk Spittal an der Drau, which gives 663.7 passenger cars per 1,000 residents (50,139 registered passenger cars). For the study area, 1,833 × 0.6637 = 1,216.6, rounded to 1,217 cars; the passenger-car rate is applied directly, without a multiplier for the share of passenger cars among all motor vehicles.
- VRVis. (n.d.-a). *Hydrodynamic simulation model*. scenarify documentation. Retrieved 22 October 2026, from [https://scenarify.vrvis.at/help/modelDescription/introduction.html][ref-scenarify-model]
- VRVis. (n.d.-b). *Results*. scenarify documentation. Retrieved 22 October 2026, from [https://scenarify.vrvis.at/help/modelDescription/results.html][ref-scenarify]
- VRVis. (n.d.-c). *scenarify®* [Product page]. Retrieved 22 October 2026, from [https://www.vrvis.at/en/products-solutions/products-licenses/scenarify][ref-scenarify-product]

[overview-image]: https://raw.githubusercontent.com/maximilianvie/public-narratives/refs/heads/main/assets/flood_narratives/flood-evacuation/flood-evacuation-overview.png
[population-image]: https://raw.githubusercontent.com/maximilianvie/public-narratives/refs/heads/main/assets/flood_narratives/flood-evacuation/population_all_residents.png
[results-image]: https://raw.githubusercontent.com/maximilianvie/public-narratives/refs/heads/main/assets/flood_narratives/flood-evacuation/evacuation_success_by_window.png
[home-failure-image]: https://raw.githubusercontent.com/maximilianvie/public-narratives/refs/heads/main/assets/flood_narratives/flood-evacuation/home_area_failures.png
[ref-gepoc-2018]: https://doi.org/10.1109/WSC.2018.8632170
[ref-gepoc]: https://doi.org/10.48550/arXiv.2510.20840
[ref-gepoc-params]: https://doi.org/10.48550/arXiv.2511.00048
[ref-gepoc-journal]: https://doi.org/10.1016/j.simpat.2026.103339
[ref-population]: https://doi.org/10.48436/c4nk9-m2n74
[ref-scenarify-model]: https://scenarify.vrvis.at/help/modelDescription/introduction.html
[ref-scenarify]: https://scenarify.vrvis.at/help/modelDescription/results.html
[ref-scenarify-product]: https://www.vrvis.at/en/products-solutions/products-licenses/scenarify
[ref-sumo]: https://doi.org/10.1109/ITSC.2018.8569938
[ref-osm]: https://www.openstreetmap.org/copyright
[ref-rust-evacuation]: https://noe.orf.at/stories/3273454/
[ref-cars]: https://www.statistik.at/atlas/?mapid=them_kfz_bestand&layerid=layer1&sublayerid=sublayer1
[ref-ipcc]: https://doi.org/10.1017/9781009157896.001
[ref-climate]: https://doi.org/10.1553/aar2-ch7

## About, legals and subscription information

### About

This narrative presents a research demonstrator developed within the **POPSICLE project** by dwh GmbH, TU Wien and VRVis.

<p>
<img src="https://raw.githubusercontent.com/maximilianvie/public-narratives/refs/heads/main/assets/flood_narratives/logos/logo_dwh.png" alt="dwh GmbH logo" height="56" style="margin: 0 32px 12px 0;">
<img src="https://raw.githubusercontent.com/maximilianvie/public-narratives/refs/heads/main/assets/flood_narratives/logos/logo_tuwien.png" alt="TU Wien logo" height="56" style="margin: 0 32px 12px 0;">
<img src="https://raw.githubusercontent.com/maximilianvie/public-narratives/refs/heads/main/assets/flood_narratives/logos/logo_vrvis.png" alt="VRVis logo" height="56" style="margin: 0 32px 12px 0;">
</p>

The Austrian Federal Ministry of Innovation, Mobility and Infrastructure (BMIMI, formerly BMK) supports POPSICLE through the *Digital Twin Austria 2023* call under its *Digitaler Zwilling Österreich* programme.

FFG is the central national funding organization and strengthens Austria's innovative power. POPSICLE (FFG-Project number 918405) is funded by FFG. [www.ffg.at](http://www.ffg.at)

<p>
<img src="https://raw.githubusercontent.com/maximilianvie/public-narratives/refs/heads/main/assets/flood_narratives/logos/BMIMI_Logo_srgb.png" alt="Austrian Federal Ministry of Innovation, Mobility and Infrastructure (BMIMI) logo" height="72" style="margin: 0 32px 12px 0;">
<img src="https://raw.githubusercontent.com/maximilianvie/public-narratives/refs/heads/main/assets/flood_narratives/logos/logo_ffg.png" alt="FFG Austrian Research Promotion Agency logo" height="80" style="margin: 0 32px 12px 0;">
</p>

Contact: office@dwh.at

### Access and subscription

The flood evacuation simulation is a research demonstrator, not an operational evacuation service. The synthetic population coordinates ([Giannandrea, 2026][ref-population]) are openly available from TU Wien Research Data under the Creative Commons Attribution 4.0 licence (CC BY 4.0), and SUMO is open-source software under the Eclipse Public License 2.0. The simulation platform scenarify is offered by VRVis as a subscription service ([VRVis, n.d.-c][ref-scenarify-product]).

### Copyright and citation

Copyright for this narrative and the capability it describes resides with the providers named above. Map data © OpenStreetMap contributors, available under the Open Database License. Please cite this narrative as: dwh GmbH, TU Wien and VRVis (2026). *Flood Evacuation*. GTIF Austria narrative. Please also cite the underlying models and data listed in the references.
