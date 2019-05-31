import React from "react";

import myStyles from "./ProgressStep.module.css";

const ProgressStep = ({ current, number, children }) => {
  const stepStyles = [myStyles.Step];

  if (current) {
    stepStyles.push(myStyles["Step--Current"]);
  }

  return (
    <div className={stepStyles.join(" ")}>
      <div className={myStyles.Step__Circle}>
        <h1 className={myStyles.Step__Number}>{number}</h1>
      </div>
      <p className={myStyles.Step__Name}>{children}</p>
    </div>
  );
};

export default ProgressStep;
