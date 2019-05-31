import React from "react";

import styles from "./TextArea.module.css";

const TextArea = ({ id, name, placeholder, numRows }) => {
  return (
    <div>
      <textarea
        id={id}
        name={name}
        className={styles.TextArea}
        placeholder={placeholder}
        rows={numRows}
      />
    </div>
  );
};

export default TextArea;
