# High-resolution Forecasts of Solar Potential <!--{ as="img" mode="hero" src="" }-->
#### 

## Product description
High quality data on solar radiation is an essential input for a wide range of applications in the context of energy and mobility transitions, sustainable energy planning and climate change adaption.

These solar potential forecasts offer significant benefits for energy management and grid stability. Forecasted radiation data can enable predictive control of heat pumps and thermal storage systems, improve conditions for selling surplus energy and support better planning for electric vehicle charging. The 30-hour forecasts also contribute to grid stability by allowing for the regulation of PV peaks through other power plants or supplementary loads. In the long term, this information could also enhance transaction optimization at electricity markets.

Furthermore, warnings can be developed and integrated to notify when a covering layer (such as snow or dust) is likely to impact efficiency.

The starting point for calculating the solar potential is the GeoSphere Austria radiation model *STRAHLGRID*. *STRAHLGRID* calculates direct and diffuse radiation (and their sum, global radiation) on horizontal and real surfaces in the spectral range of 0.3 to 3 µm. The model accounts for atmospheric turbidity effects (e.g. water vapor and aerosols), cloud cover and horizon shading. The cloud parametrization is derived from the calibration of satellite cloud data with ground based radiation measurements. For the calculations, a high-quality digital elevation model is used to account for topographic effects, alongside meteorological input data (integrated water vapor content, air pressure and cloud cover) to adress atmospheric effects. For the meteorological input data, forecast data from AROME/INCA is used as initial data. 

![infodienst_solar_step1](https://github.com/user-attachments/assets/d85df220-58a1-400d-9faa-bbcb1cd1e664)

_Fig 1: Example output of global solar radiation from *STRAHLGRID*. 1300 UTC of an arbitrary day._

![infodienst_solar_step2](https://github.com/user-attachments/assets/04db3bc8-5907-4b3c-8cfd-250d26366a81)
_Fig 2: Example output of global solar radiation from *STRAHLGRID*. 1400 UTC of an arbitrary day._ 

The output of this radiation model is then going to be converted into solar power generation potential by the method of *Jerez et al (2015)*.  The output is the potential for the generated power. To obtain the power at the installed system, this value must be multiplied by the nominal installed watts.

![infodienst_solar_potential_step1](https://github.com/user-attachments/assets/dcf92c00-ab12-46e0-b433-601469fb58d7)
_Fig 3: Example output of solar potential. 1300 UTC of an arbitrary day._

![infodienst_solar_potential_step2](https://github.com/user-attachments/assets/5e93041a-39d0-4d48-9469-5c1a86939032)
_Fig 4: Example output of solar potential. 1400 UTC of an arbitrary day._

And addiation feature of this product is, that not only the solar potential can be calculated, but also warnings on snow and dust covers can be provided. These warnings are genereted through the integration of GeoSphere Austria's operational snow model *SNOWGRID*, and dust forecasts from *WRF-Chem*.

## Technical features
|                       |               |
| --------------------- | -------------: |
| spatial resolution    | 100(0) m         |
| temporal resolution   | 1 hour        |
| forecast range        | +30 hours     |
| forecast time         | 00 UTC        |
| snow cover            | yes/no        |
| dust cover      | yes/no              |

The model chain for Austria is implemented as default. The model can be adapted to other regions with some additional effort.

# Offene Fragen... <!--{ as="img" mode="hero" src="" }-->
#### 

# Organizational details and contact <!--{ as="img" mode="hero" src="" }-->
#### 

## Available services
* **Free Version** <br>
Example forecasts for selected Austrian cities during project runtime. Long term strategy TBD.
* **Commercial Service**<br>
Service on demand. Please contact: Kundenservice GeoSphere Austria

# References <!--{ as="img" mode="hero" src="" }-->
#### 