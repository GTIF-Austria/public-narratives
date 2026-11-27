---
cover-image: https://raw.githubusercontent.com/maximilianvie/public-narratives/refs/heads/main/assets/flood_narratives/flood-validation/Rust/Rust_DamBreaks_Comparison.JPG
domain: Sustainable Cities
tags: flooding, historical flood events, satellite data, validation, calibration, hydrodynamic modelling, digital twin, scenarify, HORA
provider: TU Wien, VRVis
---

# Validating Flood Scenarios from Space

### A fast first check of simulated historical floods against satellite flood maps and gauge data <!--{ style="font-size:1.5rem;opacity:0.7;margin-top:1rem;" }-->

## Introduction

Heavy precipitation has become more frequent and more intense over most land areas since the 1950s, and further warming will very likely intensify it in most regions ([IPCC, 2021][ref-ipcc]). In Austria, more intense heavy rainfall is expected to increase flood hazards ([Fuchs et al., 2025][ref-climate]). Recent events have shown what this can mean: in July 2021, extreme rainfall caused devastating floods in the Eifel region of Rhineland-Palatinate ([LfU RLP, 2022][ref-lfu-2021]), and in September 2024 several localities in the Tullnerfeld in Lower Austria had to be evacuated ([ORF, 2024][ref-rust-evacuation]).

Flood simulations help municipalities and emergency services prepare for such events: they show which areas could be flooded, how deep the water could get and how quickly it arrives. But a simulation is only useful if it can be trusted. The most convincing test is to simulate a flood that actually happened and compare the result with what was observed. A thorough validation of this kind is a project in itself: it requires detailed observations of the event, careful calibration and often the expertise of a specialised engineering office.

In the POPSICLE research project, we explore a faster route: a first-pass validation of new scenarios, which complements dedicated validation studies but does not replace them (Figure 1):

1. **Quick setup.** We build scenarios with **scenarify**, a simulation and visualisation platform developed by VRVis ([VRVis, n.d.-c][ref-scenarify-product]), on top of existing hydrological digital twins (hydrotwins), so that a new area can be modelled with little effort.
2. **Historical events.** Instead of the hypothetical design floods that other projects built with scenarify often explore, our scenarios are based on real floods: river gauge records of the event provide the main inflow and outflow of the model over time.
3. **A view from space.** Flood maps that TU Wien derives from satellite data provide an independent, area-wide observation of the event against which the simulated flood extent is checked.

![Overview: existing hydrotwins and gauge data feed a scenarify simulation of a historical flood, which is compared with a satellite-based flood map][overview-image]

*Figure 1. Overview of the approach: a historical flood is simulated in an existing hydrotwin and compared with a flood map derived from satellite data. Differences feed back into refining the scenario and the satellite mapping.*

We demonstrate the approach for three historical floods in two hydrotwins: the September 2024 flood at Rust im Tullnerfeld in Austria, and the July 2021 floods on the rivers Kyll and Lieser in Rhineland-Palatinate, Germany.

## Building on existing hydrotwins

**scenarify** is one of VRVis's platforms, combining simulation, 3D visualisation and decision support. Tailored applications for different tasks are built on it, flood simulation being one of them ([VRVis, n.d.-c][ref-scenarify-product]). Its hydrodynamic model computes how water spreads across the terrain by solving the shallow water equations on a regular grid ([VRVis, n.d.-a][ref-scenarify-model]).

Setting up a flood model from scratch – terrain, buildings, rivers, flood defences – takes considerable time. Several applications built with scenarify, however, are larger hydrotwins, which also offer simplified public access ([VRVis, n.d.-c][ref-scenarify-product]). In Austria, **HORA 3D** on the HORA platform makes flood scenarios available in 3D ([BMLUK, n.d.][ref-hora]); in Germany, the state of Rhineland-Palatinate provides the **HydroZwilling Rheinland-Pfalz**, a cooperative hydrotwin that VRVis builds with scenarify on behalf of the state ([Land Rhineland-Palatinate, n.d.][ref-hydrotwin-rlp]). Because the model data in these hydrotwins already exist, a new scenario for a chosen area can be set up quickly: we select the area, define where water flows in and out, and provide the inflow over time.

## From hypothetical to historical floods

Hydrotwins like these are often used to explore floods that could happen: scenarios of a given return period, so-called design floods – for example, a flood statistically expected once every 100 or 300 years, as shown in flood hazard maps – or other "what if?" situations, such as the extreme flood in our [flood evacuation narrative](flood-evacuation.md). Such scenarios are valuable for planning, but they cannot be compared with reality, because they never happened.

For this work, we therefore simulate floods that did happen. River gauges record water levels and, from these, discharge – the volume of water passing per second. Where gauges exist upstream and downstream of the study area, their time series determine how much water flows into the model and how the flood wave rises and falls, so that the simulation follows the main course of the real event. Water that reaches the river within the study area, from tributaries or local rain, is not captured in this way (see the Kyll example below). Where no suitable gauge records are available, the inflow can be estimated from other sources, such as published discharge figures for the event, and rain falling on the study area can be added as an approximate value (see the Rust im Tullnerfeld example below). In this way, the scenario is set up for the historical flood with comparatively little effort. The model parameters themselves, above all the roughness of the river bed and the surrounding terrain, keep the default settings that the hydrotwins use for their design-flood scenarios. Adjusting them to one specific event would be a full calibration, which remains a task for dedicated studies (see below).

## Why validation is hard

How well does a simulated flood match the real one? Answering this question thoroughly requires observed data from the actual event, such as measured water levels, that can be compared with the simulation results. scenarify's hydrodynamic model has been validated in this way against real-world floods, as well as against laboratory experiments, in dedicated studies ([VRVis, n.d.-d][ref-scenarify-validation]). For the Danube flood of January 2011 in the Lobau area, for example, measured and simulated water levels agree very well ([VRVis, n.d.-d][ref-scenarify-validation]).

Such observations are often scattered, incomplete or not available at all, and collecting and analysing them is costly. A full validation of a historical event is therefore typically carried out in dedicated projects, often together with engineering offices. For every newly set-up scenario, this is rarely feasible – yet each of them would benefit from a check against reality.

## A first check from space

This is where satellites come in. They capture the Earth's surface regularly and cover large areas within a single observation, so they give a fast, cost-effective overview of a flood, without relying on local measurement stations. Because floods are often caused by heavy rain, radar observations (specifically Synthetic Aperture Radar) are commonly preferred over optical imagery, due to the radar sensor's weather independent observation capability. Because of the low surface roughness of water in comparison to non-inundated land, radar observations feature a high contrast between water and land and the changing surface roughness allows a robust mapping of flooded areas at the time of the satellite overpass.

Within POPSICLE, we use data from the European radar satellite Sentinel-1, with a pixel sampling of 20 × 20 meters. Following [Roth et al., 2026](https://doi.org/10.1007/s41064-026-00417-7), each new image is compared against two modeled reference situations: what the ground normally looks like when it is non-inundated, and what the corresponding flooded surface would look like. A statistical (Bayesian) rule picks the more likely state based on the Sentinel-1 observation and the resulting map shows whether each pixel is flooded or not. The strengths and limits of this approach are analyzed in [Roth et al., 2026](https://doi.org/10.1007/s41064-026-00417-7) on the basis of Austrian flood events.

We compare these maps with the simulated flood extent in both directions: Does the simulated flood cover the areas that the satellite map shows as flooded? And does the satellite map confirm the areas that the simulation floods? Where both agree, this confirms that the scenario reproduces where the water actually went. Where they differ, the comparison points to places worth a closer look — for example, dam breaches during the event (see the Rust im Tullnerfeld example below), water entering the area that the scenario does not capture (see the Kyll example below), flood protection measures built or changed since the event, or details in the terrain data.

Some differences come from the satellite map itself: the approach currently used to derive it relies on the flood-induced change in surface roughness, which is masked in built-up areas by the interaction of the radar signal with the vertical structures of the buildings (see the Kleinschönbichl and Wittlich examples below). To address the built-up-area limitation, work is underway on integrating phase information alongside the amplitude of the radar signal, which is not detailed here but is expected to enhance the approach in the future. Under dense vegetation the C-band radar signal of Sentinel-1 does not reach the ground at all, so flooding can be missed in such places. Here, future work will integrate data from L-band radar satellites featuring a longer wavelength and deeper penetration depth into vegetation.

The satellite comparison checks the simulated flood extent against an independent observation of the real event. We call this a first-pass validation: it does not cover every quantity a detailed study would examine, such as water depths or flow velocities at individual locations, and a satellite image shows a single moment, which need not coincide with the flood peak. Within the project, both the flood maps and the simulations are developed further, so the comparison works both ways: where two independently derived results agree, our confidence in both grows.

## Three historical floods, two hydrotwins

The following table provides an overview of the 3 use cases handled within the POPSICLE project and corresponding details from each hydrotwin:

| Use case            | River      | Location                      | Flood event    | Satellite acquisition        |
| ------------------- | ---------- | ----------------------------- | -------------- | ---------------------------- |
| Rust im Tullnerfeld | Perschling | Lower Austria, Austria        | September 2024 | 2024/09/16 <br/>16:15:20 UTC |
| River Kyll          | Kyll       | Rhineland-Palatinate, Germany | July 2021      | 2021/07/15 <br/>05:50:52 UTC |
| River Lieser        | Lieser     | Rhineland-Palatinate, Germany | July 2021      | 2021/07/15 <br/>05:50:52 UTC |

### Rust im Tullnerfeld, Austria – September 2024

In mid-September 2024, heavy rainfall caused severe flooding in Lower Austria. Along the lower Perschling, the dams broke in several places – one of them at Moosbierbaum, just downstream of Rust im Tullnerfeld – and Rust, in the municipality of Michelhausen, was largely flooded and evacuated ([Wasserverband Perschling Unterlauf, 2024][ref-perschling]; [ORF, 2024][ref-rust-evacuation]). At the Atzenbrugg gauge, the Perschling peaked on 15 September at about 296 m³/s (provisional value), slightly above the discharge statistically expected once every 300 years – the same return period as the hypothetical flood in our [flood evacuation narrative](flood-evacuation.md) ([Wasserverband Perschling Unterlauf, 2024][ref-perschling]). The study area covers about 6.7 × 8.3 km (around 55 km²) between the Perschling and the Danube.

Unlike the two scenarios in Rhineland-Palatinate, this scenario is not driven by complete gauge time series. Instead, the inflow was set from published discharge figures for the Perschling and the Danube, which correspond roughly to the peak values of the event, and the rain falling on the study area is included as a rough approximation over the period of the event. The receding flood wave is therefore not reproduced exactly, and in the later stages the simulation is likely to carry more water than the real event did. These input data are less complete, but they capture the magnitude of the event – and the satellite flood map provides an independent check of the resulting flood pattern. It was taken on 16 September, about a day after the peak at Atzenbrugg, during the receding phase of the flood. 

The first comparison with the satellite flood map showed large differences around Rust: wide areas west of the Perschling, between Moosbierbaum and the Dürnrohr power plant, were flooded in the satellite map but stayed dry in the simulation (Figure 2, left). Following up on these differences, we found the event documentation of the Wasserverband Perschling Unterlauf, the water association for the lower Perschling, which records four dam breaches and numerous further damaged sections along the river ([Wasserverband Perschling Unterlauf, 2024][ref-perschling]). We then added representative breaches at the documented locations near Rust: their actual geometry and timing are not known, so they reproduce the effect of the breaches rather than their exact form. With these representative breaches in place, the simulation reaches most of the areas that the satellite map shows as flooded (Figure 2, right). This illustrates what the satellite comparison is designed for: it revealed that a key process of the real event – the failure of flood defences – was missing from the scenario, and showed where to look for it.

The comparison with the simulation also revealed an interesting effect at the Dürnrohr power plant: the plant's tower acts as a strong point scatterer for the incoming radar signal, which prevented detection of flooding in the surrounding area. Ground-based solar panels in the area likewise impeded the SAR flood mapping. More details are given in [Roth et al., 2026](https://doi.org/10.1007/s41064-026-00417-7).

![Simulated flood extent at Rust im Tullnerfeld without (left) and with (right) the representative dam breaches, compared with the satellite-based flood map][rust-image]

*Figure 2. Rust im Tullnerfeld, September 2024: simulated flood extent (blue) without (left) and with (right) the representative dam breaches. Orange areas are flooded in the satellite-based flood map but not reached by the simulation.*

A closer look at the village of Kleinschönbichl near the Danube shows a typical difference: the simulation floods the streets and gardens between the houses, while the satellite flood map shows only scattered patches there - an example of the limitation of the currently used approach of radar-based mapping in built-up areas (Figure 3). An informal comparison with an aerial photograph published by the local volunteer fire brigade ([Feuerwehr Zwentendorf an der Donau, 2024][ref-kleinschoenbichl-photos]), which cannot be reproduced here for licensing reasons, supports the simulation: the water in the streets and gardens matches closely.

![Kleinschönbichl during the September 2024 flood: simulation and satellite-based flood map][rust-kleinschoenbichl-map]

*Figure 3. Kleinschönbichl, September 2024: simulation (left) and satellite-based flood map (violet, right). Map data © OpenStreetMap contributors.*

### River Kyll, Rhineland-Palatinate – July 2021

In July 2021, extreme rainfall led to record water levels at many gauges in the Eifel region; at 28 gauges, the peak water levels on 14/15 July were classified as extreme, far above a 100-year flood ([LfU RLP, 2022][ref-lfu-2021]). The scenario covers the Kyll between the gauges at Jünkerath and Gerolstein, where the peak on 15 July 2021 also exceeded a 100-year flood ([LfU RLP, 2022][ref-lfu-2021]); their measured discharge time series provide the inflow and outflow of the model. The study area covers about 7.4 × 13.0 km (around 96 km²).

The flooding in this section affects mainly open land rather than settlements. The satellite flood map was taken in the early morning of 15 July 2021, close to the flood peak. Along most of the valley, the simulated flood covers the areas that the satellite map shows as flooded, and their shapes correspond closely (Figure 4).

![Kyll between Jünkerath and Gerolstein: satellite-based flood map (left) and simulated flood extent at about the time of the satellite acquisition (right)][kyll-image]

*Figure 4. Kyll between Jünkerath and Gerolstein, 15 July 2021: satellite-based flood map (red, left) and simulated flood extent at about the time of the satellite acquisition (blue, right).*

Towards the downstream end, near Pelm and Gerolstein, some areas of the satellite map stay dry in the simulation (Figure 5, left). The reason shows in the discharge at the Gerolstein gauge: at the time of the satellite image, the simulation delivers roughly a fifth less water than was measured, and the flood wave arrives later (Figure 5, right).

This water is missing because the scenario does not include all sources of water. Measured water enters only at the upstream end, at Jünkerath. On the way to Gerolstein, however, about a dozen streams join the Kyll – among them the Wiesbach, the Tieferbach and the Hangelsbach – and during the event, heavy rain also fell on the study area itself. Neither is part of the scenario, with one exception: for the Wiesbach, the hydrotwin provides a ready-made inflow for a 100-year flood, which we switched on as a test; it is not a measurement of the 2021 event. The other streams carry no water in the model, so some of the Kyll's flood water even spreads into their empty channels. All of this could be modelled, but it requires additional data – discharge records for the tributaries and rainfall over time. Collecting and preparing them was beyond the scope of this demonstration, which is one of several use cases explored within POPSICLE.

![Kyll at Pelm: areas of the satellite-based flood map not reached by the simulation (left) and measured and simulated discharge at the Gerolstein gauge (right)][kyll-downstream-image]

*Figure 5. Kyll at Pelm, 15 July 2021. Left: areas of the satellite-based flood map (red) that the simulation does not reach. Right: discharge at the Gerolstein gauge over time, measured (grey) and simulated (blue).*

### River Lieser and Wittlich, Rhineland-Palatinate – July 2021

The same weather situation also caused flooding along the Lieser. The scenario focuses on the town of Wittlich and uses gauge time series from Plein, upstream of Wittlich, and from Platten, downstream. At both gauges, the peak of the July 2021 flood exceeded a 100-year flood – roughly a 120-year flood at Plein and a 150-year flood at Platten ([LfU RLP, 2022][ref-lfu-2021]). The study area covers about 6.0 × 8.4 km (around 51 km²).

In this scenario, the flood reaches parts of Wittlich. The satellite flood map used for the comparison was taken in the early morning of 15 July 2021. Downstream of Wittlich, towards Platten, the simulation covers almost all areas that the satellite map shows as flooded (Figure 6). Within the town itself, the satellite map shows hardly any flooding – another example of the limits of the current radar-based mapping approach in built-up areas.

![Lieser between Wittlich and Platten: satellite-based flood map (left) and simulated flood extent at about the time of the satellite acquisition (right)][lieser-image]

*Figure 6. Lieser between Wittlich and Platten, 15 July 2021: satellite-based flood map (red, left) and simulated flood extent at about the time of the satellite acquisition (blue, right).*

The discharge comparison looks better here than on the Kyll. The study area is smaller and fewer streams join the Lieser between the two gauges, so less water is missing: at the Platten gauge, the simulated peak is roughly a tenth below the measured one. As a test, we switched on the hydrotwin's 100-year inflows for two tributaries, the Pinricher Graben and the Bieberbach. They are again not data from the event, but they move the simulated discharge closer to the measurement (Figure 7).

![Lieser at Platten with test inflows for two tributaries: simulated flood extent with the satellite-based flood map (left) and measured and simulated discharge at the Platten gauge (right)][lieser-downstream-image]

*Figure 7. Lieser at Platten, 15 July 2021, with test inflows for two tributaries. Left: simulated flood extent with the satellite-based flood map (red where not reached). Right: discharge at the Platten gauge over time, measured (grey) and simulated (blue).*

In the town centre, the simulation shows in detail how the water spreads through the streets and around the Lieser bridges (Figures 8 and 9) – exactly where the satellite map remains largely blank. For these two views, we also compared the simulation informally with drone photographs published by the regional press ([Trierischer Volksfreund, 2021][ref-wittlich-photos]), which cannot be reproduced here for licensing reasons. The water lines along the streets and at the bridge are very similar in both; one visible difference is a mobile flood protection wall at the bridge, which is not part of the model.

![Wittlich, July 2021: simulated flooding in the streets leading up to a Lieser bridge][wittlich-sim-bridge-approach]

*Figure 8. Wittlich, July 2021: simulated flooding in the streets leading up to a bridge over the Lieser. Blue shows the water depth; building colours show the maximum water depth at each building.*

![Wittlich, July 2021: simulated flooding at a Lieser bridge][wittlich-sim-bridge]

*Figure 9. Wittlich, July 2021: simulated flooding at a bridge over the Lieser.*

## Assumptions and limitations

This demonstration is a research proof of concept: its results depend on the input data and on the assumptions below.

| Topic | Assumption |
| --- | --- |
| Model data | Terrain, buildings and other model data are taken from the existing hydrotwins as they are. Changes since the event, such as new or modified flood protection, may not be reflected. Temporary measures during the event, such as mobile flood walls, are not included. |
| Inflow and rain | Along the Kyll and Lieser, inflow and outflow follow historical gauge records. Tributaries within these study areas and rain falling on them are not included, apart from test inflows based on 100-year design values; the Kyll and Lieser simulations therefore carry less water than the real events, most visibly on the Kyll. For Rust im Tullnerfeld, inflow and outflow are based on published peak discharges, and rain is included as a rough approximation over the period of the event; the receding flood wave is not reproduced exactly, so later stages of the simulation may carry more water than the real event. |
| Model parameters | Roughness and other model parameters use the hydrotwins' default settings and are not calibrated to the individual event. |
| Dam breaches | At Rust im Tullnerfeld, representative breaches are placed at the documented breach locations of the Perschling dams; their actual geometry and timing are not known. |
| Satellite flood maps | A satellite flood map shows the flooded area at the time of acquisition, which may differ from the time of the flood peak. Its resolution is coarser than that of the simulation, and radar-based maps can miss flooding in built-up areas and under dense vegetation. |
| Comparison | The satellite comparison checks the flood extent; it is a first-pass validation and does not replace a calibration against measurements. Water depths and flow velocities at individual locations would require further observations, such as measured water levels or flood marks. |
| Events | Each area is represented by a single historical event. |

## From a first check to better scenarios

Simulating historical floods in existing hydrotwins and comparing them with satellite flood maps provides a fast and cost-effective way to check new scenarios against an independent observation of the real event. In the three examples, the simulated floods reproduce the overall behaviour of the historical events, and differences point to places where a closer look is worthwhile – at Rust im Tullnerfeld, they led to the breached dams along the Perschling; on the Kyll, they showed that water from tributaries and local rain was missing. In built-up areas such as Kleinschönbichl and Wittlich, the satellite maps remain patchy while the simulation shows the flooding in detail – a difference that underlines the need to improve the sensitivity of the currently used mapping approach in such areas.

For municipalities and planners, this means that new scenarios can be checked against reality early on, before more effort is invested in them. This makes the approach particularly useful for smaller projects and everyday scenarios, where a full calibration would not be justified. Scenarios checked in this way can then serve as a basis for further applications – for example, for simulating evacuations, as shown in our [flood evacuation narrative](flood-evacuation.md). And where a scenario is used for important decisions, this first-pass validation provides a solid starting point and helps focus more detailed studies on the places where they matter most. Looking ahead, if satellite flood maps are processed routinely and robust quality is ensured, a service could match a project area and period automatically to an already mapped flood event, making such a check available with very little effort.

## References

- BMLUK – Austrian Federal Ministry of Agriculture and Forestry, Climate and Environmental Protection, Regions and Water Management. (n.d.). *HORA – Natural Hazard Overview & Risk Assessment Austria*. Retrieved 12 November 2026, from [https://hora.gv.at][ref-hora]
- Feuerwehr Zwentendorf an der Donau. (2024, October 2). *Hochwasser 2024* [Flood 2024] [Report with photographs]. Retrieved 13 November 2026, from [https://www.ff-zwentendorf.at/aktuelles/einsaetze/hochwasser-2024-1][ref-kleinschoenbichl-photos]
- Fuchs, S., Schöner, W., Steiger, R., et al. (2025). The Austrian Alps as multi-dimensional focal area. In D. Huppmann, M. Keiler, K. Riahi, & H. Rieder (Eds.), *Second Austrian Assessment Report on Climate Change (AAR2) of the Austrian Panel on Climate Change (APCC)*, Chapter 7. Austrian Academy of Sciences Press. [https://doi.org/10.1553/aar2-ch7][ref-climate]
- IPCC. (2021). Summary for policymakers. In V. Masson-Delmotte et al. (Eds.), *Climate change 2021: The physical science basis. Contribution of Working Group I to the Sixth Assessment Report of the Intergovernmental Panel on Climate Change* (pp. 3–32). Cambridge University Press. [https://doi.org/10.1017/9781009157896.001][ref-ipcc] (statements A.3.2 and B.2.4)
- Land Rhineland-Palatinate. (n.d.). *HydroZwilling Rheinland-Pfalz* [HydroTwin Rhineland-Palatinate] [Web application]. Ministerium für Landwirtschaft, Weinbau, Umwelt und Forsten Rheinland-Pfalz. Retrieved 12 November 2026, from [https://hydrozwilling.rlp.de][ref-hydrotwin-rlp]
- LfU RLP – Landesamt für Umwelt Rheinland-Pfalz. (2022). *Hochwasser im Juli 2021* [Flood of July 2021] [Report]. Retrieved 5 November 2026, from [https://api.edoweb-rlp.de/resource/edoweb:7055445/data][ref-lfu-2021]
- ORF. (2024, September 17). *Sieben Ortschaften evakuiert, vier Tote* [Seven localities evacuated, four dead]. noe.ORF.at. [https://noe.orf.at/stories/3273454/][ref-rust-evacuation]
- Trierischer Volksfreund. (2021). *Aufräumen nach dem Unwetter in Wittlich am 15. Juli 2021* [Cleaning up after the storm in Wittlich on 15 July 2021] [Photo gallery]. Retrieved 13 November 2026, from [https://www.volksfreund.de/fotos/regionale-fotostrecken/fotos-hochwasser-wittlich-aufraeumen-nach-dem-unwetter-im-juli-2021_bid-61354139][ref-wittlich-photos]
- VRVis. (n.d.-a). *Hydrodynamic simulation model*. scenarify documentation. Retrieved 12 November 2026, from [https://scenarify.vrvis.at/help/modelDescription/introduction.html][ref-scenarify-model]
- VRVis. (n.d.-b). *POPSICLE – Digital Twin Austria* [Research project page]. Retrieved 12 November 2026, from [https://www.vrvis.at/en/research/research-projects/popsicle][ref-popsicle]
- VRVis. (n.d.-c). *scenarify®* [Product page]. Retrieved 12 November 2026, from [https://www.vrvis.at/en/products-solutions/products-licenses/scenarify][ref-scenarify-product]
- VRVis. (n.d.-d). *Validation and Use Cases*. scenarify documentation. Retrieved 12 November 2026, from [https://scenarify.vrvis.at/help/modelDescription/validationAndUseCases.html][ref-scenarify-validation]
- Wasserverband Perschling Unterlauf. (2024, October 7). *Hochwasser NÖ 2024: Ereignisdokumentation Hochwasser Sept. (12.9. bis 17.9.2024), Perschling Unterlauf, Fl-km 0,000 bis 16,547* [Flood Lower Austria 2024: Event documentation of the September flood (12–17 September 2024), lower Perschling, river km 0.000 to 16.547] [Presentation slides, association meeting of 7 October 2024]. Retrieved 5 November 2026, from [https://atzenbrugg.at/gemeinden/user/32104/dokumente/1_Praesentation_Perschling_Verbandssitzung_2024_10_06.pdf][ref-perschling]
- Roth, F., Tupas, M. E., Bauer-Marschallinger, B., Schramm, M., & Wagner, W. (2026). Performance of dual-polarization Sentinel-1 flood monitoring in Austria. *PFG–Journal of Photogrammetry, Remote Sensing and Geoinformation Science*, 1-22. doi:10.1007/s41064-026-00417-7

[overview-image]: https://raw.githubusercontent.com/maximilianvie/public-narratives/refs/heads/main/assets/flood_narratives/flood-validation/flood-validation-overview.png
[rust-image]: https://raw.githubusercontent.com/maximilianvie/public-narratives/refs/heads/main/assets/flood_narratives/flood-validation/Rust/Rust_DamBreaks_Comparison.JPG
[rust-kleinschoenbichl-map]: https://raw.githubusercontent.com/maximilianvie/public-narratives/refs/heads/main/assets/flood_narratives/flood-validation/Rust/Kleinschoenbichl_1_nodrone.jpg
[kyll-image]: https://raw.githubusercontent.com/maximilianvie/public-narratives/refs/heads/main/assets/flood_narratives/flood-validation/Kyll/Kyll.JPG
[kyll-downstream-image]: https://raw.githubusercontent.com/maximilianvie/public-narratives/refs/heads/main/assets/flood_narratives/flood-validation/Kyll/Kyll_downstream_lack_of_rain_and_side_rivers.JPG
[lieser-image]: https://raw.githubusercontent.com/maximilianvie/public-narratives/refs/heads/main/assets/flood_narratives/flood-validation/Lieser/Lieser.JPG
[lieser-downstream-image]: https://raw.githubusercontent.com/maximilianvie/public-narratives/refs/heads/main/assets/flood_narratives/flood-validation/Lieser/Lieser_downstream_additional_inflows.JPG
[wittlich-sim-bridge-approach]: https://raw.githubusercontent.com/maximilianvie/public-narratives/refs/heads/main/assets/flood_narratives/flood-validation/Lieser/Wittlich_Flood_comparison_8_nodrone.jpg
[wittlich-sim-bridge]: https://raw.githubusercontent.com/maximilianvie/public-narratives/refs/heads/main/assets/flood_narratives/flood-validation/Lieser/Wittlich_Flood_comparison_9_nodrone.jpg
[ref-ipcc]: https://doi.org/10.1017/9781009157896.001
[ref-climate]: https://doi.org/10.1553/aar2-ch7
[ref-rust-evacuation]: https://noe.orf.at/stories/3273454/
[ref-kleinschoenbichl-photos]: https://www.ff-zwentendorf.at/aktuelles/einsaetze/hochwasser-2024-1
[ref-wittlich-photos]: https://www.volksfreund.de/fotos/regionale-fotostrecken/fotos-hochwasser-wittlich-aufraeumen-nach-dem-unwetter-im-juli-2021_bid-61354139
[ref-scenarify-model]: https://scenarify.vrvis.at/help/modelDescription/introduction.html
[ref-scenarify-product]: https://www.vrvis.at/en/products-solutions/products-licenses/scenarify
[ref-scenarify-validation]: https://scenarify.vrvis.at/help/modelDescription/validationAndUseCases.html
[ref-hora]: https://hora.gv.at
[ref-hydrotwin-rlp]: https://hydrozwilling.rlp.de
[ref-lfu-2021]: https://api.edoweb-rlp.de/resource/edoweb:7055445/data
[ref-popsicle]: https://www.vrvis.at/en/research/research-projects/popsicle
[ref-perschling]: https://atzenbrugg.at/gemeinden/user/32104/dokumente/1_Praesentation_Perschling_Verbandssitzung_2024_10_06.pdf

## About, legals and subscription information

### About

This narrative presents a research demonstrator developed within the **POPSICLE project** ([VRVis, n.d.-b][ref-popsicle]) by dwh GmbH, TU Wien and VRVis. The work described here was carried out by TU Wien and VRVis.

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

The historical flood scenarios and their comparison with satellite flood maps are a research demonstrator, not an operational service. VRVis offers scenarify as a subscription service ([VRVis, n.d.-c][ref-scenarify-product]).

### Copyright and citation

Copyright for this narrative and the capability it describes resides with the providers named above. Please cite this narrative as: TU Wien and VRVis (2026). *Validating Flood Scenarios from Space*. GTIF Austria narrative. Please also cite the underlying models and data listed in the references.
