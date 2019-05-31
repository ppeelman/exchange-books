import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./SlidingTabs.module.css";
import PageLayout from "../PageLayout/PageLayout";
import TabToggle from "../../components/UI/TabToggle/TabToggle";

class SlidingTabs extends Component {
  state = {
    currentPageIndex: 0
  };

  tabToggledHandler = () => {
    // Switch between 0 and 1 for the currentPageIndex
    this.setState((prevState, props) => {
      return {
        currentPageIndex: 1 - prevState.currentPageIndex
      };
    });
  };

  render() {
    // Props
    const { tab1, tab2, tabNames, action } = this.props;

    // CSS modules: visible/invisible classes are selected based on what tab is selected
    const cssClasses = [[styles.Left], [styles.Right]];

    cssClasses[this.state.currentPageIndex].push(styles.Visible);
    cssClasses[1 - this.state.currentPageIndex].push(styles.Invisible);

    return (
      <PageLayout
        top={<TabToggle toggled={this.tabToggledHandler} tabNames={tabNames} />}
        action={action}
      >
        <div className={styles.Tabs}>
          <div className={cssClasses[0].join(" ")}>{tab1}</div>
          <div className={cssClasses[1].join(" ")}>{tab2}</div>
        </div>
      </PageLayout>
    );
  }
}

SlidingTabs.propTypes = {
  tab1: PropTypes.element.isRequired,
  tab2: PropTypes.element.isRequired,
  action: PropTypes.element,
  tabNames: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default SlidingTabs;
