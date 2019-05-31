import React from "react";

import myStyles from "./Title.module.css";

const Title = ({ text }) => {
  return <h1 className={myStyles.Title}>{text}</h1>;
};

export default Title;
