import React, { useState } from "react";

const CarouselForm = ({onCarouselAdd}) => {
  const [nouveauCarousel, setNouveauCarousel] = useState("")

  const handleChange = event => {
    setNouveauCarousel(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const id = new Date().getTime();
    const url = nouveauCarousel;

    onCarouselAdd({ id, url });
    setNouveauCarousel("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
          value={nouveauCarousel    }
          onChange={handleChange}
          type="text"
          placeholder="add offer"
        />
        <button className="greenButton">Confirmer</button>
      </form>
    );
}

export default CarouselForm;