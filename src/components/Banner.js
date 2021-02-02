import React from "react";
import logo from "../assets/img/vintedLogo.png";
const Banner = (props) => {
  return (
    <div>
      <div className="banner-center">
        <div className="banner">
          <img className="logo" src={logo} alt="logo" />
          <div className="researchBar">
            <i class="fas fa-search"></i>
            <input type="text" placeholder="Recherche des articles"></input>
          </div>
          <div className="buttonZone">
            <button className="buttonBanner">S'inscrire</button>
            <button className="buttonBanner">Se connecter</button>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};
export default Banner;
