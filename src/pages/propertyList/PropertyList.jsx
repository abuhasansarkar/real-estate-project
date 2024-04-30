import "./propertyList.scss";

import { listData } from "./../../lib/propertyData";
import { Filter } from "../../components/filter/Filter";
import { PropertyCard } from "../../components/propertyCard/PropertyCard";
import { SideBarMap } from "../../components/sideBarMap/SideBarMap";

export const PropertyList = () => {
  return (
    <div className="propertyList">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />

          <div className="list">
            {listData.map(data => (
              <PropertyCard key={data.id} data={data} />
            ))}
          </div>
        </div>
      </div>
      <div className="mapContainer">
        <SideBarMap items={listData} />
      </div>
    </div>
  );
};
