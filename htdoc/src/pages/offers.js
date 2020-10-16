import React from "react";
import Carousel from "../component/carousel";

import "react-table-6/react-table.css" 
import OfferList from "../component/OffersList";

const Offers = () => {
  const title = "Liste des offres";
  return (
    <div>
      <h1>{title}</h1>
       <Carousel />
       <OfferList/>
    </div>
    );
  };

export default Offers;


