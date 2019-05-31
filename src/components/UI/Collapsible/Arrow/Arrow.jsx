import React from "react";
import PropTypes from "prop-types";

import styles from "./Arrow.module.css";

const Arrow = ({ down }) => {
  const cssClasses = [styles.Arrow];
  if (down) {
    cssClasses.push(styles["Arrow--down"]);
  }

  return <div className={cssClasses.join(" ")} />;
};

Arrow.propTypes = {
  down: PropTypes.bool
};

export default Arrow;
