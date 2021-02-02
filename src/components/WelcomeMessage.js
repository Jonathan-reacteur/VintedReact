import React from "react";

import wallPaper from "../assets/img/fondhome.jpeg";
import dechirure from "../assets/img/dechirure.svg";
const WelcomeMessage = () => {
  return (
    <div>
      <div className="imageLayers">
        <img className="wallpaper" src={wallPaper} alt="wallpaper"></img>

        <img className="dechirure" src={dechirure} alt="tearEffect"></img>
        <div className="welcome">
          <h1>Prêts à faire du tri dans vos placards ?</h1>
          <button> Commencez à vendre</button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeMessage;
