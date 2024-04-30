import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/navbar/Navbar";

export const Layout = () => {
  return (
    <div className="mainContainer">
      {/* Header */}
      <Navbar />
      <Outlet />
    </div>
  );
};
