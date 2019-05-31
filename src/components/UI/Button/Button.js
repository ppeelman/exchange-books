import React from "react";

import myStyles from "./Button.module.css";

const Button = ({ btnType, clicked, children }) => {
  let classes = [myStyles.Button];
  btnType === "primary"
    ? classes.push(myStyles["Button--primary"])
    : classes.push(myStyles["Button--secondary"]);

  return (
    <button type="button" className={classes.join(" ")} onClick={clicked}>
      {children}
    </button>
  );
};

export default Button;
