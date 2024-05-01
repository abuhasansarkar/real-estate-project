import { SingleListSlider } from "../../components/singleListSlider/SingleListSlider";
import "./singleList.scss";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PetsOutlinedIcon from "@mui/icons-material/PetsOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import DepartureBoardOutlinedIcon from "@mui/icons-material/DepartureBoardOutlined";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import HighlightAltOutlinedIcon from "@mui/icons-material/HighlightAltOutlined";
import {
  listData,
  singlePostData,
  userData,
} from "../../../src/lib/propertyData";
import { SideBarMap } from "../../components/sideBarMap/SideBarMap";

export const SingleList = () => {
  console.log(listData);
  return (
    <div className="singleList">
      <div className="listDetails">
        <div className="wrapper">
          <SingleListSlider images={singlePostData.images} />

          <div className="info">
            <div className="listInfo">
              <h1>{singlePostData.title}</h1>
              <p>
                {" "}
                <LocationOnOutlinedIcon /> {singlePostData.address}
              </p>
              <b>$ {singlePostData.price}</b>
            </div>
            <div className="userInfo">
              <div className="user">
                <img src={userData.img} alt="UserImg" />
                <strong>{userData.name}</strong>
              </div>
            </div>
          </div>

          <div className="listContent">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
              unde ea. Repellendus, itaque. Sit minima inventore earum alias,
              iste nulla eligendi excepturi explicabo officiis eaque pariatur
              saepe nobis architecto esse.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              odit dicta ullam unde quia nam ratione ipsa alias autem. Placeat
              vero eius facere. Qui porro soluta nesciunt odio magnam vel sequi
              rem nulla cum perferendis aspernatur id similique eaque natus enim
              adipisci, quisquam, earum sint voluptate dolor quia fugit ab
              laborum unde. Assumenda rem odit debitis quidem praesentium illo
              quisquam necessitatibus eos delectus expedita, voluptatum ea
              recusandae quod cupiditate eius quos totam, in asperiores. Quasi
              nemo itaque similique? Repudiandae reiciendis quas consectetur
              nihil excepturi quo at, doloribus dolorem eaque suscipit! Odio
              corporis commodi laboriosam praesentium consequuntur nihil
              laudantium amet neque.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              odit dicta ullam unde quia nam ratione ipsa alias autem. Placeat
              vero eius facere. Qui porro soluta nesciunt odio magnam vel sequi
              rem nulla cum perferendis aspernatur id similique eaque natus enim
              adipisci, quisquam, earum sint voluptate dolor quia fugit ab
              laborum unde. Assumenda rem odit debitis quidem praesentium illo
              quisquam necessitatibus eos delectus expedita, voluptatum ea
              recusandae quod cupiditate eius quos totam, in asperiores. Quasi
              nemo itaque similique? Repudiandae reiciendis quas consectetur
              nihil excepturi quo at, doloribus dolorem eaque suscipit! Odio
              corporis commodi laboriosam praesentium consequuntur nihil
              laudantium amet neque.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              odit dicta ullam unde quia nam ratione ipsa alias autem. Placeat
              vero eius facere. Qui porro soluta nesciunt odio magnam vel sequi
              rem nulla cum perferendis aspernatur id similique eaque natus enim
              adipisci, quisquam, earum sint voluptate dolor quia fugit ab
              laborum unde. Assumenda rem odit debitis quidem praesentium illo
              quisquam necessitatibus eos delectus expedita, voluptatum ea
              recusandae quod cupiditate eius quos totam, in asperiores. Quasi
              nemo itaque similique? Repudiandae reiciendis quas consectetur
              nihil excepturi quo at, doloribus dolorem eaque suscipit! Odio
              corporis commodi laboriosam praesentium consequuntur nihil
              laudantium amet neque.
            </p>
          </div>
        </div>
      </div>
      <div className="listFeatures">
        <div className="wrapper">
          <h4>General</h4>
          <div className="infoBox">
            <div className="item">
              <div className="icon">
                <SettingsOutlinedIcon />
              </div>
              <div className="text">
                <b>Utilities</b>
                <span>Renter Is responsible</span>
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <PetsOutlinedIcon />
              </div>
              <div className="text">
                <b>Pet Policy</b>
                <span>Pets Allowed</span>
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <CurrencyExchangeOutlinedIcon />
              </div>
              <div className="text">
                <b>Property Fees</b>
                <span>Must have 3x the rent in total household income</span>
              </div>
            </div>
          </div>

          <h4>Room Size</h4>
          <div className="roomInfo">
            <div className="item">
              <HighlightAltOutlinedIcon /> 80sqm (861aft)
            </div>
            <div className="item">
              <BedOutlinedIcon /> 2 Bed
            </div>
            <div className="item">
              <BathtubOutlinedIcon /> 1 Bath Room
            </div>
          </div>

          <h4>Nearby Places</h4>
          <div className="infoBox placesBos">
            <div className="item">
              <div className="icon">
                <SchoolOutlinedIcon />
              </div>
              <div className="text">
                <b>School</b>
                <span>250m away</span>
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <DepartureBoardOutlinedIcon />
              </div>
              <div className="text">
                <b>Bus Stop</b>
                <span>100m away</span>
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <RestaurantOutlinedIcon />
              </div>
              <div className="text">
                <b>Restaurant</b>
                <span>R200m away</span>
              </div>
            </div>
          </div>

          <h4>Nearby Places</h4>
          <div className="mapContainer">
            <SideBarMap items={listData} />
          </div>

          <div className="btnBox">
            <button>
              <ChatOutlinedIcon /> Send Message
            </button>
            <button>
              <BookmarkBorderOutlinedIcon /> Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
