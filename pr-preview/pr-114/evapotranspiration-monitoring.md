---
cover-image: https://raw.githubusercontent.com/triebnigg/public-narratives/triebnigg/evapotranspiration-monitoring/assets/triebnigg/evapotranspirationcover-1749285117579.png

domain: Carbon Accounting
tags:  vegetation, remote sensing, green spaces, water balance

---
# Evapotranspiration Monitoring Demonstrator for Austria <!--{ as="img" data-fallback-src="https://raw.githubusercontent.com/triebnigg/public-narratives/triebnigg/evapotranspiration-monitoring-2/assets/triebnigg/EvapotranspirationheroShutterstock-1749572586867.jpg" mode="hero" src="https://raw.githubusercontent.com/GTIF-Austria/public-narratives/903579b8525dc7a7dee6664665e1a197c9c832e6/assets/EvapotranspirationheroShutterstock-1749572586867.jpg" }-->
### by Sistema <!--{ style="font-size:1rem;opacity:0.7;margin-top:1rem;" }-->


## Motivation

The rapid increase in climate change is affecting many sectors, systems, people and institutions around the world that need to adapt to its effects. 

The UN World Water Report [1] draws attention to the increasing water consumption, which affects global food security and economic growth. Understanding hydrological processes, especially evapotranspiration (ET), is crucial for the functionality and sustainability of green spaces and influences water and energy balances. Actual evapotranspiration (ETa) is an important measure of water transfer from the Earth's surface and includes both soil evaporation and plant transpiration.

Remote sensing technologies have become indispensable tools in the estimation of evapotranspiration, particularly in areas such as complex as urban environments. These technologies offer the unique advantage of capturing large-scale data over extensive areas with high precision and at regular intervals, providing critical insights into spatial and temporal variations in ET. The GTIF Capability described here uses Copernicus Sentinel data as systematically and periodically available information source allowing to apply the related information service on any place on Earth, provided related in-situ data can be made available.

Demonstrating this GTIF Capability over Austria is well-justified as climate change is progressing at an above-average rate in this country, as evidenced by numerous measurements and observations. The average annual temperature in Austria is rising more than twice as fast as globally, with particularly strong effects in cities, agriculture, mountain and forest areas.


## Methodology
The methodology to perform evapotranspiration estimation is based on the use of foundation models such as Prithvi [2] that performs a regression analysis of Sentinel-2 multispectral bands and climatic ancillary data (temperature, precipitation and other data), to retrieve an estimation of evapotranspiration measurements obtained from ECOSTRESS.

The data for such methodology needs several pre-processing steps to perform the most consistent analysis: since Sentinel-2, ECOSTRESS and climate data, are all with different spatial and temporal resolution, their fusion requires preliminary steps. Sentinel-2 and ECOSTRESS data are collected in order to avoid cloud covered images, moreover ECOSTRESS imagery is showing some artefacts that need a preliminary cleaning of “bad” pairs of images. Both datasets have different spatial resolution, respectively 10m and 70m, to match spatial resolution, a decision tree based algorithm [3] has been chosen to enhance the reference data, indeed a more complex method than classical interpolation algorithms can lead to better estimations afterwards.

The use of foundation models such as Prithvi increase the capabilities of the analysis, being already pre-trained with a large amount of satellite data (precisely optical such as Sentinel-2). In addition to such model, loss function such as the [perceptual loss](https://arxiv.org/abs/1603.08155) [4] can help in increasing the performance, making the model focusing on similar structure than the ECOSTRESS reference data.



## Information Products
The outcome of the AI-powered processing workflow is a high-quality map that estimates evapotranspiration. This map is delivered in the widely used GeoTIFF format, making it easy to integrate with most Geographic Information System (GIS) tools. Each pixel on the map represents a 10-by-10 meter area on the ground, offering a detailed view of water loss across the landscape. To ensure accuracy in geographic placement, the data is aligned using the Universal Transverse Mercator (UTM) coordinate system, which provides a consistent way to reference locations anywhere in the world. This solution provides agricultural experts, water resource managers, urban landscape managers and environmental scientists with critical insights for precision agriculture, water management, and climate adaptation strategies.

The service provision follows the most practical ways of retrieving data. Through the GTIF platform it is possible to visualize the products and download files for specific areas. Furthermore, an API is made available to programmatically/automatically request the generation of a map and download it when ready.

![](https://raw.githubusercontent.com/triebnigg/public-narratives/triebnigg/evapotranspiration-monitoring-2/assets/triebnigg/evapotranspirationcover-1749572352171.png)

Figure 1: Sentinel-2 RGB and Evapotranspiration over Hochburg-Ach region, Upper Austria

## Entities Involved

The following entities are involved in the developing and communication of the evapotranspiration product.

**SISTEMA GmbH** has developed the evapotranspiration product using Earth Observation (EO) data and is the commercial service provider acting as the interface to customers

**Universität für Bodenkultur Wien (BOKU) Department für Bautechnik und Naturgefahren Institut für Ingenieurbiologie und Landschaftsbau (IBLB)** contributed with evapotranspiration measurements on different green infrastructures under different atmospheric conditions, validating the satellite results.

**GrünStattGrau Forschungs- und Innovations GmbH** is responsible for the validation of the product and acts as well as internal stakeholder transferring the developed methods to greening buildings that would be suitable for subsequent greening.

**EOX IT Services GmbH** provides central components of the GTIF architecture and visualization WebGUI as well as the necessary cloud resources for use by the Capability provider.



## Individual Offers
Sistema GmbH also offer a degressive pricing scheme for larger areas, making the services more affordable at scale. For detailed pricing information and to request a custom quote, please contact our sales team at sales@sistema.at

## Disclaimer

The reference data used to perform the evapotranspiration: ECOSTRESS is showing lower resolution than the input Sentinel-2, which necessitates pre-processing impacting potentially the measurements. Moreover ECOSTRESS is showing some artefacts in its raw format, this has impact on the machine learning prediction and may reduce quality of the desired output.

## Acknowledgement

The implementation of this GTIF Capability has received funding from Österreichische Forschungsförderungsgesellschaft (FFG) and is part of the Green Energy Transition: evapotranspiration and renewable energy for Austria (GET-ET) project.

## Legal Information

The High Resolution Evapotranspiration service is subject to Sistema's General Terms and Conditions. The service is provided "as is" without any warranty or guarantee for a specific property, suitability, or usability. Sistema reserves the right to interrupt or discontinue the service at any time without prior notice. For detailed legal information, please refer to the Terms and Conditions.

## Copyright Information

© 2025 Sistema GmbH. All rights reserved. When using data or information derived from the “High Resolution Evapotranspiration Service” in publications, websites, or other media, please include the following citation: "Data provided by Sistema GmbH “High Resolution Evapotranspiration service”, part of the [GTIF-AT initiative](https://gtif-austria.info/narratives/evapotranspiration\_maps)."

References:

[1]  The United Nations World Water Development Report 2024: water for prosperity and peace <https://unesdoc.unesco.org/ark:/48223/pf0000388948> 

[2] Szwarcman, Daniela, Sujit Roy, Paolo Fraccaro, Þorsteinn Elí Gíslason, Benedikt Blumenstiel, Rinki Ghosal, Pedro Henrique de Oliveira, et al. « Prithvi-EO-2.0: A Versatile Multi-Temporal Foundation Model for Earth Observation Applications ». arXiv, 3 février 2025. <https://doi.org/10.48550/arXiv.2412.02732>. 

[3] Guzinski, Radoslaw. « radosuav/pyDMS ». <https://github.com/radosuav/pyDMS>. 

[4] Johnson, Justin, Alexandre Alahi, et Li Fei-Fei. « Perceptual Losses for Real-Time Style Transfer and Super-Resolution ». arXiv, 27 mars 2016. <https://doi.org/10.48550/arXiv.1603.08155>. 
