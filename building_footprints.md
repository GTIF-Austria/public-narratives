---
cover-image: https://github.com/user-attachments/assets/736dfcf6-0de4-429f-95a4-17ee496fdede
domain: Sustainable Cities
tags: building footprint, remote sensing, change detection
---

# Building Stock Update: Smart City Infrastructure Monitoring
## Introduction
The GTIF Building Footprints service provides a comprehensive solution for monitoring and analyzing urban infrastructure through satellite-based observation. This service delivers up-to-date, spatially and temporally consistent building data, serving as a fundamental component for Smart City solutions.


![](https://raw.githubusercontent.com/silvester-pari/public-narratives/e7b97b072896a5ac9778e1bdbe9cdb0afc78ffe3/assets/ubiwb/building-footprints-01.png)

## Service Overview
The Building Footprints service combines advanced satellite imagery analysis with sophisticated data processing to provide accurate, timely information about urban development and infrastructure changes. Key features include:
* Constant monitoring of urban areas using satellite imagery
* Advanced data fusion techniques combining multiple data sources
* Automated feature extraction for building detection
* Regular updates to maintain current infrastructure information


## Workflow
The service implements three core technological components.

![](https://raw.githubusercontent.com/silvester-pari/public-narratives/e7b97b072896a5ac9778e1bdbe9cdb0afc78ffe3/assets/ubiwb/building-footprints-02.png)

### Constant Monitoring
The service provides continuous surveillance of urban areas through:
*	Regular satellite image acquisition
*	Automated change detection
*	Temporal analysis of urban development

![](https://raw.githubusercontent.com/silvester-pari/public-narratives/e7b97b072896a5ac9778e1bdbe9cdb0afc78ffe3/assets/ubiwb/building-footprints-03.png)


![](https://raw.githubusercontent.com/silvester-pari/public-narratives/e7b97b072896a5ac9778e1bdbe9cdb0afc78ffe3/assets/ubiwb/building-footprints-04.png)


### Data Fusion
The system integrates multiple data sources including:
*	Temporal data series for change detection
*	High-resolution satellite imagery
*	Existing building footprint databases


### Feature Extraction
Advanced algorithms are employed to extract building information:
*	AI-powered building detection
*	Automated footprint generation
*	Change analysis and verification

![](https://raw.githubusercontent.com/silvester-pari/public-narratives/e7b97b072896a5ac9778e1bdbe9cdb0afc78ffe3/assets/ubiwb/building-footprints-07.png)


![](https://raw.githubusercontent.com/silvester-pari/public-narratives/e7b97b072896a5ac9778e1bdbe9cdb0afc78ffe3/assets/ubiwb/building-footprints-05.png)


![](https://raw.githubusercontent.com/silvester-pari/public-narratives/e7b97b072896a5ac9778e1bdbe9cdb0afc78ffe3/assets/ubiwb/building-footprints-06.png)


![](https://raw.githubusercontent.com/silvester-pari/public-narratives/e7b97b072896a5ac9778e1bdbe9cdb0afc78ffe3/assets/ubiwb/building-footprints-08.png)


### Advanced AI-Powered Building Detection
The Building Footprints service leverages cutting-edge AI technology for accurate building detection and segmentation. Our system employs the SAM-Adapter model (Segment Anything Model with domain-specific adaptation) to precisely identify and segment buildings in diverse urban environments. This approach has been validated for effectiveness in challenging scenarios, including refugee settlements where building detection is particularly complex. 

The technical workflow includes:
*	Processing high-resolution satellite imagery through our adapted SAM-Adapter pipeline
*	Generating building masks in GeoTIFF format and building polygons as ShapeFiles
*	Implementing binary semantic segmentation optimized for remote sensing applications
*	Continuous model improvement through regular training with diverse urban datasets

This methodology builds on recent research (Gao, 2024)[^1] that demonstrated the effectiveness of SAM-Adapter for humanitarian applications in refugee camp settings, which we've extended to broader urban environments.

[^1]: Gao, Yunya. "Leveraging Segment Anything Model in Identifying Buildings within Refugee Camps (SAMRefugee) from Satellite Imagery for Humanitarian Operations." _arXiv preprint arXiv:2407.11381_ (2024).

The system maintains high accuracy across various building types and densities while providing regular updates through our automated monitoring pipeline, ensuring that urban development changes are captured promptly and accurately.
This is shown in the following example, a screenshot (Imagery © Google, accessed via QGIS QuickMapServices plugin, 2025. Google.): 

![Bild9](https://github.com/user-attachments/assets/decca39a-1e2d-4dfd-a6ba-9693205741d7)

For the same area, the Pleiades image (0.5m resolution) ordered by ubicube shows that there have been significant changes. 

![Bild10](https://github.com/user-attachments/assets/9f845b38-c766-4f9f-806d-df3a8a2226d7)

The building footprints algorithm provides probability maps in a first step (colorful). Comparison to existing building stock data shows huge differences. 

![Bild11](https://github.com/user-attachments/assets/736dfcf6-0de4-429f-95a4-17ee496fdede)

### 3D Building Stock Integration

The Building Footprints service is evolving toward comprehensive 3D urban modeling by integrating our current 2D detection capabilities with surface and elevation data. This advancement will enable:

* Complete building stock updates with height and volumetric information
* Detailed 3D city models for advanced urban planning
* Improved analysis of urban density and skyline changes
* Enhanced solar potential assessment based on roof geometry

This integration leverages digital surface models (DSM) and digital terrain models (DTM) to extract building heights and shapes, creating accurate 3D representations of urban environments. The resulting models will support more sophisticated applications in urban planning, energy efficiency analysis, and smart city development.

## Use Cases
The Building Footprints service supports various stakeholders:
### Real Estate Developers
* Site analysis and development potential assessment
* Urban growth pattern analysis
* Infrastructure planning support

### Urban Planners
* Urban development monitoring
* Infrastructure needs assessment
* Smart City planning support

### Authorities
* Building permit verification
* Urban change monitoring
* Infrastructure planning

## Integration with Other Services
The Building Footprints service integrates with other GTIF services:
*	Temperature Forecast Service: Building data supports urban temperature modeling
*	Urban Heat Islands Service: Building density analysis for heat island effect studies
*	Infrastructure Planning: Support for urban development decision-making

## Key Benefits
The service offers several advantages:
*	Cost-efficient monitoring solution
*	Scalable to different urban areas
*	Flexible integration capabilities
*	Regular updates for current information

![](https://raw.githubusercontent.com/silvester-pari/public-narratives/e7b97b072896a5ac9778e1bdbe9cdb0afc78ffe3/assets/ubiwb/building-footprints-09.png)

## Pricing Model 
Our business model is based on square kilometers of analyzed area. As we focus exclusively on the built environment, we employ advanced spatial clustering algorithms to minimize the area of interest, creating an optimal trade-off between coverage and cost.
We offer a two-step approach to building footprint monitoring:
1.	*Monitoring based on Copernicus Sentinel II data*: This cost-effective solution covers wide areas and focuses primarily on change detection. This approach is particularly valuable for the GTIF capability "urban heat islands - trend analysis," where understanding changes in the built environment helps predict heat island trends.
2.	*Detailed extraction from high-resolution data*: This premium service provides precise building footprints, detects new buildings, identifies changes to existing structures (such as extensions), and recognizes obsolete buildings.

Both approaches can be combined in a workflow where changes are first detected using the monitoring service, and detailed information is extracted only for areas of interest. A decision layer can be implemented between these steps to trigger detailed extraction only when a certain threshold of changes is detected.
Our pricing structure depends on the selected modules:
*	Low for monitoring services
*	Medium for footprint extraction, with pricing dependent on the required precision
*	Premium for services requiring human validation

### Free Version 
A basic version of the Building Footprints service is available free of charge with limited functionality:
*	Lower resolution monitoring
*	Limited update frequency
*	Restricted area coverage
*	Basic visualization abilities

### Commercial Versions
Our commercial offerings provide enhanced capabilities:

*Standard Package*
*	Monitoring based on Sentinel II data
*	Quarterly updates
*	Basic change detection
*	Standard visualization abilities

*Professional Package*
*	Combined monitoring and detailed extraction
*	Monthly updates
*	Advanced change detection
*	Comprehensive visualization and analysis abilities
*	API access for integration with other systems

*Enterprise Package*
*	Custom monitoring and extraction solutions
*	Customizable update frequency
*	Human-validated results
*	Advanced analytics and reporting
*	Dedicated support

### Network of Resources
The Building Footprints service will be registered with the ESA Network of Resources, making it eligible for ESA sponsoring for pre-commercial utilization. Organizations interested in exploring the capabilities of our service for research or development purposes may qualify for ESA funding support.

### Individual offers
Significant discounts are available when both modules are used together in a workflow. We also offer a degressive pricing scheme for larger areas, making our services more affordable at scale. For detailed pricing information and to request a custom quote, please contact our sales team at office@ubicube.eu.

## About Us
The Building Footprints service is provided by ubicube GmbH, a Space Tech startup specializing in the development of Big Geodata-based Urban Monitoring Services. With extensive expertise in satellite-based detection and observation of buildings and their specific properties, ubicube delivers innovative solutions for urban monitoring and analysis.

### Contact Information
ubicube GmbH
- Schönbrunner Straße 231, 1120 Wien
- www.ubicube.eu
- office@ubicube.eu

### Legal Information
The Building Footprints service is subject to ubicube's General Terms and Conditions. The service is provided "as is" without any warranty or guarantee for a specific property, suitability, or usability. ubicube reserves the right to interrupt or discontinue the service at any time without prior notice.
For detailed legal information, please refer to our Terms and Conditions.

### Copyright Information
© 2025 ubicube GmbH. All rights reserved.
When using data or information derived from the Building Footprints service in publications, websites, or other media, please include the following citation:
"Data provided by ubicube GmbH Building Footprints service, part of the GTIF-AT initiative (https://gtif-austria.info/narratives/building_footprints)."

