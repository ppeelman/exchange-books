import React from "react";

import myStyles from "./Star.module.css";

const Star = ({ filled }) => {
  const starStyle = ["fa", "fa-star", myStyles.Star];

  if (filled) {
    starStyle.push(myStyles.checked);
  }

  return <span className={starStyle.join(" ")} />;
};

export default Star;
