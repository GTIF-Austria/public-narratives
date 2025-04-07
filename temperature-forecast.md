---
cover-image:  https://github.com/user-attachments/assets/ba568616-1583-4f6b-a647-8b4c2a327bf0
--- 

# High-resolution extreme temperature forecasts for cities <!--{ as="img" mode="hero" src="https://github.com/user-attachments/assets/9825e748-1c21-4cbe-8a3c-b2ea13e2a349" }-->

Rising temperatures and increasing heat stress pose significant challenges for city population and vegetation, particularly during summer and require urban planners to transform cities into resilient and climate-adapted living spaces. Cities, with built-up areas and extensive sealed surfaces, create heat hotspots, exacerbating thermal discomfort and health risks. Vulnerable groups - such as the elderly, children, and individuals with chronic health conditions - are especially affected, facing an increased risk of heat-related illnesses and mortality. At the same time, fluctuating temperatures drive dynamic energy demands. The growing need for cooling in summer and heating in winter places additional pressure on energy infrastructure, requiring more efficient supply management and forecasting, based on accurate temperature forecasts.

## the challenge
### forecast air temperature on a spatial scale that is representing urban features

Accurate, high-resolution urban weather forecasts are essential for mitigating health risks, optimizing energy distribution, and enhancing overall urban resilience. Unfortunately, current weather forecast models, based on regional-scale meteorological data, lack the spatial resolution necessary to capture the fine-scale temperature variations caused by urban morphology. On a 3-dimensional grid, these models are computing values that are "representative" for each model grid box. What does that mean in practice?
For downtown Vienna, the yellow lines represent the 2.5km model grid 

![ESA_Vienna_Austria_zoom_grid_disclaimer](https://github.com/user-attachments/assets/1484e60c-a587-45a1-b774-f18fa6b94b50)
https://www.esa.int/ESA_Multimedia/Images/2022/07/Vienna_Austria

and this is the 2m air temperature [K] forecast for 16th of August 2022, 13UTC for the center grid cell
![t2m_AROME_innerestadt_2020081613_zuschnitt](https://github.com/user-attachments/assets/2d69fc74-2806-4acf-9adc-f8f3d8f4bbf1)  
based on GeoSphere Austria's current weather forecast model.  
  

## our solution
### tailor-made high-resolution temperature forecasts for your city

GeoSphere Austria provides the latest technology to forecast urban weather phenomena more detailed than typically available, with a fine spatial scale of 100 meters. Unlike standard weather models, this approach incorporates urban-specific data to deliver detailed forecasts at the district level. For the example of Vienna, this means that you will get that information for the center grid cell:
![t2m_25x25_innerestadt_2020081613_zuschnitt](https://github.com/user-attachments/assets/9caad778-f68a-4808-859b-c32c278beacf)

This advanced modelling approach can support a wide range of stakeholders, including:

•	**Public authorities** and **crisis managers** to enhance disaster preparedness and response.  
•	**Urban planners** and **policymakers** to design heat-resilient and energy-efficient cities.  
•	**Energy providers** to optimize heating and cooling operations with more precise demand forecasting.

By improving weather information at an urban scale, we empower cities to better adapt to weather and climate extremes.

### workflow

By integrating precise satellite-based data, air temperature (and derived variables) can be calculated on a 100-meter grid to simulate and forecast their spatial and hourly variations providing a database for informed decision-making. The model integrates multiple high-resolution datasets to enhance forecast accuracy:  
›	**Satellite-based land cover data** (e.g., Sentinel-2) to map surface properties and urban structures.  
›	**Building density and surface material analysis** to account for urban heat storage and emission.  
›	**Vegetation and green space influence** to assess cooling effects from parks and tree canopies.  
›	**Anthropogenic heat emissions** from industry and residential heating/cooling.  




### technical features 

|                       |               |
| --------------------- | ------------- |
| spatial gridding      | 100m          |
| temporal gridding     | 1 hour        |
| forecast range        | +30 hours     |
| forecast time         | 00 UTC        |

The model domain is either based on data created by us or based on your data that you can provide from your city.

## use cases

›	Heat-health related high-resolution temperature forecasting    
o	Identification of heat hotspots at a neighbourhood level to detect areas affecting vulnerable groups.  
o	Generation of temperature forecasts for heatwaves and extreme cold events.  
o	Support of urban planning for adaptation strategies (e.g. designing green spaces).  

›	High resolution meteorological information for energy demand forecasting  
o	High-resolution temperature data to optimize district-level heating and cooling supply.  
o	Enhanced demand-side management to improve energy efficiency and reduce peak loads.  

![gtif_abb1_CDD_arE_schieber](https://github.com/user-attachments/assets/de79060e-2281-4233-85b9-51aa58925800)

## Available services

1. **Free version:** During project runtime, example forecasts are available for selected Austrian cities. Long term strategy T.B.D. 
2. **Commercial version:** upon request, please contact [Gerhard Wotawa](mailto:gerhard.wotawa@geosphere.at), [Bernhard Niedermoser](mailto:bernhard.niedermoser@geosphere.at)

## Organizational details and legal information

![GSA_Basislogo_Positiv_RGB_XXS](https://github.com/user-attachments/assets/e4a90124-22af-4c13-b659-f91991b36d0d)

Contact points: [Brigitta Hollosi](mailto:brigitta.hollosi@geosphere.at), [Stefan Schneider](mailto:stefan.schneider@geosphere.at)

