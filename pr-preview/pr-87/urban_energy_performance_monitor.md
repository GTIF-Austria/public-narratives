---
cover-image: https://raw.githubusercontent.com/triebnigg/public-narratives/triebnigg/energy-performance-of-buildings/assets/triebnigg/Energy-performance-of-buildings-cover-1749975298270.png
date: 2025-09-06
theme: Sustainable Cities
tags: remote sensing, surface temperature, Sentinel-3
official: true

---

# Urban Energy Performance Monitor <!--{ as="img" data-fallback-src="https://raw.githubusercontent.com/triebnigg/public-narratives/triebnigg/energy-performance-of-buildings/assets/triebnigg/Energy-performance-of-buildings-hero-1749975057844.jpg" mode="hero" src="https://raw.githubusercontent.com/GTIF-Austria/public-narratives/1434714ec07a9fe83bae56f7978ed34024a28287/assets/Energy-performance-of-buildings-hero-1749975057844.jpg" }-->
### provided by Austrian Institute of Technology and partners<!--{ style="font-size:1rem;opacity:0.7;margin-top:1rem;" }-->


### New measuring instruments and reference values through integration of satellite thermal imagery that make urban energy efficiency more visible and quantifiable.<!--{ style="font-size:1rem;opacity:0.7;margin-top:1rem;" }-->

## Problem & Needs

A clear societal objective is to improve energy efficiency and achieve an emission-free building stock. The EU Building Directive EPBD ([Energy Performance of Buildings Directive](https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=OJ:L_202401275))  in particular addresses key aspects of the building sector, including improving overall energy efficiency, creating infrastructure for sustainable mobility and building-integrated energy generation, and introducing central contact points for information and advice.

The general picture is illustrated via the [EU Buildings Climate Tracker](https://www.bpie.eu/publication/eu-buildings-climate-tracker-a-call-for-faster-and-bolder-action/) (EU BCT) which monitors the progress of the building stock in the EU towards the goal of achieving climate neutrality by 2050\.  

![](https://raw.githubusercontent.com/triebnigg/public-narratives/triebnigg/energy-performance-of-buildings/assets/triebnigg/EU-building-climate-tracker-1749975759643.jpg)

*Figure 1 – The EU BCT represents a global index for the whole of the EU. However, conclusions about local settings, trends and forecasts cannot be derived from it. Geographical disaggregation of such an index and of related evidence data would therefore be desirable for supporting more granular policies and a monitoring of their implementation.*

According to the EU Building Directive EPBD, each Member State should set up a national database for the overall energy efficiency of buildings. This should contain data on the energy efficiency of individual buildings and the energy efficiency of the national building stock. Aggregated and anonymized data on the building stock should be publicly accessible and available in a machine-readable format. Access to the full energy certificates should be granted free of charge to owners and users. Those interested in buying or renting should also have free access. Municipalities should also be able to use the database to draw up municipal heating plans. Individual stakeholders may be provided with fine-grained actionable information for planning and decision making even at the level of individual buildings or building blocks. 

## Solution Capability: UEPM

The *Urban Energy Performance Monitor (UEPM)* Capability is the service which responds to the geospatial aspects and local dimension of monitoring the energy efficiency of buildings. It supports the identification of energy-related renovation potential of buildings. It achieves this by delivering on-demand digital cartographic and statistical products derived from time-series of high-resolution thermal satellite imagery processed in combination with bespoke *Energy Performance Index* building stock information within a user-provided Area of Interest defined at street-level.

The monitor service can deliver thematic, geographically mapped data layers to regional and local data bases such as multi-purpose land cover and land use maps. It can complement the picture of collected energy certificates, inspections records, building renovation passports, the smart capability indicator and measured or calculated energy consumption for the buildings. The service can also be combined with recordings of the life cycle emissions of buildings.

A free demonstration version of the UEPM service is available for selected pilot cities. Further pre-commercial demonstration projects may apply for sponsorship through the [ESA Network of Resources](#network-of-resources-\(nor\)). This enables municipalities to evaluate the service without or reduced initial investments.

### UEPM Information Products

#### UEPM Map

The UEPM Capability provides a thematic map product generated on-demand for a customer-selected, geographic Area of Interest (AoI) that may span a building, a block of buildings, a district, or an entire municipality. This map is intended to make the search for locations and areas much easier and, in the interests of identifying energy efficiency and renovation potentials within the building stock.

The UEPM map contains the building energy efficiency index valid for the local context. It is calculated based on the downscaled Land Surface Temperature (LST) data, fine grained information about the built environment, either directly calculated from earth observation data or already [preprocessed building footprints](https://www.data.gv.at/katalog/dataset/bev_digitaleslandschaftsmodellbauwerkestichtag25012023) and local meteorological data. The map may also be based on integrated use of the urban index product generated from multi-temporal Sentinel-2 as part of the [GTIF Building Stock Update service](https://gtif-austria.info/narratives/building_footprints). The building energy efficiency index is calculated based on the effective temperature difference between remotely observed temperature and global temperature, assuming normal building usage and sufficient contrast between outdoor and indoor temperature (e.g. comparison in winter conditions). 

Copernicus Sentinel-3 LST data freely available globally is downscaled using two distinct methods, including one that leverages the correlation between LST and various land cover indices (e.g., NDVI, NDBI, NDBSI, NDMI, MNDWI, SAVI) through a Random Forest regressor. This method progressively refines the resolution down to 30m, producing a cloud-optimized datacube with a daily thermal time series. The resulting data is integrated with climatological information to derive an energy efficiency index and supports statistical analyses such as yearly or monthly means of all generated data.

![](https://raw.githubusercontent.com/triebnigg/public-narratives/triebnigg/energy-performance-of-buildings/assets/triebnigg/LST-1749976008835.jpg)

*Figure 2 – OpenStreetMap with selected area (a part of Paris, France) for downscaling (Left) and spatial distribution of LST at Paris, France on 19.09.2024 at 10:02 am. (Middle) original Sentinel 3 LST with 1km spatial resolution, (Right) downscaled Sentinel 3 LST with 30m spatial resolution*

![](https://raw.githubusercontent.com/triebnigg/public-narratives/triebnigg/energy-performance-of-buildings/assets/triebnigg/LST-2-1749976234454.jpg)

![](https://raw.githubusercontent.com/triebnigg/public-narratives/triebnigg/energy-performance-of-buildings/assets/triebnigg/LST-3-1749976252699.jpg)

*Figure 3 – A comparison of the downscaled Sentinel 3 LST and Landsat LST at 30m resolution with time-series of mean values for a selected AoI polygon over all 20 validation dates, city of Nis, Serbia.*

#### UEPM Report

The *UEPM Report* provides a concise, location-specific assessment of building stock energy efficiency and renovation potential. It summarizes key findings based on the fusion of downscaled LST data from Copernicus Sentinel satellites with local building information such as typology, usage, construction year, and cadastral records.

Each report includes:

* A thermal efficiency map of the selected area of interest (AoI), classifying areas by relative performance

* Statistical summaries of energy efficiency indices across different areas or districts

* A change analysis based on time-series data, highlighting areas with improving or deteriorating thermal signatures

* Priority zones for renovation or further investigation

* Optional export in standardized formats (PDF, GeoPackage, JSON)

The report is designed to support data-driven decision-making for municipalities, energy agencies, and real estate stakeholders. It complements official energy performance certificates by providing satellite-derived, independent indicators that enable area-wide screening and planning support.


### UEPM APIs

The UEPM map is accessible through two specialized Application Programming Interfaces (APIs) to ensure seamless integration into geospatial platforms. 

1. Date values ​​with available map data are delivered via a STAC catalogue API. This is done by calling a web service, specifying the access token and bounding box (Min X, Min Y, Max X, Max Y).  
* The return value of the web service contains information about the available data in the time-series, which contains the date of the recording.  
* The return value is delivered in JSON (JavaScript Object Notation) format.

2. By calling a WMS/WMTS API with the desired date value, the corresponding image material is delivered as a raster file. The web service is called by specifying:  
* X, Y, Z indices.  
* Desired image format  
* Access token  
* RGB representation (optional indices such as NDVI or EVI).  
* Date of recording  
  The return value of the WMS/WMTS API service is a raster file according to the parameters.


While the current approach prioritizes geospatial standards, a REST API could be considered as a future development to enhance accessibility and interoperability based on user needs (e.g. for calculating statistics of the map time-series data).

### UEPM Download

UEPM Maps can also be offered for download as files from an access controlled sFTP Server as GeoPackage (GPKG), an open, non-proprietary, platform-independent standard, building on existing standards, for storing geospatial data (vector and raster data) in a file. 

### UEPM Dashboard 

The UEPM Map is also presented via a graphical user interface dashboard supporting configurable WebGIS functionalities for map browsing, statistical analysis of the energy efficiency index and report generation for user-selected AoIs. 

A freely accessible dashboard is offered showing indexes generated as a promotional example of the service. Re-use of these data or taking screenshots of the dashboard for non-commercial use is permitted when the attribution “**©** OHB-DS generated using Copernicus Sentinel data” is added. For other uses, stakeholder-friendly [service subscription plans](#subscriptions) are offered.  

![](https://raw.githubusercontent.com/triebnigg/public-narratives/triebnigg/energy-performance-of-buildings/assets/triebnigg/Dashboard-draft-1-1749976710417.jpg)

![](https://raw.githubusercontent.com/triebnigg/public-narratives/triebnigg/energy-performance-of-buildings/assets/triebnigg/Dashboard-draft-2-1749976689208.jpg)

*Figure 4 – UEPM Dashboard (preliminary mockup \- update with real dashboard implementation image COMING SOON.*

## Delivery Process

The delivery process for the UEPM Capability involving Customer and Provider(s) is shown in the following workflow.

![](https://raw.githubusercontent.com/triebnigg/public-narratives/triebnigg/energy-performance-of-buildings/assets/triebnigg/Workflow-1749976889944.png)

## About

### Provider Entities

The following entities are, or may be, involved in the provision of the UEPM Capability:

**Descriptions of service providers, their roles and contact details COMING SOON**

**Austrian Institute of Technologies (AIT)**  

**OHB Digital Services (OHB- DS)**  

**Ubicube**  

[**EOX IT Services (EOX)**](https://eox.at)

1. EOX offers **workspace resources** needed for instantiations of the UEPM Capability itself and for downstream Advanced Applications and Services (AAS) building upon the EPeLBO Capability. Such resources include:  
* Streamlined data discovery and access: the workspace includes a centralized repository for accessing the necessary range of remote sensing and geospatial datasets, simplifying the discovery process and ensuring that relevant data can be quickly located.  
* Pre-defined workflows and routines: the HUB platform offers pre-configured algorithms, validated scripts, and automated workflows that reduce setup time and facilitate faster data processing, appealing to users needing efficiency in routine data tasks.  
* Cloud-based computational resources allow users to handle large datasets without investing in their own hardware, making it accessible for users with limited computational resources.

2. EOX offers to implement **Advanced Applications and Services (AAS)**, including interactive, customizable  dashboards and visualizations, enabling users to communicate their findings effectively, a critical feature for journalists, NGOs, and public communication. But AAS can also provide useful tools for professionals in the specific field to document the basis of their decision making related to policies and planning measures.

### Disclaimer

The UEPM Capability is a large-scale screening tool that analyses satellite data to provide insights into the energy performance of buildings. As the assessment is based on satellite imagery, factors such as cloud coverage may influence the accuracy, and the spatial resolution is more suitable for evaluating groups of buildings rather than individual structures. Since the analysis is conducted from an aerial perspective, it does not account for thermal insulation on building sides or other obscured areas. The frequency of data updates depends on the availability of new satellite imagery. This service is designed as an initial assessment to highlight areas where thermal insulation improvements may be relevant. While satellite data offers a broad overview, incorporating ground data can enhance accuracy and detail.

## Subscriptions

### Pricing

#### BRP Capability using default Model

**AIT acts as a Provider** granting the following **Subscription Plans (**Prices exclusive Value Added Tax**)**:

COMING SOON ....



#### Option: Advanced Applications and Services (AAS)

EOX offers integration of the BRP Map into comprehensive applications for end-users in the investment and real estate sector, for public administration and for policy support. For further information contact [sales at EOX](mailto:gtif-austria@eox.at).

The following section can be activated once the EPeBLO Capability is registered by Fraunhofer IIS at NoR:

### Network of Resources (NoR)

The European Space Agency (ESA) offers sponsorship to eligible entities to **cover the costs of trying out the services provided by the UEPM Capability**. Through ESA’s [Network of Resources (NoR)](https://nor-discover.org/) mechanism, a voucher will be provided for the selected BRP service plan, allowing free-at-point-of-use consumption for research, product development and up to pre-commercial demonstration. Vouchers must not be used to support any commercial revenue flows. 

