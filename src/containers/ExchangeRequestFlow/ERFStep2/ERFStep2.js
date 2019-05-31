import React, { Component, Fragment } from "react";

import myStyles from "./ERFStep2.module.css";
import OptionWithPictogram from "../../../components/UI/OptionWithPictogram/OptionWithPictogram";

class ERFStep2 extends Component {
  state = {
    selected: {
      meeting: false,
      mailbox: false,
      "dead-drop": false
    }
  };

  optionSelectedHandler = optionName => {
    this.setState((prevState, props) => {
      return {
        selected: {
          ...this.state.selected,
          [optionName]: !prevState.selected[optionName]
        }
      };
    });
  };

  render() {
    return (
      <Fragment>
        <div className={myStyles.Header}>
          <h1>What methods of exchange do you prefer?</h1>
        </div>
        <div className={myStyles.Body}>
          <OptionWithPictogram
            pictogramClass="fa fa-handshake"
            selected={this.state.selected.meeting}
            clicked={() => this.optionSelectedHandler("meeting")}
          >
            Meeting in person
          </OptionWithPictogram>
          <OptionWithPictogram
            pictogramClass="fas fa-inbox"
            selected={this.state.selected.mailbox}
            clicked={() => this.optionSelectedHandler("mailbox")}
          >
            Deliver to mailbox
          </OptionWithPictogram>
          <OptionWithPictogram
            pictogramClass="fas fa-box-open"
            selected={this.state.selected["dead-drop"]}
            clicked={() => this.optionSelectedHandler("dead-drop")}
          >
            Dead drop
          </OptionWithPictogram>
        </div>
      </Fragment>
    );
  }
}

export default ERFStep2;
