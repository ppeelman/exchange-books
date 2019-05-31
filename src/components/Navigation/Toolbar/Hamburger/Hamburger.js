import React from "react";

import myStyles from "./Hamburger.module.css";

const Hamburger = ({ toggle, open }) => {
  const styles = [myStyles.Hamburger];
  if (open) {
    styles.push(myStyles.open);
  }

  return <div className={styles.join(" ")} onClick={toggle} />;
};

export default Hamburger;
