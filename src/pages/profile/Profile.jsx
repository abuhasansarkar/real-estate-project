import { PropertyCard } from "../../components/propertyCard/PropertyCard";
import { listData, userData } from "../../lib/propertyData.js";
import "./profile.scss";

export const Profile = () => {
  // console.log(listData);
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

          <div className="button">
            <button>Save</button>
            <button>Chat</button>
          </div>
        </div>
      </div>
    </div>
  );
};
