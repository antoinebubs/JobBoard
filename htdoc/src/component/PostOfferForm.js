import React from "react";
import "./style/postOffer.css"

function previewFile() {
    const preview = document.querySelector('img');
    const file = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();
  
    reader.addEventListener("load", function () {
      preview.src = reader.result;
    }, false);
  
    if (file) { reader.readAsDataURL(file); }
  }
  
  const postOffers = () => {
  return (
      <div className="container">
        <input type="text" id="title" placeholder="Title" />
        <input type="text" id="messagebox" placeholder="Message..." />
        <input type="file" onChange={previewFile}/><br/>
        <img src="" id="logo" height="200" alt="Preview..."></img>
        <button type="submit" >Post Offer</button>
      </div>
    );
  };

  
export default postOffers;
