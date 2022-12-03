import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, LayersControl } from "react-leaflet";
import LoadMarkers from "./features/markers/Markers";
import { getAllBarrieLinesStatus } from "./features/lines/goTransit/barrieLine/barrieLineSlice";

import store from "./app/store";
import Modal from "./components/Modal";

import LoadTTCLines from "./features/lines/ttc/AllTTCLines";
import LoadTorontoBikeLanes from "./features/lines/torontoBikeRoutes/TorontoBikeRoutes";
import LoadViaRailLines from "./features/lines/viaRail/ViaRailLines";
import LoadGoLines from "./features/lines/goTransit/AllGoLines";
import LoadWaterlooIon from "./features/lines/waterlooIon/WaterlooION";

import "./App.css";

const App = () => {
    return (
        <>
            <MapContainer
                center={[49.095, -89.78]}
                zoom={5}
                scrollWheelZoom={true}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <LayersControl position="topright">
                    <LayersControl.Overlay name="GO">
                        <LoadMarkers type="GO" />
                    </LayersControl.Overlay>

                    <LayersControl.Overlay name="TTC">
                        <LoadMarkers type="TTC" />
                    </LayersControl.Overlay>

                    <LayersControl.Overlay name="VIA">
                        <LoadMarkers type="VIA" />
                    </LayersControl.Overlay>

                    <LayersControl.Overlay name="Amtrak">
                        <LoadMarkers type="Amtrak" />
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
                <Modal></Modal>
            </MapContainer>
        </>
    );
};

export default App;
