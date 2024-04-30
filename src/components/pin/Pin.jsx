import "./pin.scss";
import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

export const Pin = ({ item }) => {
  return (
    <Marker className="pin" position={[item.latitude, item.longitude]}>
      <Popup className="pinPopUp">
        <div className="pinImg">
          <img src={item.img} alt="image" />
        </div>
        <div className="text">
          <Link to={`/list/${item.id}`}>{item.title}</Link>
          <span className="bedroom">{item.bedroom} Bed Room</span>
          <span className="price">${item.price}</span>
        </div>
      </Popup>
    </Marker>
  );
};
