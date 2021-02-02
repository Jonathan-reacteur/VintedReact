import React from "react";
import Item from "../components/Item.js";
const ListOffers = (props) => {
  const { listOffers } = props;
  if (listOffers === null) {
    return <div>coucou</div>;
  } else {
    return (
      <div className="listOffers--center">
        <div className="listOffersContainer">
          {listOffers.map((item, index) => {
            return <Item item={item} key={index} />;
          })}
        </div>
      </div>
    );
  }
};

export default ListOffers;
