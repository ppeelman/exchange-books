import React from "react";

import styles from "./OptionWithPictogram.module.css";

const OptionWithPictogram = ({
  pictogramClass,
  children,
  selected,
  clicked
}) => {
  const cardClasses = [styles.Card];

  if (selected) {
    cardClasses.push(styles["Card--selected"]);
  }

  return (
    <div className={cardClasses.join(" ")} onClick={clicked}>
      <div className={styles.PictoLabel}>
        <i className={styles.Pictogram + " " + pictogramClass} />
        <h1 className={styles.Label}>{children}</h1>
      </div>
      <i className={styles.Information + " far fa-question-circle"} />
    </div>
  );
};

export default OptionWithPictogram;
