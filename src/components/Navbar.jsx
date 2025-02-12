import React from "react";
import party from "../assets/party.png";
import fire from "../assets/fire.png";
import stary from "../assets/stary.png";
import "./Navbar.css";
import { FaSearch } from "react-icons/fa";
import DarkMode from "./DarkMode/DarkMode";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>MovieHubnation</h1>
      <div className="navbar-links">
        <DarkMode />
        <a href="#popular">
          Popular{" "}
          <img src={fire} alt="" className="navbar-emoji fire-emoji"></img>
        </a>
        <a href="#top_rated">
          Top Rated <img src={stary} alt="" className="navbar-emoji"></img>
        </a>
        <a href="#upcoming">
          Upcoming{" "}
          <img src={party} alt="" className="navbar-emoji stary-emoji"></img>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
