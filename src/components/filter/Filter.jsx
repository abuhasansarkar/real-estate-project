import "./filter.scss"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export const Filter = () => {
  return (
    <div className="searchArea">
      <h3>Search Result for</h3>

      <form>
        <div className="item">
          <label htmlFor="city">Location</label>
          <input type="text" id="city" placeholder="City Or Location" />
        </div>

        <div className="moreFilter">
          <div className="item">
            <label htmlFor="type">Type</label>
            <select name="type" id="type">
              <option value="">Any</option>
              <option value="buy">Buy</option>
              <option value="rent">Rent</option>
            </select>
          </div>
          <div className="item">
            <label htmlFor="type">Property</label>
            <select name="type" id="type">
              <option value="">Any</option>
              <option value="house">House</option>
              <option value="apartment">apartment</option>
              <option value="condo">Condo</option>
              <option value="land">Land</option>
            </select>
          </div>
          <div className="item">
            <label htmlFor="minPrice">Min Price</label>
            <input
              type="number"
              id="minPrice"
              name="minPrice"
              placeholder="Any"
            />
          </div>
          <div className="item">
            <label htmlFor="type">Min Price</label>
            <input
              type="number"
              id="maxPrice"
              name="maxPrice"
              placeholder="Any"
            />
          </div>
          <div className="item">
            <label htmlFor="type">Bed Room</label>
            <input
              type="number"
              id="bedRoom"
              name="bedRoom"
              placeholder="Any"
            />
          </div>

          <button>
            <SearchOutlinedIcon /> <span>Filter</span>
          </button>
        </div>
      </form>
    </div>
  );
}
