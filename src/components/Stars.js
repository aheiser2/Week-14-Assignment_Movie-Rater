/*       Stars – a one to five-star rating component that allows users to rate 
    something (movies in this case, but remember that components are 
        reusable, so you could use it elsewhere!) */


import React from "react";
import { useState } from "react";
import StarShape from "./StarShape";

const Stars = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className="stars">
      {[...Array(5)].map((star, index) => {
        index = index + 1;
        return (
          <button type="button" id="star-button" key={index} className={index <= rating ? "on" : "off"}
          onClick={() => setRating(index)} onMouseEnter={() => setHover(index)} onMouseLeave={() => setHover(rating)}>
            <StarShape /> 
          </button>
        );
      })}
    </div>
  );
};

export default Stars;
