import React from "react";

import myStyles from "./TextField.module.css";

const TextField = ({ uniqueID, label, type, focus }) => {
  console.log(focus);
  return (
    <div className={myStyles.TextField}>
      <input
        type={type}
        id={uniqueID}
        name={label}
        placeholder={label}
        className={myStyles.TextField__Input}
        autoFocus={focus}
      />
      <label htmlFor={uniqueID} className={myStyles.TextField__Label}>
        {label}
      </label>
    </div>
  );
};

export default TextField;
