import React from "react";

import myStyles from "./Input.module.css";

const Input = ({
  id,
  label,
  type,
  focus,
  changed,
  value,
  invalid,
  touched
}) => {
  const invalidStyle =
    invalid && touched ? ` ${myStyles["Input__Input--invalid"]}` : "";

  return (
    <div className={myStyles.Input}>
      <input
        type={type}
        id={id}
        name={label}
        placeholder={label}
        className={myStyles.Input__Input + invalidStyle}
        autoFocus={focus}
        onChange={changed}
        value={value}
      />
      <label htmlFor={id} className={myStyles.Input__Label}>
        {label}
      </label>
    </div>
  );
};

export default Input;
