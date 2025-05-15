'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect } from 'react';
import { Boutique } from '@/types/boutique-types';

// Fix des icônes Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/assets/images/icon_location.svg',
  iconUrl: '/assets/images/icon_location.svg',
  iconSize: [80, 58],
  iconAnchor: [16, 45],
  popupAnchor: [0, -45],
});

interface Props {
    boutiques: Boutique[];
}

const center: [number, number] = [50.8467, 4.3525]; // Coordonnées typées

const Map = ({ boutiques }: Props) => {
  return (
    <MapContainer
      center={center}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: '800px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
      />

        {boutiques.map((b, i) => 
            b.location?.lat && b.location?.lng ? (
                <Marker key={i} position={[b.location.lat, b.location.lng]}>
                    <Popup>
                        <strong>{b.name}</strong>
                        <br/>
                        {b.location.commune}
                    </Popup>
                </Marker>
            ) : null
        )}
      
    </MapContainer>
  );
};

export default Map;
