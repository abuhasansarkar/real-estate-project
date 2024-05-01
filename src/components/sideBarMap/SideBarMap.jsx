import "./sideBarMap.scss";
import { MapContainer, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import { Pin } from "../pin/Pin";

export const SideBarMap = ({ items }) => {
  // console.log(items.latitude);
  // console.log(items[0].latitude);

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
