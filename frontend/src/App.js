import React, { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import LoadMarkers from "./features/markers/Markers"
import './App.css';

function App() {
  return (
    <MapContainer center={[49.095, -89.780]} zoom={5} scrollWheelZoom={true}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <LoadMarkers />
    </MapContainer>

  );
}

export default App;
