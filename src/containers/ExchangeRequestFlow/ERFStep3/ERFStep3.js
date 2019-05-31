import React, { Component, Fragment } from "react";

import styles from "./ERFStep3.module.css";
import TextArea from "../../../components/UI/TextArea/TextArea";

class ERFStep3 extends Component {
  render() {
    return (
      <Fragment>
        <div className={styles.Header}>
          <h1>What message do you have for Jokie2?</h1>
        </div>
        <div className={styles.Body}>
          <TextArea
            id={"message"}
            name={"message"}
            numRows={15}
            placeholder={
              "For example: let's meet in front of the Starbucks at Brussels-North station in the following week at 5:30pm"
            }
          />
        </div>
      </Fragment>
    );
  }
}

export default ERFStep3;
