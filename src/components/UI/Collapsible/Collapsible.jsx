import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import styles from "./Collapsible.module.css";
import Arrow from "./Arrow/Arrow";

class Collapsible extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shown: props.shown
    };
  }

  state = {
    shown: false
  };

  headToggledHandler = () => {
    this.setState((prevState, props) => {
      return {
        shown: !prevState.shown
      };
    });
  };

  render() {
    const { head, children } = this.props;

    const cssClasses = {
      head: [styles.Head],
      body: [styles.Body]
    };

    if (this.state.shown) {
      cssClasses.head.push(styles["Head--active"]);
      cssClasses.body.push(styles["Body--active"]);
    }

    return (
      <Fragment>
        <div
          className={cssClasses.head.join(" ")}
          onClick={this.headToggledHandler}
        >
          <Arrow down={this.state.shown} />
          {head}
        </div>
        <div className={cssClasses.body.join(" ")}>
          <p>{children}</p>
        </div>
      </Fragment>
    );
  }
}

Collapsible.propTypes = {
  shown: PropTypes.bool,
  children: PropTypes.node.isRequired
};

export default Collapsible;
