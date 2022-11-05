import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, LayersControl } from "react-leaflet";
import LoadMarkers from "./features/markers/Markers";

import LoadTTCLines from "./features/lines/ttc/AllTTCLines";
import LoadTorontoBikeLanes from "./features/lines/torontoBikeRoutes/TorontoBikeRoutes";
import LoadViaRailLines from "./features/lines/viaRail/ViaRailLines";
import LoadGoLines from "./features/lines/goTransit/AllGoLines";
import LoadWaterlooIon from "./features/lines/waterlooIon/WaterlooION";

import "./App.css";

function App() {
    // const center = [51.505, -0.09];
    // const rectangle = [
    //     [51.49, -0.08],
    //     [51.5, -0.06],
    // ];
    return (
        <MapContainer center={[49.095, -89.78]} zoom={5} scrollWheelZoom={true}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />

            {/* <LoadLines /> */}
            <LayersControl position="topright">
                <LayersControl.Overlay name="Markers">
                    <LoadMarkers />
                </LayersControl.Overlay>

                <LayersControl.Overlay name="TTC Lines">
                    <LoadTTCLines />
                </LayersControl.Overlay>

                <LayersControl.Overlay name="Toronto Bike Lanes">
                    <LoadTorontoBikeLanes />
                </LayersControl.Overlay>

                <LayersControl.Overlay name="Via Rail">
                    <LoadViaRailLines />
                </LayersControl.Overlay>

                <LayersControl.Overlay name="Go Lines">
                    <LoadGoLines />
                </LayersControl.Overlay>

                <LayersControl.Overlay name="Waterloo Ion">
                    <LoadWaterlooIon />
                </LayersControl.Overlay>
            </LayersControl>
        </MapContainer>
    );
}

export default App;
