import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const WorldMap = () => {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={2}
      scrollWheelZoom={false}
      style={{ height: '400px' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
     
    </MapContainer>
  );
};

export default WorldMap;