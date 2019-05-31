import React from "react";

import myStyles from "./DataContainer.module.css";

const DataContainer = ({ title, children }) => {
  return (
    <div className={myStyles.DataContainer}>
      <h2 className={myStyles.Title}>{title}</h2>
      {children}
    </div>
  );
};

export default DataContainer;
