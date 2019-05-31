import React from "react";
import { NavLink } from "react-router-dom";

import myStyles from "./NavigationItem.module.css";

const NavigationItem = ({ to, children, clicked }) => {
  if (clicked) {
    return (
      <p className={myStyles.NavigationItem} onClick={clicked}>
        {children}
      </p>
    );
  } else {
    return (
      <NavLink to={to} exact className={myStyles.NavigationItem}>
        {children}
      </NavLink>
    );
  }
};

export default NavigationItem;
