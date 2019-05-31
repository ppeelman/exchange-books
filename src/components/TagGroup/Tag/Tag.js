import React from "react";
import myStyles from "./Tag.module.css";

const Tag = ({ text }) => {
  return <span className={myStyles.Tag}>{text}</span>;
};

export default Tag;
