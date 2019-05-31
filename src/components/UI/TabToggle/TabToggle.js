import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./TabToggle.module.css";

class TabToggle extends Component {
  state = { selected: "option1" };

  toggledHandler = event => {
    if (!(event.target.id === this.state.selected)) {
      this.setState({ selected: event.target.id });
      this.props.toggled();
    }
  };

  render() {
    // Props
    const { tabNames } = this.props;

    // Dynamically determine CSS styles
    const cssClasses = {
      option1: [styles["TabOption"]],
      option2: [styles["TabOption"]],
      selected: [styles["Selected"]]
    };

    // If an option is selected, the tab name contained within it is set to white for contrast
    cssClasses[this.state.selected].push(styles["TabOption--selected"]);

    if (this.state.selected === "option2") {
      cssClasses.selected.push(styles["Selected--toggled"]);
    }

    return (
      <div className={styles.TabToggle}>
        <div className={cssClasses.selected.join(" ")} />
        <div
          id={"option1"}
          className={cssClasses["option1"].join(" ")}
          onClick={this.toggledHandler}
        >
          {tabNames[0]}
        </div>
        <div
          id={"option2"}
          className={cssClasses["option2"].join(" ")}
          onClick={this.toggledHandler}
        >
          {tabNames[1]}
        </div>
      </div>
    );
  }
}

TabToggle.propTypes = {
  tabNames: PropTypes.arrayOf(PropTypes.string)
};

export default TabToggle;
