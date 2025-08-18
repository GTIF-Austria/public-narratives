---
cover-image: https://raw.githubusercontent.com/triebnigg/public-narratives/triebnigg/evapotranspiration-monitoring-2/assets/triebnigg/road-subsidence-1749906097163.webp

domain: Mobility Transition
tags: roads, bridges, subsidence, remote sensing, Sentinel-1, EGMS

---

# Deformation Monitoring Service of Critical Infrastructure for Transport Infrastructure Predictive Maintenance

#### Deformation monitoring of infrastructure assets via satellite radar data <!--{ style="font-size:1rem;opacity:0.7;margin-top:1rem;" }-->

## Problem & Needs

Infrastructure assets like roads and bridges are the enablers of the mobility transition. These vital infrastructure components are, however, subject to various hazards. Some of these, such as excessive settlements, scouring, or structural deterioration, are often accompanied by early deformations, which may indicate beforehand an approaching damage or even collapse. Thus, monitoring the displacements at the locations of critical civil infrastructure provides an early warning mechanism for these assets. Furthermore, a timely detection of irregular behavior of bridges or road sections greatly improve the level of information available to the operators of infrastructure networks. Railway and highway authorities or city administrations can develop their maintenance strategies considering the valuable insights provided by such data. As a consequence they can be enabled to forecast upcoming maintenance works more accurately and are also able to prioritize better, thus focusing their resources more effectively..   

## Aim

The aim of this service is to provide satellite-derived geospatial indicators of the deformation status of roads and bridges at well-defined instances in time. 

## Method

The service is utilizing the so-called InSAR technology which is based on interferometry measurements conducted in multiple Synthetic Aperture Radar (SAR) satellite observations from the same location on Earth. The [European Ground Motion Service (EGMS)](https://land.copernicus.eu/en/products/european-ground-motion-service) provides processed InSAR data from the Copernicus Sentinel-1 satellite mission. This data is to be combined with the geographic coordinates of the road infrastructure and its components such as bridges located in the Area of Interest (AoI). This allows to measure ground movements and infrastructure deformations across Europe with milimetre precision.

## Solution Capability

The Deformation Monitoring of Critical Infrastructure (DMCI) Capability is the service, which provides infrastructure operators with such highly accurate deformation data mapped to road network geometries. Within the framework of the ESA - Green Transition Information Factories project the potentials of this capability are being publicly demonstrated on a corridor of approximately 20-30 km length at one of the main Austrian road arteries, however, it can be rolled out to the entire road or railway network of a city, region our country.

### DMCI Map

The DMCI Map visualizes the movements of road or railway segments observed by InSAR satellites in a straightforward and easily interpretable manner. The line of sight data available is transformed into vertical displacements and an average value is calculated for all persistent scatterers withn a segment of 50m length. The available information is thus merged into one dataset.  This dataset includes:
* the classification of the point (road, railway, bridge, tunnel, etc.)
* the reliability of the point, as expressed by the number of available persistent scatterers within the segment,
* the evaluation result wether the point shows no anomalies, is subjected to settlement or uplift or no assessment is possible due to insufficient or inconsistent data,
* the time series for this point (combining in case of EGMS data also different processing epochs) including mean values and the standard deviation.


### WebGIS Visualization 

The customer will be able to visualize the deformations over time of the infrastructure assets in her/his care in an interactive map. In this map any linear object of interest, such as a road, railway or bridge is represented by a series of points along the axis of the infrastructure asset. For each of these points the measured ground movements is displayed, based on InSAR data (generally provided by the EGMS).
The points are color-coded, with white points showing no significant deformations, red points showing subsidence and blue points highlighting uplifts. Points are marked grey if no reliable data is available due to insignificant number of reflection points for the radar signal or unacceptably high scatter in the readings. The reliability of the point, as expressed by the number of available persistent scatterers in the segment, is expressed by the diameter of the cirlce used as a marker.

The basic functionality Web-based Geographical Information System (WebGIS) is illustrated here. The WebGIS will be access-controlled for an authorized group of users. 

	
## Map Tour Example <!--{ as="eox-map" mode="tour" }-->

### <!--{ layers='[{"type":"Group","properties":{"id":"OverlayGroup","title":"Overlay Layers"},"layers":[{"type":"Tile","properties":{"id":"overlay_bright;:;EPSG:3857","title":"Overlay labels"},"source":{"type":"XYZ","url":"//s2maps-tiles.eu/wmts/1.0.0/overlay_base_bright_3857/default/g/{z}/{y}/{x}.png","projection":"EPSG:3857","attributions":"{ Overlay: Data &copy; <a href=\"http://www.openstreetmap.org/copyright\" target=\"_blank\">OpenStreetMap</a> contributors, Made with Natural Earth, Rendering &copy; <a href=\"//eox.at\" target=\"_blank\">EOX</a> }"}}]},{"type":"Group","properties":{"id":"AnalysisGroup","title":"Data Layers"},"layers":[{"type":"Vector","source":{"type":"Vector","url":"https://eox-gtif-public.s3.eu-central-1.amazonaws.com/AIT/A14_overview.geojson","format":"GeoJSON","attributions":[]},"properties":{"id":"predictive_maintenance;:;2025-01-01T00:00:00Z;:;0","title":"Predictive Maintenance"},"style":{"circle-stroke-color":"black","circle-stroke-width":1,"circle-radius":["get","size"],"circle-fill-color":["get","color"],"tooltip":[{"id":"ID","title":"Zone"}]}}]},{"type":"Group","properties":{"id":"BaseLayersGroup","title":"Base Layers"},"layers":[{"type":"Tile","properties":{"id":"cloudless-2022;:;EPSG:3857","title":"EOxCloudless 2022"},"source":{"type":"XYZ","url":"//s2maps-tiles.eu/wmts/1.0.0/s2cloudless-2022_3857/default/g/{z}/{y}/{x}.jpeg","projection":"EPSG:3857","attributions":"{ EOxCloudless 2022: <a href=\"//s2maps.eu\" target=\"_blank\">Sentinel-2 cloudless - s2maps.eu</a> by <a href=\"//eox.at\" target=\"_blank\">EOX IT Services GmbH</a> (Contains modified Copernicus Sentinel data 2022) }"}},{"type":"Tile","properties":{"id":"terrain-light;:;EPSG:3857","title":"Terrain light"},"source":{"type":"XYZ","url":"//s2maps-tiles.eu/wmts/1.0.0/terrain-light_3857/default/g/{z}/{y}/{x}.jpeg","projection":"EPSG:3857","attributions":"{ Terrain light: Data &copy; <a href=\"http://www.openstreetmap.org/copyright\" target=\"_blank\">OpenStreetMap</a> contributors and <a href=\"//maps.eox.at/#data\" target=\"_blank\">others</a>, Rendering &copy; <a href=\"http://eox.at\" target=\"_blank\">EOX</a> }"}},{"type":"Tile","properties":{"id":"eox-osm;:;EPSG:3857","title":"OSM Background"},"source":{"type":"XYZ","url":"//s2maps-tiles.eu/wmts/1.0.0/osm_3857/default/g/{z}/{y}/{x}.jpeg","projection":"EPSG:3857","attributions":"{ OSM: Data &copy; <a href=\"http://www.openstreetmap.org/copyright\" target=\"_blank\">OpenStreetMap</a> contributors and <a href=\"//maps.eox.at/#data\" target=\"_blank\">others</a>, Rendering &copy; <a href=\"http://eox.at\" target=\"_blank\">EOX</a> }"}}]}]' zoom="12.41065287217923" center=[9.685640919373704,47.370498013439146] projection="" animationOptions={duration:500}}-->
#### Overview
This map visualizes the deformation of infrastructure over time and can be a helpful tool to aid maintenance and catch potential issues before they cause irresversable damage. 

### <!--{ layers='[{"type":"Group","properties":{"id":"OverlayGroup","title":"Overlay Layers"},"layers":[{"type":"Tile","properties":{"id":"overlay_bright;:;EPSG:3857","title":"Overlay labels"},"source":{"type":"XYZ","url":"//s2maps-tiles.eu/wmts/1.0.0/overlay_base_bright_3857/default/g/{z}/{y}/{x}.png","projection":"EPSG:3857","attributions":"{ Overlay: Data &copy; <a href=\"http://www.openstreetmap.org/copyright\" target=\"_blank\">OpenStreetMap</a> contributors, Made with Natural Earth, Rendering &copy; <a href=\"//eox.at\" target=\"_blank\">EOX</a> }"}}]},{"type":"Group","properties":{"id":"AnalysisGroup","title":"Data Layers"},"layers":[{"type":"Vector","source":{"type":"Vector","url":"https://eox-gtif-public.s3.eu-central-1.amazonaws.com/AIT/A14_overview.geojson","format":"GeoJSON","attributions":[]},"properties":{"id":"predictive_maintenance;:;2025-01-01T00:00:00Z;:;0","title":"Predictive Maintenance"},"style":{"circle-stroke-color":"black","circle-stroke-width":1,"circle-radius":["get","size"],"circle-fill-color":["get","color"],"tooltip":[{"id":"ID","title":"Zone"}]}}]},{"type":"Group","properties":{"id":"BaseLayersGroup","title":"Base Layers"},"layers":[{"type":"Tile","properties":{"id":"cloudless-2022;:;EPSG:3857","title":"EOxCloudless 2022"},"source":{"type":"XYZ","url":"//s2maps-tiles.eu/wmts/1.0.0/s2cloudless-2022_3857/default/g/{z}/{y}/{x}.jpeg","projection":"EPSG:3857","attributions":"{ EOxCloudless 2022: <a href=\"//s2maps.eu\" target=\"_blank\">Sentinel-2 cloudless - s2maps.eu</a> by <a href=\"//eox.at\" target=\"_blank\">EOX IT Services GmbH</a> (Contains modified Copernicus Sentinel data 2022) }"}},{"type":"Tile","properties":{"id":"terrain-light;:;EPSG:3857","title":"Terrain light"},"source":{"type":"XYZ","url":"//s2maps-tiles.eu/wmts/1.0.0/terrain-light_3857/default/g/{z}/{y}/{x}.jpeg","projection":"EPSG:3857","attributions":"{ Terrain light: Data &copy; <a href=\"http://www.openstreetmap.org/copyright\" target=\"_blank\">OpenStreetMap</a> contributors and <a href=\"//maps.eox.at/#data\" target=\"_blank\">others</a>, Rendering &copy; <a href=\"http://eox.at\" target=\"_blank\">EOX</a> }"}},{"type":"Tile","properties":{"id":"eox-osm;:;EPSG:3857","title":"OSM Background"},"source":{"type":"XYZ","url":"//s2maps-tiles.eu/wmts/1.0.0/osm_3857/default/g/{z}/{y}/{x}.jpeg","projection":"EPSG:3857","attributions":"{ OSM: Data &copy; <a href=\"http://www.openstreetmap.org/copyright\" target=\"_blank\">OpenStreetMap</a> contributors and <a href=\"//maps.eox.at/#data\" target=\"_blank\">others</a>, Rendering &copy; <a href=\"http://eox.at\" target=\"_blank\">EOX</a> }"}}]}]' zoom="17" center=[9.664,47.370498013439146] projection="" animationOptions={duration:500}}-->
#### Data
Zooming into a dot on the map and clicking on it will show you the data for that specific location.



### Vertical Deflection (mm) <!--{as="img" data-fallback-src="https://raw.githubusercontent.com/oscar-strasser/public-narratives/oscar-strasser/deformation-monitoring-service-of-critical-infrastructure-for-transport-infrastructure-predictive-maintenance/assets/oscar-strasser/visualization-1755527820252.png" src="https://raw.githubusercontent.com/GTIF-Austria/public-narratives/91da2c2053c17374ff6b7331ca62326ab8e318c8/assets/visualization-1755527820252.png" style="width: 45%; height: 200px;"}-->

## APIs 

The map is optionally delivered via two different Application Programming Interfaces (APIs): (1) the OGC Web Map Service (WMS), a Web-standard portrayal and streaming interface for cascaded integration into widely used Geographical Information Systems such as QGIS, and (2) a RESTful machine-to-machine (M2M) API for integration with special end-user IT environments. Both APIs will be access-controlled for an authorized group of users.

The data provided by the service thus can ultimately be integrated into the indivdual asset managment softwares of the respective infrastructre operator and may thus serve as a valuable source of information for maintenance crews on site.
	
### Delivery Process

The delivery process solely requires the customer, in most cases an infrastructre operator, to provide a dataset with the geographic coordinates of the assets they wish to monitor. Furthermore, if an API integration is desired by the customer the data delivery format must be defined.


## About
### Provider Entities

The following entities are, or may be, involved in the provision of the DMCI Capability:

[Austrian Institute of Technology (AIT)](https://www.ait.ac.at/en/research-topics/structural-dynamics-and-assessment)

The Austrian Institute is the provider of the capability by maintaining and providing the routines required to combine InSAR data from EGMS with the geographic coordinates of the infrastructure components and evaluating it to deliver data which can be interpreted by the experts of the infrastructer operators. 

[EOX IT Services (EOX)](https://eox.at)

EOX complements with its IT expertise, acting as data and application host and front-end implementer.

## Disclaimer

The Capability aims to identify groundmovements of 50m segments of the vital infrastructure such as roads or railways, this does not include however small local damages such as potholes or bumps. Furthermore, the capability primarily provides insigths into long-term movements, aprupt changes caused by accidents or floods cannot me predicted, they may however be analyzed using the provided data after the event.

## Subscriptions
### Pricing

For infrastructure operators such as ASFiNAG, ÖBB or the regional road authorities the satellite monitoring of the infrastructure in their care would provide an essential remote method to complete their toolbox of inspection techniques, thus greatly enhancing their opportunities for predictive maintenance.

There are several alternative options for these authorities to sign up for this service. Different areas of interest may be defined, starting from individual structures such as bridges, through road or railway sections, up to infrastructure networks in a city, region or even the entire country. Depending on the actual user requirements individual subscription and pricing models can be defined. As the processing of the data is highly automatized, for a small additional fee the area covered can be increased significantly.

The third dimension of interest is the temporal resolution required. Since the deformation monitoring of infrastructure assets mainly aims on detecting slow, long-time changes and the EGMS data is provided yearly an annual update of the maps would be recommended. More frequent updates are however possible if requested by the client, this however requires individual data processing and should be considered a premium service with significantly higher costs. Individual processing is also recommended if construction works have been carried out in the section of interest recently, since these generally cause significant chenges in persistent scatterers, thus the automated analysis by EGMS will most likely find insufficient data points.

Finally, the spatial resolution of the monitoring may also be increased by relying on high resolution radar data such as provided by TerraSAR-X (instead of Sentinel-1), however this package would be even higher priced, as o top of the individual data processing the InSAR data would have to be acquired first from commercial providers of X-band radar data. Placing Corner-reflectors on certain objects of particular interest can further increase the data quality since in this case points with guaranteed geographical coordinates are available. In case of infrastructure components such as bridges InSAR accuracy is impaired due to the temperature dependent deformations of the structure. AIT has developped patented techniques to compensate for these effects, this can be included in the analysis as well if desired. In summary the following thre stages of the service may be offered:
* **Stage 1**: **Annual** data update based on **EGMS** data.
* **Stage 2**: **Individual processing** of Sentinel-1 data, with **shorter** update **intervalls** (i.e. quaterly) and consideration of **construction works**.
* **Stage 3**: Increased accuracy by **temperature compensation** for structures and/or placement of **corner-reflectors** and/or analysis of **TerraSAR-X** data.
	
For further information on pricing kindly contact [Philip Leopold](mailto:Philip.Leopold@ait.ac.at) at AIT.
