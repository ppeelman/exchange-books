import React from "react";

import myStyles from "./Avatar.module.css";

const Avatar = ({ image }) => {
  const pictureCSS = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover"
  };

  return <div className={myStyles.Avatar} style={pictureCSS} />;
};

export default Avatar;
