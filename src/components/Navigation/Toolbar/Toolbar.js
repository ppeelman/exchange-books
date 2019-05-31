import React from "react";

import myStyles from "./Toolbar.module.css";
import Hamburger from "./Hamburger/Hamburger";
import Title from "./Title/Title";

const Toolbar = ({ pageTitle, menuToggled, openState }) => {
  return (
    <div className={myStyles.Toolbar}>
      <Hamburger toggle={menuToggled} open={openState} />
      <Title text={pageTitle} />
    </div>
  );
};

export default Toolbar;
