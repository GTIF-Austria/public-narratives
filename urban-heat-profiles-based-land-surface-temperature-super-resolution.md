
---
title: Urban Heat Profiles based Land Surface Temperature Super Resolution
cover-image: https://picsum.photos/id/53/800/600
---

# Urban Heat Profiles based Land Surface Temperature Super Resolution <!--{ as="img" mode="hero" src="https://workspace-ui-public.aducat.hub-otc-sc.eox.at/api/public/share/public-3bmaz2ur-01/assets/ingo-schoolmann/lst_title.png" }-->


## Urban Heat Profiles based Land Surface Temperature Super Resolution

Understanding how heat is distributed across urban environments is essential for addressing climate related risks, improving urban planning, and enhancing the well being of city residents. Land Surface Temperature (LST) derived from Earth Observation provides valuable insights into urban heat patterns, but traditional satellite products often lack the spatial detail needed to capture the fine scale variability of complex city landscapes. Super resolution techniques bridge this gap by enhancing LST datasets to a much higher level of detail, enabling the creation of precise urban heat profiles at building block or even street level scales. These enriched datasets help identify heat hotspots, evaluate the cooling effects of trees and green infrastructure, and support evidence based strategies for heat mitigation and climate resilient urban development.

## Products

OHB-DS can provide daily super resolution land surface temperature products at 30m spatial resolution. More precisely, the 30m land surface thermal information is using advanced machine learning based on data fusion technique applied to the coarser Sentinel-3 with 1km spatial resolution, using the 30m land surface temperature product from Landsat-8.
The underlying method is currently available in the Hi-Res LST Service (operated by OHB-DS) which is integrated into the DestinE platform, and can be accessed after registration:
https://hireslst.destine.eu/gateway/gui/

Hence, OHB-DS can provide
- Daily 30m Land Surface Temperature data product in common geospatial data formats (e.g. GeoTiff) as well as provide as map layers.
- Time series data for individual areas or points in common structured data formats (e.g., JSON, CSV)
 
## Other Advances
- OHB-DS can proceed with development considering climate projection datasets and as a result produce projected heat profiles for urban areas describing the heat exposure expected in the upcoming years (and decades) with respect to the selected climate projection dataset.
- OHB-DS can provide another Land Surface Temperature Super Resolution products that are based on different methodologies and so provide different quality assessments. OHB-DS can support validation of the different methods for the Vienna.


## Illustrations

        
<p align="center">
  <img src="https://workspace-ui-public.aducat.hub-otc-sc.eox.at/api/public/share/public-3bmaz2ur-01/assets/ingo-schoolmann/lst_sample_visual.png" alt="Green spaces comparison">
</p>

<p align="center"><em>30m Super Resolution Land Surface Temperature for Vienna. Gaps in the data are due to cloud coverage.</em></p>

<p align="center">
  <img src="https://workspace-ui-public.aducat.hub-otc-sc.eox.at/api/public/share/public-3bmaz2ur-01/assets/ingo-schoolmann/lst_places.png" alt="Green spaces comparison">
</p>

<p align="center"><em>The data products supports time series requests for points and areas.</em></p>


<p align="center">
  <img src="https://workspace-ui-public.aducat.hub-otc-sc.eox.at/api/public/share/public-3bmaz2ur-01/assets/ingo-schoolmann/lst_time_series.png" alt="Green spaces comparison">
</p>

<p align="center"><em>Line chart showing the time series data (in Kelvin) for the selected places above.</em></p>

