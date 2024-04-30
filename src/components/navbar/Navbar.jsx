import "./navbar.scss";
import { Link } from "react-router-dom";
import VillaOutlinedIcon from "@mui/icons-material/VillaOutlined";
import DensityMediumOutlinedIcon from "@mui/icons-material/DensityMediumOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useState } from "react";

export const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" className="logo">
          <VillaOutlinedIcon /> <span>Pro Estate</span>
        </Link>

        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Services</Link>
          </li>

          <li>
            <Link to="/">Contact</Link>
          </li>
          <li>
            <Link to="/">Agents</Link>
          </li>
        </ul>
      </div>
      <div className="right">
        <button>
          <Link to="/login">Login</Link>
        </button>
        <button>
          <Link to="/register">Register</Link>
        </button>

        <div className="menuIcon" onClick={() => setMobileNav(prev => !prev)}>
          {mobileNav ? <CloseOutlinedIcon /> : <DensityMediumOutlinedIcon />}
        </div>

        <ul className={mobileNav ? "mobileMenu active" : "mobileMenu"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Services</Link>
          </li>

          <li>
            <Link to="/">Contact</Link>
          </li>
          <li>
            <Link to="/">Agents</Link>
          </li>
          <div className="button">
            <li>
              <Link to="/login">login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};
