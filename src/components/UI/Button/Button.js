import React from "react";

import myStyles from "./Button.module.css";

const Button = ({ btnType, clicked, children, disabled }) => {
  let classes = [myStyles.Button];
  btnType === "primary"
    ? classes.push(myStyles["Button--primary"])
    : classes.push(myStyles["Button--secondary"]);

  return (
    <button className={classes.join(" ")} onClick={clicked} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
