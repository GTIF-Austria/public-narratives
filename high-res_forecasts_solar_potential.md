---
cover-image: https://raw.githubusercontent.com/triebnigg/public-narratives/triebnigg/evapotranspiration-monitoring-2/assets/triebnigg/solar-potential-1749907032353.webp
domain: Energy Transition
tags:  photovolatic, solar energy, forecast, remote sensing, STRAHLGRID

---

# High-Resolution Forecasts Solar Potential Forecasts

High quality solar radiation data is an essential resource for a wide range of applications, particularly in the context of energy and mobility transitions, sustainable energy planning and climate change adaption.
These solar potential forecasts provide valuable insights for optimizing energy systems, advancing sustainable energy planning, improving grid stability, and supporting the integration of renewable energy sources.


## Applications of Solar Potential Forecasts

The availability of reliable solar radiation forecasts enables several key applications:

- Energy System Optimization: Forecasted radiation data can be used for predictive control of heat pumps and thermal storage systems, improving energy efficiency.
- Grid Stability: 30-hour forecasts allow for the regulation of photovoltaic peaks through the coordination of other power plants or supplementary loads, contributing to grid stability.
- Electric Vehicle Charging: Improved planning of where and when to charge electric vehicles.
- Market Transactions: Long-term forecasts can support transaction optimization in electricity markets.
- PV Performance Monitoring: Warnings for covering layers (e.g. snow or dust) can be integrated to inform users when PV performance may be affected.


## Product description

The solar potential forecasts are based on GeoSphere Austria's radiation model *STRAHLGRID*, which calculates direct, diffuse and global radiation on both horizontal and real surfaces. The model operates in the spectral range of 0.3 to 3 µm and incorporates the following factors:

- Atmospheric turbidity effects, such as water vapor and aerosols.
- Cloud cover: Cloud parametrization is derived from the calibration of satellite cloud data with ground-based radiation measurements.
- Topographic effects: A high-resolution digital elevation model is used to account for horizon shading and terrain effects.

Meteorological input data, including integrated water vapor content, air pressure, and cloud cover, are sourced from the AROME/INCA forecast system (Termonia et al., 2018; Haiden et al., 2011).

![infodienst_solar_step1](https://github.com/user-attachments/assets/d85df220-58a1-400d-9faa-bbcb1cd1e664)

_Fig 1: Example output of global solar radiation from *STRAHLGRID*. 1300 UTC of an arbitrary day._

![infodienst_solar_step2](https://github.com/user-attachments/assets/04db3bc8-5907-4b3c-8cfd-250d26366a81)
_Fig 2: Example output of global solar radiation from *STRAHLGRID*. 1400 UTC of an arbitrary day._ 

The output of STRAHLGRID is then converted into solar power generation potential using the methodology described by *Jerez et al.* (2015). The resulting potential can be scaled to specific PV systems by multiplying it with the nominal installed capacity.

![infodienst_solar_potential_step1](https://github.com/user-attachments/assets/dcf92c00-ab12-46e0-b433-601469fb58d7)
_Fig 3: Example output of solar potential. 1300 UTC of an arbitrary day._

![infodienst_solar_potential_step2](https://github.com/user-attachments/assets/5e93041a-39d0-4d48-9469-5c1a86939032)
_Fig 4: Example output of solar potential. 1400 UTC of an arbitrary day._

## Additional Features: Snow and Dust Cover Warnings
In addition to solar potential forecasts, the system can optionally integrate GeoSphere Austria’s SNOWGRID model and WRF-Chem dust forecasts to provide warnings for snow or dust cover. These warnings are particularly useful for maintaining PV system performance under adverse environmental conditions.


## Technical Specifications

| Feature               | Specification |
| --------------------- | ------------: |
| spatial resolution    | 100(0) m      |
| temporal resolution   | 1 hour        |
| forecast range        | +30 hours     |
| forecast time         | 00 UTC        |
| snow cover            | yes/no        |
| dust cover            | yes/no        |

The model chain is currently implemented for Austria but can be adapted to other regions with additional customization.


## Contact Information

![GSA_Basislogo_Positiv_RGB_XXS](https://github.com/user-attachments/assets/e4a90124-22af-4c13-b659-f91991b36d0d)

**Contact**: [APOLIS-Team](mailto:apolis@geosphere.at)


## Available services

* **Free Version**: Example forecasts are available for selected Austrian cities during the project runtime. Long-term availability is under consideration.
* **Commercial Service**: : Customized forecasts are available on demand. For more information, please contact GeoSphere Austria’s customer service.


## References

1. Göbel et al (2022): Development of a very high resolution solar radiation cadaster for estimating solar energy potential across the entire federal state of Salzburg, Austria. <https://doi.org/10.5194/ems2022-396>.
2. Seitner et al (2024): STRAHLGRID: A solar radiation model with applications across different spatial scales. <https://doi.org/10.5194/ems2024-366>.
3. Jerez et al. (2015): The impact of climate change on photovoltaic power generation in Europe. *Nat Commun* 6, 10014. <https://doi.org/10.1038/ncomms10014>
4. Termonia et al. (2018): The ALADIN System and its canonical model configurations AROME CY41T1 and ALARO CY40T1, *Geosci Model Dev*, 11, 257-281. <https://doi.org/10.5194/gmd-11-257-2018>.
5. Haiden et al. 2011): The Integrated Nowcasting through Comprehensive Analysis (INCA) System and its Validation over the Eastern Alpine Region. *Wea Forecasting*, 26, 166-183. <https://doi.org/10.1175/2010WAF2222451.1>. 
6. Olefs et al. (2020): Changes in Snow Depth, Snow Cover Duration, and Potential Snowmaking Conditions in Austria, 1961–2020—A Model Based Approach. *Atmosphere*, 11, 1330. <https://doi.org/10.3390/atmos11121330>.
7. Publication of model algorithm in progress.
