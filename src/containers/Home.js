import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner.js";
import ListOffers from "../components/ListOffers.js";
import WelcomeMessage from "../components/WelcomeMessage.js";
import offersRetrieve from "../service/offersRetrieve.js";
const Home = () => {
  const [dataOffers, setDataOffers] = useState([0]);
  const [isLoaded, setIsLoaded] = useState(false);
  console.log(process.env.REACT_APP_API_VINTED);

  useEffect(() => {
    offersRetrieve.fetchDatas(setDataOffers, setIsLoaded);
  }, []);

  console.log(dataOffers);
  return (
    <div className="home">
      <div>
        <Banner></Banner>
        <WelcomeMessage />
        <ListOffers listOffers={isLoaded ? dataOffers.offers : null} />
        <Link to="/Offer">
          <p>product</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
