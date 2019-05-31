import React from "react";

import myStyles from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = () => {
  return (
    <div className={myStyles.NavigationItems}>
      <NavigationItem to={"/"}>Available</NavigationItem>
      <NavigationItem to={"/exchange-requests"}>
        Exchange requests
      </NavigationItem>
      <NavigationItem to={"/login"}>Log in</NavigationItem>
      <NavigationItem to={"/login"}>Register</NavigationItem>
    </div>
  );
};

export default NavigationItems;
