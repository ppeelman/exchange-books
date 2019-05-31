import React from "react";

import myStyles from "./SideDrawer.module.css";
import NavigationItems from "../NavigationItems/NavigationItems";

const SideDrawer = ({ openState, closed }) => {
  const styles = [myStyles.SideDrawer];
  if (openState) {
    styles.push(myStyles.open);
  }

  return (
    <div className={styles.join(" ")} onClick={closed}>
      <NavigationItems />
    </div>
  );
};

export default SideDrawer;
