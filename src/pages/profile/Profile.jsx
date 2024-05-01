import "./profile.scss";
import { PropertyCard } from "../../components/propertyCard/PropertyCard";
import { listData, userData } from "../../lib/propertyData.js";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

export const Profile = () => {
  // console.log(listData);
  const [chat, setChat] = useState(null);
  return (
    <div className="profile">
      <div className="userInfo">
        <div className="wrapper">
          <div className="heading">
            <h4>User Information</h4>
            <button>Update User</button>
          </div>
          <div className="user">
            <div className="item">
              <b>Avatar : </b>
              <img src={userData.img} alt="userImg" />
            </div>
            <div className="item">
              <b>Name : </b>
              {userData.name}
            </div>
            <div className="item">
              <b>Email :</b>
              john@gmail.com
            </div>
          </div>
          <div className="userCard">
            <div className="heading">
              <h4>My List</h4>
              <button>Add New Post</button>
            </div>
            {listData.map(data => (
              <PropertyCard key={data.id} data={data} />
            ))}
          </div>
        </div>
      </div>

      <div className="sidebarChat">
        <div className="wrapper">
          <div className="userArea">
            <h4>Message</h4>
            <div onClick={() => setChat(1)} className="user">
              <img src={userData.img} alt="userImg" />
              <strong>AbuHasan Sarkar</strong>
              <em>Lorem ipsum dolor sit amet consectetur </em>
            </div>
            <div className="user">
              <img src={userData.img} alt="userImg" />
              <strong>AbuHasan Sarkar</strong>
              <em>Lorem ipsum dolor sit amet consectetur </em>
            </div>
            <div className="user">
              <img src={userData.img} alt="userImg" />
              <strong>AbuHasan Sarkar</strong>
              <em>Lorem ipsum dolor sit amet consectetur </em>
            </div>
            <div className="user">
              <img src={userData.img} alt="userImg" />
              <strong>AbuHasan Sarkar</strong>
              <em>Lorem ipsum dolor sit amet consectetur </em>
            </div>
            <div className="user">
              <img src={userData.img} alt="userImg" />
              <strong>AbuHasan Sarkar</strong>
              <em>Lorem ipsum dolor sit amet consectetur </em>
            </div>
            <div className="user">
              <img src={userData.img} alt="userImg" />
              <strong>AbuHasan Sarkar</strong>
              <em>Lorem ipsum dolor sit amet consectetur </em>
            </div>
            <div className="user">
              <img src={userData.img} alt="userImg" />
              <strong>AbuHasan Sarkar</strong>
              <em>Lorem ipsum dolor sit amet consectetur </em>
            </div>
          </div>

          <div className="btnBox">
            <button>
              <ChatOutlinedIcon /> Send Message
            </button>
            <button>
              <BookmarkBorderOutlinedIcon /> Save the Place
            </button>
          </div>
          {chat && (
            <div className="chatBox">
              <div className="user">
                <div className="userInfo">
                  <img
                    src="../../../src/assets/download.jpg"
                    alt="User Image"
                  />
                  AbuHasan Sarkar
                </div>
                <span onClick={() => setChat(null)}>
                  <CloseIcon />
                </span>
              </div>
              <div className="userMessage">
                <div className="message">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <em>1 hour ago</em>
                </div>
                <div className="message own">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <em>1 hour ago</em>
                </div>
                <div className="message">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <em>1 hour ago</em>
                </div>
                <div className="message own">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <em>1 hour ago</em>
                </div>
                <div className="message">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <em>1 hour ago</em>
                </div>
                <div className="message own">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <em>1 hour ago</em>
                </div>
                <div className="message own">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <em>1 hour ago</em>
                </div>
              </div>
              <div className="userChat">
                <textarea name="message" rows="1"></textarea>
                <button>Send</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
