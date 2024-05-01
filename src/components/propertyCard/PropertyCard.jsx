import "./propertyCard.scss";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";

export const PropertyCard = ({ data }) => {
  // console.log(data.address);
  return (
    <div className="card">
      <div className="img">
        <img src={data.img} alt="Property image" />
      </div>
      <div className="text">
        <h3>{data.title}</h3>
        <span>
          <LocationOnIcon /> {data.address}
        </span>
        <span className="price">${data.price}</span>
        <div className="extraInfo">
          <div className="left">
            <span>
              <BedOutlinedIcon />
              {data.bedroom} BedRoom
            </span>
            <span>
              <BathtubOutlinedIcon /> {data.bathroom} Bath Room
            </span>
          </div>
          <div className="right">
            <span>
              <BookmarkBorderOutlinedIcon />
            </span>
            <span>
              <ChatOutlinedIcon />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
