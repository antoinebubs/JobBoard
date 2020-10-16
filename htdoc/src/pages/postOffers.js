import React from "react";
import PostOfferForm from "../component/PostOfferForm"

const postOffers = () => {
  const title = "Ici vous pouvez poster vos offres";
  return (
    <div>
      <h1>{title}</h1>
      <PostOfferForm/>
    </div>
    );
  };

  
export default postOffers;
