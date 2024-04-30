import "./sideBarMap.scss";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import { Pin } from "../pin/Pin";

export const SideBarMap = ({ items }) => {
  const position = [51.505, -0.09];
  return (
    <MapContainer
      className="map"
      center={position}
      zoom={7}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map((item, i) => (
        <Pin key={i} item={item} />
      ))}
    </MapContainer>
  );
};
