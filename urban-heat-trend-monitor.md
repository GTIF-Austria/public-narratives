---
cover-image: https://workspace-ui-public.gtif-at-sc.hub-otc.eox.at/api/public/share/public-4wazei3y-02/UHTM_Wien/iStock-1173256779.jpg
date: 2025-01-01
theme: Sustainable Cities
tags: remote sensing, surface temperature, Sentinel-3
provider: OHB Digital Connect
---

# Urban Heat Trend Monitor <!--{ as="img" mode="hero" src="https://workspace-ui-public.gtif-at-sc.hub-otc.eox.at/api/public/share/public-4wazei3y-02/UHTM_Wien/iStock-1173256779.jpg" }-->
### Turning satellite data into actionable urban cooling strategies <!--{ style="font-size:1.5rem;opacity:0.7;margin-top:1rem;" }-->

## Problem

Cities are increasingly exposed to rising temperatures due to climate change, with urban areas often experiencing significantly higher temperatures than surrounding rural regions. This phenomenon, known as the urban heat island effect, is caused by dense construction materials such as concrete and asphalt that absorb and store heat, reduced vegetation, and limited air circulation between buildings. Additional heat sources such as traffic, air conditioning systems, and industrial activity further intensify the problem. 

These elevated temperatures pose serious challenges. Heatwaves have become more frequent and severe, directly impacting public health, particularly for vulnerable populations such as the elderly and those with pre-existing conditions. Importantly, heat exposure is not evenly distributed across a city: some neighbourhoods experience much stronger heating due to differences in land use, green space availability, and urban structure. 

Despite this growing risk, many cities lack detailed and continuous data to understand where and how heat develops over time. Traditional monitoring approaches are often limited in spatial resolution or coverage, making it difficult to identify local hotspots or long-term trends. Without reliable data, urban planners and policymakers struggle to design targeted mitigation measures such as green infrastructure, cooling strategies, or early warning systems. This creates an urgent need for scalable, data-driven tools that provide consistent, high-resolution insights into urban heat dynamics.

## Proposed solution

The Urban Heat Trend Monitor (UHTM) meets this need by providing a range of tools that enable the high-resolution visualisation of heat distribution within a city, the identification of heat trends over several years, and the calculation and display of urban areas with the same heat trend, thereby allowing local hotspots to be identified quickly and intuitively. For each of these areas, a detailed time-series analysis can be accessed, enabling the identification of patterns and extremes over the entire period as well as for specific seasons (e.g. summer). The UHTM service processes its results based on satellite data provided by Copernicus, the European Union’s Earth observation programme. It combines data from ESA’s Copernicus Sentinel-2 and Sentinel-3 satellites with OpenStreetMap elements to provide users with easily interpretable map layers that contain urban climate information. Super-resolution techniques enable the analysis of heat islands and temperature trends at the level of individual city districts.

The UHTM service has been developed to support a wide range of stakeholders, including urban planners, local authorities, environmental agencies and health authorities. Using the provided information, decision-makers can prioritise measures such as expanding green spaces, adapting building materials or implementing local cooling measures. The service enables cities to move from reactive responses to proactive planning, strengthening climate resilience and improving living conditions for urban populations.

## Service

The UHTM service provides a collection of tools for displaying heat distribution within a city in high resolution, determining heat trends over several years, and calculating and displaying urban areas with the same heat trend, enabling local hotspots to be identified quickly and intuitively. For each of these areas, a detailed time series analysis can be retrieved, enabling identification of patterns and extremes over the entire period as well as for specific periods of the year (e.g. summer).
The UHTM service uses several key algorithms to transform satellite data into actionable heat insights:
1.	**Cloud‑free Index Generation**: This algorithm uses optical Sentinel-2 satellite data to replace cloud-covered pixels with the most recent cloud-free data, thereby ensuring continuous and reliable datasets. This results in consistent and gap-free surface indices, such as NDVI and NDBI, which are applied as input for the further processing steps. 
2.	The **Land Surface Temperature (LST) Downscaling** algorithm improves the coarse 1 km resolution of Sentinel 3 thermal data by modelling the relationship between temperature and land cover characteristics derived from higher resolution indices, such as built‑up areas and surface reflectivity. It uses an empirical model that links LST to the previously processed cloud-free indices at coarse resolution and then applies this relationship to predict LST at finer resolution (e.g. 100 m or higher). The approach is based on a bilinear extension of the TsHARP method, ensuring stable and physically consistent results for urban environments.
3.	For **Smart Partitioning (Segmentation)** a superpixel clustering algorithm (SLIC) is applied to group neighbouring areas with similar heat trends. It produces spatial zones that reflect homogeneous thermal behaviour, rather than administrative boundaries.
4.	The **Time Series Analysis (Trend Modelling)** uses generalized additive models to analyse temperature trends over time. It separates effects like long-term trend, seasonality, and daily variation to provide robust and explainable results.

The UHTM Service uses a cloud-based, containerized (Docker/Kubernetes) architecture, enabling scalable data processing, standardised APIs, and interactive web-based access.

![]([https://workspace-ui-public.baltic-gtif.hub-otc.eox.at/api/public/share/public-4wazei3y-02/UHTM/UHTM_Vilnius.png](https://workspace-ui-public.gtif-at-sc.hub-otc.eox.at/api/public/share/public-4wazei3y-02/UHTM_Wien/UHTM_Wien.png))
<p align="left">
	<em>Figure 1: Urban heat trend monitoring steps: from LST data to local heat trend analysis.</em>
</p>

## Access

The UHTM service is delivered via a cloud-based platform with an interactive web interface. Users can either access the service directly via a web browser or integrate it into external systems, such as digital twins of cities, using standardised APIs.

## Provider

The *Urban Heat Trend Monitor* service was developed by [OHB Digital Connect GmbH](https://ohb-dc.de/en/earth-observation-solutions/)  as part of the *BalticGTIF* and *GTIF-AT SC* projects for the *Sustainable Cities* priority area of the ESA’s ***Green Transition Information Factory*** (GTIF) programme [[1]](https://gtif.esa.int).
