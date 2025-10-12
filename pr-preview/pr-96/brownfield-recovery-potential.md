---
cover-image: https://raw.githubusercontent.com/triebnigg/public-narratives/triebnigg/brownfield/assets/triebnigg/brownfieldcover-1749915393864.jpg

domain: Sustainable Cities
tags:  brownfield, remote sensing, soil sealing

---



# Brownfield Recovery Potential <!--{ as="img" data-fallback-src="https://raw.githubusercontent.com/triebnigg/public-narratives/triebnigg/brownfield/assets/triebnigg/brownfieldhero-1749912841028.png" mode="hero" src="https://raw.githubusercontent.com/GTIF-Austria/public-narratives/deec6ddef930ddf5a8b0a1712ca6ec5836619e49/assets/brownfieldhero-1749912841028.png" }-->
### Area mapping of underutilized properties and brownfields from remote sensing imagery and through application of an Artificial Intelligence algorithm trained with local survey data - a Decision Ready Information Service by Fraunhofer IIS <!--{ style="font-size:1rem;opacity:0.7;margin-top:1rem;" }-->

## Problem & Needs

The availability of land is a critical factor in the development of new commercial projects. However, municipalities and companies seeking to expand or relocate face increasing space constraints, particularly in metropolitan areas. To promote sustainability, the net resealing of commercial areas should be minimized, making the reactivation of underutilized sites—so-called brownfields—an essential strategy. These sites offer several advantages, as they are often already integrated into local supply networks, benefit from established infrastructure, and are easily accessible for employees.

Despite their potential, a major challenge remains: the lack of centralized and comprehensive data on the location, availability, and potential contamination of brownfields. While some municipalities maintain detailed records, others rely on fragmented and inconsistent information, making the efficient redevelopment of these sites more complex. Without a systematic approach, the full potential of brownfield revitalization remains underutilized.

Addressing this gap aligns with Environmental, Social, and Governance (ESG) principles and supports the United Nations' Sustainable Development Goal (SDG) 11, which aims to "make cities and human settlements inclusive, safe, resilient, and sustainable" [UN SDGs](https://sdgs.un.org/goals/goal11?utm_source=chatgpt.com). Specifically, Target 11.3 promotes sustainable urbanization and efficient land use, aligning directly with brownfield redevelopment by preventing unnecessary urban sprawl. In the European Union, policies such as the Cohesion Fund and the European Regional Development Fund (ERDF) actively support brownfield redevelopment to enhance environmental sustainability and economic revitalization ([commission.europa.eu](https://commission.europa.eu/ec-events/brownfield-redevelopment-eu-2019-04-05_en)). Implementing a structured approach to brownfield identification and assessment will enhance environmental responsibility, promote economic revitalization, and foster social well-being by transforming underutilized land into productive, sustainable spaces.

## Solution Capability

The Brownfield Recovery Potential (BRP) Capability is the service which provides the answers to the above questions related to brownfields as described in the following. The service may be tried out free of charge at pre-commercialization stage because of sponsorship provided by [ESA Network of Resources](#network-of-resources-\(nor\)).

### BRP Map

The BRP Capability provides a thematic map product generated on-demand for a customer-selected, geographic Area of Interest (AoI) that may span a municipality, a region or an entire country. This map is intended to make the search for locations and areas much easier and, in the interests of soil and climate protection, to direct the need for space to locations that have already been used, in particular to relieve pressure on the “green meadows” on the outskirts of town.

The BRP map contains the location and size of the places that are most likely classified as brownfields enriched with further meta- and geo-data. The backbone of the applied classification method is a ResNet50-based Convolutional Neural Network (CNN), pre-trained on remote sensing imagery via TorchGeo. To enhance its performance for industrial land-use classification, the model was fine-tuned on a dataset of thousands of annotated images. 

#### Overview of the BRP Interactive Map

The Brownfield Recovery Potential (BRP) Interactive Map is a geospatial web based tool designed to identify and analyze underutilized commercial sites (brownfields) across Austria. This initiative aligns with Austria’s sustainability policies by promoting the redevelopment of brownfields instead of increasing urban sprawl.

Developed as a free and open service by Umweltbundesamt (UBA) Austria’s Federal Environment Agency, in collaboration with Fraunhofer IIS,  the BRP map identifies approximately 5,700 commercial locations exceeding 1,000 m², making them prime candidates for redevelopment.

![](https://raw.githubusercontent.com/triebnigg/public-narratives/triebnigg/brownfield/assets/triebnigg/Interactive-BRP-Map-1749913446965.png)

Fig.1 Demo website for BRP map - real data example for Austria COMING SOON


### Key Benefits & Relevance:

* Economic Revitalization: Encourages investment in underutilized areas and reduces infrastructure costs.  
* Smart Urban Planning: Provides data-driven insights for integrating brownfield redevelopment into municipal frameworks, fostering climate-resilient commercial hubs.

### BRP APIs

The BRP map is accessible through two specialized Application Programming Interfaces (APIs) to ensure seamless integration into geospatial platforms. The primary interface is the OGC Web Map Service (WMS), a standardized protocol that enables dynamic streaming and visualization of map layers. This allows for cascaded integration into widely used Geographical Information Systems (GIS) such as QGIS, facilitating easy access and overlay of BRP data within existing workflows. While the current approach prioritizes geospatial standards, a REST API could be considered as a future development to enhance accessibility and interoperability based on user needs.

### Download

BRP Maps can also be offered for download as files from an access controlled sFTP Server as GeoPackage (GPKG), an open, non-proprietary, platform-independent standard, building on existing standards, for storing geospatial data (vector and raster data) in a file. 

### Delivery Process

The delivery process for the BRP Capability involving Customer and Provider(s) is shown in the following workflow.

![](https://raw.githubusercontent.com/triebnigg/public-narratives/triebnigg/brownfield/assets/triebnigg/Workflow-1749913835418.png)

### Remote Sensing Imagery

The BRP Capability exploits Very-High-Resolution remote sensing data either aerial orthophotos or satellite acquisitions. Two alternatives are offered by the producer: (1) The Customer provides these imagery (e.g. from an open government data repository) or (2) the Provider caters for the procurement of such data at additional cost from commercial sources. 

## About

### Provider Entities

The following entities are, or may be, involved in the provision of the BRP Capability:

[**Fraunhofer Institute of Integrated Circuits (Fraunhofer IIS)**](https://www.scs.fraunhofer.de/de/referenzen/argos.html)

* The BRP Neural Network Algorithm is a copyright of Fraunhofer IIS. The algorithm is closed source.   
* The default AI-Model applied by the Capability has also been built by Fraunhofer IIS using training data from public sources collected for representative situations in Austria. This default Model is made open source under the following Creative Commons Licence: “*Brownfield Recovery Potential AI-Model © 2024 by Fraunhofer IIS is licensed under [CC BY-ND 4.0](https://creativecommons.org/licenses/by-nd/4.0/?ref=chooser-v1)*”.  
* Fraunhofer IIS may be engaged commercially to provide further BRP Models optimized to other situations based on Customer-provided in-situ and survey data \- contact [sales at Fraunhofer IIS](https://www.scs.fraunhofer.de/de/kontakt/kontaktaufnahme-mitarbeiter/kontaktaufnahme-konrad-duerrbeck.html).

[**Austrian Environment Agency (Umweltbundesamt UBA)**](http://www.umweltbundesamt.at/)  
UBA is the provider and owner of the BRP Capability limited to Austria exercising an Austrian government mandate to establish and operate the Capability as an open service throughout the year 2025 and possibly beyond. The next update is expected at the end of 2025\. The BRP Capability is an integral part of the [Brachflächen Dialog Service](https://www.brachflaechen-dialog.at/) operated by UBA. Primary objective has been to serve Austrian stakeholders and public sector users.  
The Austrian BRP Capability is made open source under a Creative Commons Licence.  
The user must be aware that the UBA Service cannot ensure an annual update. Updating cycles depend on the national policies and funding availability.

[**Deutscher Brownfield Verband (DEBV)**](https://deutscherbrownfieldverband.de/)  
DEBV is the provider and owner of a service called “Brownfield Identifikations Kataster (BIK)” for Germany. The BIK and the BRP Capability are both based on the same algorithm by Fraunhofer IIS but use different training models, present different APIs and Web user interfaces, and are commercially independent services. Access to the cadastre is only possible for DEBV members and the minimum term is 1 year. Special conditions apply for municipalities. Customers interested in the German BIK contact [Raphael Thiessen, DEBV](mailto:thiessen@brownfieldverband.de).

[**EOX IT Services (EOX)**](https://eox.at)

1. EOX offers **workspace resources** needed for instantiations of the BRP Capability itself and for downstream Advanced Applications and Services (AAS) building upon the BRP Capability. Such resources include:  
* Streamlined data discovery and access: the workspace includes a centralized repository for accessing the necessary range of remote sensing and geospatial datasets, simplifying the discovery process and ensuring that relevant data can be quickly located.  
* Pre-defined workflows and routines: the HUB platform offers pre-configured algorithms, validated scripts, and automated workflows that reduce setup time and facilitate faster data processing, appealing to users needing efficiency in routine data tasks.  
* Cloud-based computational resources allow users to handle large datasets without investing in their own hardware, making it accessible for users with limited computational resources.

2. EOX offers to implement **Advanced Applications and Services (AAS)**, including interactive, customizable  dashboards and visualizations, enabling users to communicate their findings effectively, a critical feature for journalists, NGOs, and public communication. But AAS can also provide useful tools for professionals in the specific field to document the basis of their decision making related to policies and planning measures.

### Disclaimer

The BRP Capability grants no guarantee that all potential brownfields or brownfields will be completely recorded. The tool cannot be used as a classic real estate portal; nor can it answer whether the space is currently available or not. Instead, it can offer quick and, above all, up to nationwide guidance as to which regions have potential areas that may be worth taking into account when determining a location.

The tool cannot answer whether the identified property is actually available or whether it is actually a brownfield site. Please consider this fact before placing an order. 

The updatedness of the BRP Map information depends on the acquisition date of the remote sensing imagery used during its production. The acquisition date is shown in the meta data provided by the BRP Capability. The providers of the tool cannot guarantee that information is regularly updated as this lies entirely within the responsibility of the respective Customer.

Remote Sensing Imagery: For extended Areas of Interest the commercial procurement offered by the BRP Capability Provider might become unrealistically expensive and possibly not feasible within a reasonably short period of time.



## Subscriptions

### Pricing

#### BRP Capability using default Model

**Fraunhofer IIS acts as a Provider** granting the following **Subscription Plans (**Prices exclusive Value Added Tax**) - Prices COMING SOON**:

![](https://raw.githubusercontent.com/triebnigg/public-narratives/triebnigg/brownfield/assets/triebnigg/Plans-1749914333770.png)



#### Option: BRP Capability including Generation of Optimized Model

Contact [sales at Fraunhofer IIS](https://www.scs.fraunhofer.de/de/kontakt/kontaktaufnahme-mitarbeiter/kontaktaufnahme-konrad-duerrbeck.html) for feasibility and price.

#### Option: Remote Sensing Imagery

EOX acts as a re-seller of Very-High-Resolution Imagery. For available options and price offers contact [sales at EOX](mailto:gtif-austria@eox.at).

#### Option: Advanced Applications and Services (AAS)

EOX offers integration of the BRP Map into comprehensive applications for end-users in the investment and real estate sector, for public administration and for policy support. For further information contact [sales at EOX](mailto:gtif-austria@eox.at).

The following section can be activated once the BRP Capability is registered by Fraunhofer IIS at NoR:

### Network of Resources (NoR)

The European Space Agency (ESA) offers sponsorship to eligible entities to **cover the costs of trying out the services provided by the BRP Capability**. Through ESA’s [Network of Resources (NoR)](https://nor-discover.org/) mechanism, a voucher will be provided for the selected BRP service plan, allowing free-at-point-of-use consumption for research, product development and up to pre-commercial demonstration. Vouchers must not be used to support any commercial revenue flows. Contact [sales at Fraunhofer IIS](https://www.scs.fraunhofer.de/de/kontakt/kontaktaufnahme-mitarbeiter/kontaktaufnahme-konrad-duerrbeck.html) for further information.



