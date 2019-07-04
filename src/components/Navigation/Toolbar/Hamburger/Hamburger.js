import React from "react";

import myStyles from "./Hamburger.module.css";

const Hamburger = ({ toggle, open }) => {
  const styles = [myStyles.Hamburger];
  if (open) {
    styles.push(myStyles.open);
  }

  return <div className={myStyles.HamburgerContainer} onClick={toggle}><div className={styles.join(" ")}  /></div>;
};

export default Hamburger;
