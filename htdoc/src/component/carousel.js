import React, {useState} from 'react';
import './style/carousel.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CarouselForm from "./carouselForm"

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  arrows: true,
  slidesToScroll: 1,
  className: "slides"
}
  const Carousel = () => {

    const createId = () => {
      return (Math.random().toString(36).substr(2, 9));
    };

    const [offers, setOffers] =  useState([
      { id: createId(), url: "https://www.deltadallas.com/wp-content/uploads/2017/10/Fotolia_81736185_XS.jpg" },
      { id: createId(), url: "https://www.deltadallas.com/wp-content/uploads/2017/10/Fotolia_81736185_XS.jpg" },
      { id: createId(), url: "https://www.deltadallas.com/wp-content/uploads/2017/10/Fotolia_81736185_XS.jpg" }
      ])

  const  handleDelete = (id) => {
      const updatedOffers = offers.slice();
      const index = updatedOffers.findIndex(offer => offer.id === id);
      
      updatedOffers.splice(index, 1);
      setOffers(updatedOffers);
  };
  
  const  handleAdd = info => {
    const updatedOffers = offers.slice();
    updatedOffers.push(info);
    setOffers(updatedOffers);
  };

  return (
    <React.Fragment>
    <CarouselForm onCarouselAdd={handleAdd}/>
      <div className="Carousel">
        <Slider {...settings}>
          {offers.map(offer =>
              <div key={offer.id}>
                <img width="100%" src={offer.url} alt={offer.id}/>
                <button className="redButton" onClick={() => handleDelete(offer.id)}>X</button>
              </div>
          )}
        </Slider>
      </div> 
  </React.Fragment>
  );
};

export default Carousel;