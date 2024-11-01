// src/components/MapComponent.js
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./mapcomponent.css"

// Ícono personalizado con imagen PNG
const customIcon = L.icon({
  iconUrl: "/iconored.png", // Cambia esto a la URL de tu imagen PNG
  iconSize: [24, 40], // Tamaño de tu imagen (ajústalo según tu preferencia)
  iconAnchor: [16, 32], // Punto donde el ícono se "ancla" en el marcador
  popupAnchor: [0, -32], // Posición del popup en relación con el ícono
});

// Define un ícono rojo para la ubicación del usuario
const redIcon = L.icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  shadowSize: [41, 41],
  className: 'red-marker', // opcional, para CSS personalizado
});

const MapComponent = () => {
  const [bares, setBares] = useState([]);
  const [userLocation, setUserLocation] = useState({
    lat: -34.6037, // Coordenadas de Buenos Aires como predeterminadas
    lng: -58.3816,
  });

  // Obtiene los bares desde Firebase
  useEffect(() => {
    const fetchBares = async () => {
      const baresCollection = collection(db, "bares");
      const baresSnapshot = await getDocs(baresCollection);
      const baresList = baresSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBares(baresList);
    };
    fetchBares();
  }, []);

  // Obtiene la ubicación del usuario
useEffect(() => {
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
        setUserLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        });
    });
    }
}, []);

return (
    <MapContainer
    center={userLocation}
    zoom={14}
    style={{ width: "99vw", height: "100vh" }}
    >
    <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    />

      {/* Marcador para la ubicación del usuario */}
    <Marker position={userLocation} icon={customIcon}>
        <Popup>Tu ubicación</Popup> 
    </Marker>

      {/* Marcadores para los bares */}
    {bares.map((bar) => (
        <Marker
        key={bar.id}
        position={[bar.latitude, bar.longitude]}
        >
        <Popup>
            <strong>{bar.nombre}</strong><br />
            {bar.imagenURL && (
              <img
                src={bar.imagenURL}
                alt={`Imagen de ${bar.nombre}`}
                style={{ width: "100px", height: "auto" }} // Ajusta el tamaño según tu preferencia
              />)} <br />
           
            {bar.direccion}
            <br />
            <a
            href={`https://www.google.com/maps?q=${bar.latitude},${bar.longitude}`}
            target="_blank"
            rel="noopener noreferrer"
            >
                Ver en Google Maps
                </a>
        </Popup>
        </Marker>
    ))}
    </MapContainer>
);
};

export default MapComponent;
