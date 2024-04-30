import "./home.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export const Home = () => {
  return (
    <div className="home">
      <div className="left">
        <div className="content">
          <h1>Find Real Estate & Get Your Dream Place</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
            doloremque ea impedit? Distinctio reprehenderit officia delectus
            numquam corrupti provident obcaecati, est illo quasi quis similique
            commodi eius, adipisci dolores voluptate!
          </p>
        </div>

        <div className="searchArea">
          <div className="button">
            <button className="active">Buy</button>
            <button>Rent</button>
          </div>
          
          <form className="inputArea">
            <input
              type="text"
              placeholder="City & Location"
              name="cityLocation"
            />
            <input type="text" placeholder="Min Price" name="minPrice" />
            <input type="text" placeholder="Max Price" name="maxPrice" />

            <button>
              <SearchOutlinedIcon /> <span>Search</span>
            </button>
          </form>
        </div>
        <div className="counterArea">
          <div className="item">
            <h5>15+ </h5>
            <em>Years of Experience</em>
          </div>
          <div className="item">
            <h5>200 </h5>
            <em>Award Gained</em>
          </div>
          <div className="item">
            <h5>1500+ </h5>
            <em>Property Ready</em>
          </div>
        </div>
      </div>
      <div className="right">
        <img src="../../../src/assets/banner.png" alt="Hero Banner" />
      </div>
    </div>
  );
};
