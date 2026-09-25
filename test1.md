---
cover-image: https://raw.githubusercontent.com/triebnigg/public-narratives/triebnigg/brownfield/assets/triebnigg/brownfieldcover-1749915393864.jpg

domain: Sustainable Cities
tags:  brownfield, remote sensing, soil sealing
provider: Fraunhofer IIS
collections: brownfield_recovery_potential
---

# Brownfield Recovery Potential (BRP) <!--{ as="img" data-fallback-src="https://raw.githubusercontent.com/triebnigg/public-narratives/triebnigg/brownfield/assets/triebnigg/brownfieldhero-1749912841028.png" mode="hero" src="https://raw.githubusercontent.com/GTIF-Austria/public-narratives/deec6ddef930ddf5a8b0a1712ca6ec5836619e49/assets/brownfieldhero-1749912841028.png" }-->
### Mapping underutilized properties and brownfields <!--{ style="font-size:1rem;opacity:0.7;margin-top:1rem;" }-->

## Problem

The availability of land is a critical factor in the development of new commercial projects. However, municipalities and companies seeking to expand or relocate face increasing space constraints, particularly in metropolitan areas. To promote sustainability, the net resealing of commercial areas should be minimized, making the reactivation of underutilized sites—so-called brownfields—an essential strategy. These sites offer several advantages, as they are often already integrated into local supply networks, benefit from established infrastructure, and are easily accessible for employees.

Despite their potential, a major challenge remains: the lack of centralized and comprehensive data on the location, availability, and potential contamination of brownfields. While some municipalities maintain detailed records, others rely on fragmented and inconsistent information, making the efficient redevelopment of these sites more complex. Without a systematic approach, the full potential of brownfield revitalization remains underutilized.

Addressing this gap aligns with Environmental, Social, and Governance (ESG) principles and supports the United Nations' Sustainable Development Goal (SDG) 11, which aims to "make cities and human settlements inclusive, safe, resilient, and sustainable" [UN SDGs](https://sdgs.un.org/goals/goal11). Specifically, Target 11.3 promotes sustainable urbanization and efficient land use, aligning directly with brownfield redevelopment by preventing unnecessary urban sprawl. In the European Union, policies such as the Cohesion Fund and the European Regional Development Fund (ERDF) actively support brownfield redevelopment to enhance environmental sustainability and economic revitalization ([commission.europa.eu](https://commission.europa.eu/ec-events/brownfield-redevelopment-eu-2019-04-05_en)). Implementing a structured approach to brownfield identification and assessment will enhance environmental responsibility, promote economic revitalization, and foster social well-being by transforming underutilized land into productive, sustainable spaces.

## Proposed Solution

To overcome the lack of centralized and comprehensive data on the location, availability, and potential contamination of brownfields, the Brownfield Recovery Potential (BRP) capability generates an inventory map of brownfields. 

This can be produced on-demand for a customer-selected geographic area of interest: from a municipality to a region to an entire country. 

Such product makes the search for this type of areas much easier and, in the interests of soil and climate protection, to direct the need for space to locations that have already been used and relieve pressure on the green meadows on the outskirts of town.

The BRP map contains the geo-located boundaries of the places that are most likely classified as brownfields enriched with further meta- and geo-attributes. A demonstrative map is available for exploration in the [Explore data](https://gtif-austria.info/explore?x=13.4280&y=47.8056&z=7.9771&template=light&indicator=brownfield_recovery_potential&datetime=2024-01-01) area. 

This specific map has been developed as a free and open service by Umweltbundesamt (UBA) Austria’s Federal Environment Agency, in collaboration with Fraunhofer IIS. It identifies approximately 5,700 commercial locations exceeding 1,000 m², making them prime candidates for redevelopment.

Watch the video below to discover how it works.

[![EO-based tool to support the Green Transition: walk-through of GTIF Austria](https://i.ytimg.com/vi/OoQqfw0JW6M/hq720.jpg)](https://www.youtube.com/watch?v=OoQqfw0JW6M)

<!-- New suggestion starting here -->

## Service

### Technical Methodology
The backbone of the BRP classification is a ResNet50-based Convolutional Neural Network (CNN). To achieve high accuracy in industrial land-use classification, the model is pre-trained on remote sensing imagery via TorchGeo and subsequently fine-tuned on a specialized dataset containing thousands of annotated images. This AI-driven approach allows the system to distinguish between active commercial sites and those showing characteristics of underutilization or abandonment.

### Input Data and Characteristics
The service exploits Very-High-Resolution (VHR) remote sensing data. Users have two options for data sourcing:

Customer-Provided: Utilization of existing aerial orthophotos or open government data repositories.

Provider-Procured: Acquisition of commercial satellite imagery through the service provider at an additional cost.

### Technical Outputs
The primary output is a geospatial dataset identifying prime candidates for redevelopment. In a representative application for Austria, the service successfully identified approximately 5,700 commercial locations exceeding 1,000 m². These outputs are enriched with temporal metadata, indicating the acquisition date of the source imagery to ensure transparency regarding the data's currency.

### Accuracy and Limitations
While the BRP algorithm is highly sophisticated, it is important to note its boundaries:
- Completeness: The tool does not guarantee that every single brownfield will be recorded.
- Status Verification: The AI identifies potential based on visual signatures; it cannot confirm real-time real estate availability or legal ownership status.
- Update Cycles: Data currency is dependent on the frequency of satellite or aerial refreshes. The service provides "guidance" rather than a real-time inventory.

## Delivery

The diagram below shows the process, from defining the request to receiving the output.

![](https://workspace-ui-public.gtif-austria.hub-otc.eox.at/api/public/share/public-4wazei3y-02/WR-14-Fallow-Land-Soil-Sealing/brownfield_recovery_workflow.png)

Accessing the BRP service is designed to be seamless for both GIS professionals and policy-makers. The service is primarily delivered through two modalities:

API Access: We provide an OGC Web Map Service (WMS), which allows for the dynamic streaming of map layers directly into standard Geographical Information Systems like QGIS or ArcGIS. This ensures that BRP data can be easily overlaid with existing municipal zoning or infrastructure maps.

Direct Download: For offline analysis or custom database integration, maps are available via an access-controlled sFTP server. Data is provided in the GeoPackage (GPKG) format—an open, non-proprietary standard that supports both vector and raster data across all major platforms.

Interactive Explorer: A web-based dashboard is available for users who require a more intuitive, visual exploration of the data without specialized software.

## Pricing

**Fraunhofer IIS acts as a Provider** granting the following **Subscription Plans (**Prices exclusive Value Added Tax**) - Prices COMING SOON**:

![](https://raw.githubusercontent.com/triebnigg/public-narratives/triebnigg/brownfield/assets/triebnigg/Plans-1749914333770.png)

## Provider

The BRP service is the result of a collaboration between technical experts and environmental agencies:

- Fraunhofer IIS: The primary technology provider and owner of the BRP Neural Network Algorithm and AI models.

- Austrian Environment Agency (UBA): The operator and owner of the BRP Capability for the Austrian territory, integrating it into national dialog services.

- EOX IT Services: Provides the cloud computational resources, workspace infrastructure, and advanced application dashboards (AAS).

- DEBV: Provides the "Brownfield Identifikations Kataster (BIK)" specifically for the German market using the Fraunhofer algorithm.

## Aditional Information

The BRP Capability grants no guarantee that all potential brownfields or brownfields will be completely recorded. The tool cannot be used as a classic real estate portal; nor can it answer whether the space is currently available or not. Instead, it can offer quick and, above all, up to nationwide guidance as to which regions have potential areas that may be worth taking into account when determining a location.

The tool cannot answer whether the identified property is actually available or whether it is actually a brownfield site. Please consider this fact before placing an order.

The updatedness of the BRP Map information depends on the acquisition date of the remote sensing imagery used during its production. The acquisition date is shown in the meta data provided by the BRP Capability. The providers of the tool cannot guarantee that information is regularly updated as this lies entirely within the responsibility of the respective Customer.

Remote Sensing Imagery: For extended Areas of Interest the commercial procurement offered by the BRP Capability Provider might become unrealistically expensive and possibly not feasible within a reasonably short period of time.

