import React from "react";
import { NavLink } from "react-router-dom";

import myStyles from "./NavigationItem.module.css";

const NavigationItem = props => {
  return (
    <NavLink to={props.to} exact className={myStyles.NavigationItem}>
      {props.children}
    </NavLink>
  );
};

export default NavigationItem;
