import{_ as t,c as a,o as r,af as i}from"./chunks/framework.hObu1goC.js";const p=JSON.parse('{"title":"Deformation Monitoring Service of Critical Infrastructure for Transport Infrastructure Predictive Maintenance","description":"","frontmatter":{},"headers":[],"relativePath":"narratives/monitoring_transport_infrastructure.md","filePath":"narratives/monitoring_transport_infrastructure.md"}'),o={name:"narratives/monitoring_transport_infrastructure.md"};function n(s,e,c,l,d,h){return r(),a("div",null,e[0]||(e[0]=[i('<h1 id="deformation-monitoring-service-of-critical-infrastructure-for-transport-infrastructure-predictive-maintenance" tabindex="-1">Deformation Monitoring Service of Critical Infrastructure for Transport Infrastructure Predictive Maintenance <a class="header-anchor" href="#deformation-monitoring-service-of-critical-infrastructure-for-transport-infrastructure-predictive-maintenance" aria-label="Permalink to &quot;Deformation Monitoring Service of Critical Infrastructure for Transport Infrastructure Predictive Maintenance&quot;">​</a></h1><h4 id="deformation-monitoring-of-infrastructure-assets-via-satellite-radar-data" tabindex="-1">Deformation monitoring of infrastructure assets via satellite radar data <a class="header-anchor" href="#deformation-monitoring-of-infrastructure-assets-via-satellite-radar-data" aria-label="Permalink to &quot;Deformation monitoring of infrastructure assets via satellite radar data &lt;!--{ style=&quot;font-size:1rem;opacity:0.7;margin-top:1rem;&quot; }--&gt;&quot;">​</a></h4><h2 id="problem-needs" tabindex="-1">Problem &amp; Needs <a class="header-anchor" href="#problem-needs" aria-label="Permalink to &quot;Problem &amp; Needs&quot;">​</a></h2><p>Infrastructure assets like roads and bridges are the enablers of the mobility transition. These vital infrastructure components are, however, subject to various hazards. Some of these, such as excessive settlements, scouring, or structural deterioration, are often accompanied by early deformations, which may indicate beforehand an approaching damage or even collapse. Thus, monitoring the displacements at the locations of critical civil infrastructure provides an early warning mechanism for these assets. Furthermore, a timely detection of irregular behavior of bridges or road sections greatly improve the level of information available to the operators of infrastructure networks. Railway and highway authorities or city administrations can develop their maintenance strategies considering the valuable insights provided by such data. As a consequence they can be enabled to forecast upcoming maintenance works more accurately and are also able to prioritize better, thus focusing their resources more effectively.</p><h2 id="aim" tabindex="-1">Aim <a class="header-anchor" href="#aim" aria-label="Permalink to &quot;Aim&quot;">​</a></h2><p>The aim of this service is to provide satellite-derived geospatial indicators of the deformation status of roads and bridges at well-defined instances in time.</p><h2 id="method" tabindex="-1">Method <a class="header-anchor" href="#method" aria-label="Permalink to &quot;Method&quot;">​</a></h2><p>The service is utilizing the so-called InSAR technology which is based on interferometry measurements conducted in multiple Synthetic Aperture Radar (SAR) satellite observations from the same location on Earth. The <a href="https://land.copernicus.eu/en/products/european-ground-motion-service" target="_blank" rel="noreferrer">European Ground Motion Service (EGMS)</a> provides processed InSAR data from the Copernicus Sentinel-1 satellite mission. This data is to be combined with the geographic coordinates of the road infrastructure and its components such as bridges located in the Area of Interest (AoI). This allows to measure ground movements and infrastructure deformations across Europe with milimetre precision.</p><h2 id="solution-capability" tabindex="-1">Solution Capability <a class="header-anchor" href="#solution-capability" aria-label="Permalink to &quot;Solution Capability&quot;">​</a></h2><p>The Deformation Monitoring of Critical Infrastructure (DMCI) Capability is the service, which provides infrastructure operators with such highly accurate deformation data mapped to road network geometries. Within the framework of the ESA - Green Transition Information Factories project the potentials of this capability are being publicly demonstrated on a corridor of approximately 20-30 km length at one of the main Austrian road arteries, however, it can be rolled out to the entire road or railway network of a city, region our country.</p><h3 id="dmci-map" tabindex="-1">DMCI Map <a class="header-anchor" href="#dmci-map" aria-label="Permalink to &quot;DMCI Map&quot;">​</a></h3><p>The DMCI Map visualizes the movements of road or railway segments observed by InSAR satellites in a straightforward and easily interpretable manner. The line of sight data available is transformed into vertical displacements and an average value is calculated for all persistent scatterers within a segment of 50m length. The available information is thus merged into one dataset. This dataset includes:</p><ul><li>the classification of the point (road, railway, bridge, tunnel, etc.)</li><li>the reliability of the point, as expressed by the number of available persistent scatterers within the segment,</li><li>the evaluation result wether the point shows no anomalies, is subjected to settlement or uplift or no assessment is possible due to insufficient or inconsistent data,</li><li>the time series for this point (combining in case of EGMS data also different processing epochs) including mean values and the standard deviation.</li></ul><h3 id="webgis-visualization" tabindex="-1">WebGIS Visualization <a class="header-anchor" href="#webgis-visualization" aria-label="Permalink to &quot;WebGIS Visualization&quot;">​</a></h3><p>The customer will be able to visualize the deformations over time of the infrastructure assets in her/his care in an interactive map. In this map any linear object of interest, such as a road, railway or bridge is represented by a series of points along the axis of the infrastructure asset. For each of these points the measured ground movements is displayed, based on InSAR data (generally provided by the EGMS). The points are color-coded, with white points showing no significant deformations, red points showing subsidence and blue points highlighting uplifts. Points are marked grey if no reliable data is available due to insignificant number of reflection points for the radar signal or unacceptably high scatter in the readings. The reliability of the point, as expressed by the number of available persistent scatterers in the segment, is expressed by the diameter of the cirlce used as a marker.</p><p>The basic functionality Web-based Geographical Information System (WebGIS) is illustrated here. The WebGIS will be access-controlled for an authorized group of users.</p><img src="https://raw.githubusercontent.com/GTIF-Austria/public-narratives/ea3ab7dd22d468343fd08fdcc7440cc9fda2e2c5/assets/AIT-TIT/WR10Figure-1739891671569.jpg" data-fallback-src="https://raw.githubusercontent.com/AIT-TIT/public-narratives/AIT-TIT/wr-10-transport-infrastructure-predictive-maintenance/assets/AIT-TIT/WR10Figure-1739891671569.jpg"> (c) 2025 AIT <h3 id="apis" tabindex="-1">APIs <a class="header-anchor" href="#apis" aria-label="Permalink to &quot;APIs&quot;">​</a></h3><p>The map is optionally delivered via two different Application Programming Interfaces (APIs): (1) the OGC Web Map Service (WMS), a Web-standard portrayal and streaming interface for cascaded integration into widely used Geographical Information Systems such as QGIS, and (2) a RESTful machine-to-machine (M2M) API for integration with special end-user IT environments. Both APIs will be access-controlled for an authorized group of users.</p><p>The data provided by the service thus can ultimately be integrated into the indivdual asset managment softwares of the respective infrastructre operator and may thus serve as a valuable source of information for maintenance crews on site.</p><h3 id="delivery-process" tabindex="-1">Delivery Process <a class="header-anchor" href="#delivery-process" aria-label="Permalink to &quot;Delivery Process&quot;">​</a></h3><p>The delivery process solely requires the customer, in most cases an infrastructre operator, to provide a dataset with the geographic coordinates of the assets they wish to monitor. Furthermore, if an API integration is desired by the customer the data delivery format must be defined.</p><h2 id="about" tabindex="-1">About <a class="header-anchor" href="#about" aria-label="Permalink to &quot;About&quot;">​</a></h2><h3 id="provider-entities" tabindex="-1">Provider Entities <a class="header-anchor" href="#provider-entities" aria-label="Permalink to &quot;Provider Entities&quot;">​</a></h3><p>The following entities are, or may be, involved in the provision of the DMCI Capability:</p><p><a href="https://www.ait.ac.at/en/research-topics/structural-dynamics-and-assessment" target="_blank" rel="noreferrer">Austrian Institute of Technology (AIT)</a></p><p>The Austrian Institute is the provider of the capability by maintaining and providing the routines required to combine InSAR data from EGMS with the geographic coordinates of the infrastructure components and evaluating it to deliver data which can be interpreted by the experts of the infrastructer operators.</p><p><a href="https://eox.at" target="_blank" rel="noreferrer">EOX IT Services (EOX)</a></p><p>EOX complements with its IT expertise, acting as data and application host and front-end implementer.</p><h2 id="disclaimer" tabindex="-1">Disclaimer <a class="header-anchor" href="#disclaimer" aria-label="Permalink to &quot;Disclaimer&quot;">​</a></h2><p>The Capability aims to identify groundmovements of 50m segments of the vital infrastructure such as roads or railways, this does not include however small local damages such as potholes or bumps. Furthermore, the capability primarily provides insigths into long-term movements, aprupt changes caused by accidents or floods cannot me predicted, they may however be analyzed using the provided data after the event.</p><h2 id="subscriptions" tabindex="-1">Subscriptions <a class="header-anchor" href="#subscriptions" aria-label="Permalink to &quot;Subscriptions&quot;">​</a></h2><h3 id="pricing" tabindex="-1">Pricing <a class="header-anchor" href="#pricing" aria-label="Permalink to &quot;Pricing&quot;">​</a></h3><p>For infrastructure operators such as ASFiNAG, ÖBB or the regional road authorities the satellite monitoring of the infrastructure in their care would provide an essential remote method to complete their toolbox of inspection techniques, thus greatly enhancing their opportunities for predictive maintenance.</p><p>There are several alternative options for these authorities to sign up for this service. Different areas of interest may be defined, starting from individual structures such as bridges, through road or railway sections, up to infrastructure networks in a city, region or even the entire country. Depending on the actual user requirements individual subscription and pricing models can be defined. As the processing of the data is highly automatized, for a small additional fee the area covered can be increased significantly.</p><p>The third dimension of interest is the temporal resolution required. Since the deformation monitoring of infrastructure assets mainly aims on detecting slow, long-time changes and the EGMS data is provided yearly an annual update of the maps would be recommended. More frequent updates are however possible if requested by the client, this however requires individual data processing and should be considered a premium service with significantly higher costs. Individual processing is also recommended if construction works have been carried out in the section of interest recently, since these generally cause significant chenges in persistent scatterers, thus the automated analysis by EGMS will most likely find insufficient data points.</p><p>Finally, the spatial resolution of the monitoring may also be increased by relying on high resolution radar data such as provided by TerraSAR-X (instead of Sentinel-1), however this package would be even higher priced, as o top of the individual data processing the InSAR data would have to be acquired first from commercial providers of X-band radar data. Placing Corner-reflectors on certain objects of particular interest can further increase the data quality since in this case points with guaranteed geographical coordinates are available. In case of infrastructure components such as bridges InSAR accuracy is impaired due to the temperature dependent deformations of the structure. AIT has developped patented techniques to compensate for these effects, this can be included in the analysis as well if desired. In summary the following thre stages of the service may be offered:</p><ul><li><strong>Stage 1</strong>: <strong>Annual</strong> data update based on <strong>EGMS</strong> data.</li><li><strong>Stage 2</strong>: <strong>Individual processing</strong> of Sentinel-1 data, with <strong>shorter</strong> update <strong>intervalls</strong> (i.e. quaterly) and consideration of <strong>construction works</strong>.</li><li><strong>Stage 3</strong>: Increased accuracy by <strong>temperature compensation</strong> for structures and/or placement of <strong>corner-reflectors</strong> and/or analysis of <strong>TerraSAR-X</strong> data.</li></ul><p>For further information on pricing kindly contact <a href="mailto:Philip.Leopold@ait.ac.at" target="_blank" rel="noreferrer">Philip Leopold</a> at AIT.</p>',40)]))}const f=t(o,[["render",n]]);export{p as __pageData,f as default};
