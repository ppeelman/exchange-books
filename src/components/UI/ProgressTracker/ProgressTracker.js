import React from "react";

import myStyles from "./ProgressTracker.module.css";
import ProgressStep from "./ProgressStep/ProgressStep";

const ProgressTracker = ({ steps, currentStepIndex }) => {
  const stepsJSX = steps.map((step, index) => {
    return (
      <ProgressStep
        key={index}
        current={index <= currentStepIndex}
        number={index + 1}
      >
        {step}
      </ProgressStep>
    );
  });

  const progressStyles = {
    0: myStyles["ProgressBar--zeroPerc"],
    33: myStyles["ProgressBar--thirtythreePerc"],
    50: myStyles["ProgressBar--fiftyPerc"],
    67: myStyles["ProgressBar--sixtysevenPerc"],
    100: myStyles["ProgressBar--hundredPerc"]
  };

  const percCompleted = Math.round(
    (currentStepIndex / (steps.length - 1)) * 100
  );

  return (
    <div className={myStyles.StepContainer}>
      {stepsJSX}
      <div
        className={myStyles.ProgressBar + " " + progressStyles[percCompleted]}
      />
    </div>
  );
};

export default ProgressTracker;
