## SpeicherPot - Speicherpotenziale 2030/2040 <!--{ as="eox-map" class="overlay-br" mode="tour" }-->

### <!--{ layers='[{"type":"Tile","properties":{"id":"cloudless"},"source":{"type":"XYZ","url":"https://a.s2maps-tiles.eu/wmts/1.0.0/s2cloudless-2025_3857/default/g/{z}/{y}/{x}.jpeg"}},{"type":"Tile","properties":{"id":"overlay"},"source":{"type":"XYZ","url":"https://a.s2maps-tiles.eu/wmts/1.0.0/overlay_base_bright_3857/default/g/{z}/{y}/{x}.png"}}]' center=[13.7087,47.2912] zoom="6.5" animationOptions="{duration:500}" }-->
#### Österreich Übersicht

Willkommen zur interaktiven Karte der Speicherpotenziale für das Jahr 2030. In dieser Tour betrachten wir die räumliche Verteilung zukünftiger Energiespeicher in Österreich.

Scrollen Sie weiter, um die verschiedenen Schwerpunkte im Detail zu erkunden.

### <!--{ layers='[{"type":"Tile","properties":{"id":"cloudless"},"source":{"type":"XYZ","url":"https://a.s2maps-tiles.eu/wmts/1.0.0/s2cloudless-2025_3857/default/g/{z}/{y}/{x}.jpeg"}},{"type":"Vector","properties":{"id":"colocation_layer"},"source":{"type":"Vector","url":"https://workspace-ui-public.gtif-austria.hub-otc.eox.at/api/public/share/public-4wazei3y-02/speicherpot/bezirke_energiesystem.geojson","format":{"type":"GeoJSON","dataProjection":"EPSG:4326"}},"style":{"fill-color":["case",["between",["get","colocation_2030"],0.001,100000],["interpolate",["linear"],["get","colocation_2030"],10,"rgba(254, 237, 222, 1)",100,"rgba(253, 190, 133, 1)",300,"rgba(253, 141, 60, 1)",700,"rgba(230, 85, 13, 1)",2000,"rgba(166, 54, 3, 1)"],"rgba(0, 0, 0, 0)"],"stroke-color":"black","stroke-width":1}},{"type":"Tile","properties":{"id":"overlay"},"source":{"type":"XYZ","url":"https://a.s2maps-tiles.eu/wmts/1.0.0/overlay_base_bright_3857/default/g/{z}/{y}/{x}.png"}}]' center=[15.5,48.2] zoom="7.5" animationOptions="{duration:500}" }-->
#### Strom – BESS Co-location [2030]

Die größten (Strom-) Speicherpotenziale ergeben sich 2030 entlang der starken Wind- & PV (Freiflächen) Potenziale. Die Summe der Potenziale erreichen in Nord/Ostösterreich eine Spitze.

<color-legend title="Colocation Potenzial (MW)" type="continuous" min="10" max="2000" color-scale="rgba(254,237,222,1), rgba(253,190,133,1), rgba(253,141,60,1), rgba(230,85,13,1), rgba(166,54,3,1)"></color-legend>

### <!--{ layers='[{"type":"Tile","properties":{"id":"cloudless"},"source":{"type":"XYZ","url":"https://a.s2maps-tiles.eu/wmts/1.0.0/s2cloudless-2025_3857/default/g/{z}/{y}/{x}.jpeg"}},{"type":"Vector","properties":{"id":"heimspeicher_layer"},"source":{"type":"Vector","url":"https://workspace-ui-public.gtif-austria.hub-otc.eox.at/api/public/share/public-4wazei3y-02/speicherpot/bezirke_energiesystem.geojson","format":{"type":"GeoJSON","dataProjection":"EPSG:4326"}},"style":{"fill-color":["case",["between",["get","heimspeicher_2030"],0.001,1000],["interpolate",["linear"],["get","heimspeicher_2030"],0.05,"rgba(239, 243, 255, 1)",0.2,"rgba(189, 215, 231, 1)",0.5,"rgba(107, 174, 214, 1)",1.5,"rgba(49, 130, 189, 1)",5,"rgba(8, 81, 156, 1)"],"rgba(0, 0, 0, 0)"],"stroke-color":"black","stroke-width":1}},{"type":"Tile","properties":{"id":"overlay"},"source":{"type":"XYZ","url":"https://a.s2maps-tiles.eu/wmts/1.0.0/overlay_base_bright_3857/default/g/{z}/{y}/{x}.png"}}]' center=[14.5,47.5] zoom="7.2" animationOptions="{duration:500}" }-->
#### Strom – BESS Heimspeicher [2030]

Die Speicherpotenziale für Heimspeicher ergeben sich in Kombination mit den Dachflächen-PV-Potenzialen, dementsprechend befindet sich viel Potenzial in Bezirken mit hoher Besiedelungsdichte.

<color-legend title="Heimspeicher (MW)" type="continuous" min="0.05" max="5" color-scale="rgba(239,243,255,1), rgba(189,215,231,1), rgba(107,174,214,1), rgba(49,130,189,1), rgba(8,81,156,1)"></color-legend>

### <!--{ layers='[{"type":"Tile","properties":{"id":"cloudless"},"source":{"type":"XYZ","url":"https://a.s2maps-tiles.eu/wmts/1.0.0/s2cloudless-2025_3857/default/g/{z}/{y}/{x}.jpeg"}},{"type":"Vector","properties":{"id":"wasserstoff_layer"},"source":{"type":"Vector","url":"https://workspace-ui-public.gtif-austria.hub-otc.eox.at/api/public/share/public-4wazei3y-02/speicherpot/bezirke_energiesystem.geojson","format":{"type":"GeoJSON","dataProjection":"EPSG:4326"}},"style":{"fill-color":["case",["==",["get","g_name"],"Vöcklabruck"],"rgba(230, 85, 13, 0.8)","rgba(0, 0, 0, 0)"],"stroke-color":"black","stroke-width":1}},{"type":"Tile","properties":{"id":"overlay"},"source":{"type":"XYZ","url":"https://a.s2maps-tiles.eu/wmts/1.0.0/overlay_base_bright_3857/default/g/{z}/{y}/{x}.png"}}]' center=[13.65,48.0] zoom="8.5" animationOptions="{duration:500}" }-->
#### Wasserstoff – Porenspeicher [2030]

Kurzfristig besteht das größte Potenzial für die Speicherung von Wasserstoff im Neubau – konkretes Speicherpotenzial stammt aus dem *Underground Sun Storage* im Bezirk Vöcklabruck.

### <!--{ layers='[{"type":"Tile","properties":{"id":"cloudless"},"source":{"type":"XYZ","url":"https://a.s2maps-tiles.eu/wmts/1.0.0/s2cloudless-2025_3857/default/g/{z}/{y}/{x}.jpeg"}},{"type":"Vector","properties":{"id":"waerme_layer"},"source":{"type":"Vector","url":"https://workspace-ui-public.gtif-austria.hub-otc.eox.at/api/public/share/public-4wazei3y-02/speicherpot/bezirke_energiesystem.geojson","format":{"type":"GeoJSON","dataProjection":"EPSG:4326"}},"style":{"fill-color":["case",["between",["get","waerme_2030"],0.001,10000],["interpolate",["linear"],["get","waerme_2030"],10,"rgba(254, 229, 217, 1)",100,"rgba(252, 174, 145, 1)",500,"rgba(251, 106, 74, 1)",1000,"rgba(222, 45, 38, 1)",2000,"rgba(165, 15, 21, 1)"],"rgba(0, 0, 0, 0)"],"stroke-color":"black","stroke-width":1}},{"type":"Tile","properties":{"id":"overlay"},"source":{"type":"XYZ","url":"https://a.s2maps-tiles.eu/wmts/1.0.0/overlay_base_bright_3857/default/g/{z}/{y}/{x}.png"}}]' center=[16.37,48.20] zoom="8.0" animationOptions="{duration:500}" }-->
#### Wärme – Großskalige Wärmespeicher [2030]

Potenziale zur Speicherung von Wärme in großer Skala wurden in erster Linie in ultimativer Nähe zu Fernwärmenetzen bzw. Orten mit hoher Wärmebedarfsdichte identifiziert.