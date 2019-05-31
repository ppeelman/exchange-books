import React, { Fragment } from "react";
import PropTypes from "prop-types";

import styles from "./PageLayout.module.css";

const PageLayout = ({ top, action, children }) => {
  const topElement = top ? (
    <div className={styles.TopSection}>{top}</div>
  ) : null;
  const actionElement = action ? (
    <div className={styles.Action}>
      <div className={styles.ButtonContainer}>{action}</div>
    </div>
  ) : null;

  return (
    <Fragment>
      {topElement}
      <div className={styles.Content}>{children}</div>
      {actionElement}
    </Fragment>
  );
};

PageLayout.propTypes = {
  top: PropTypes.element,
  action: PropTypes.element,
  children: PropTypes.element
};

export default PageLayout;
