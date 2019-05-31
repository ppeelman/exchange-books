import React from "react";

import myStyles from "./Rating.module.css";
import Star from "./Star/Star";

const Rating = ({ score }) => {
  const total = 5;

  // Calculate how many filled & empty stars we need
  const filledStars = Math.round(score);

  const stars = new Array(total).fill(5);
  const starsJSX = stars.map((star, index) => {
    if (index < filledStars) {
      return <Star key={index} filled={true} />;
    } else {
      return <Star key={index} filled={false} />;
    }
  });

  return (
    <div className={myStyles.RatingContainer}>
      {starsJSX}
      <span className={myStyles.ScoreText}>{score}</span>{" "}
    </div>
  );
};

export default Rating;
