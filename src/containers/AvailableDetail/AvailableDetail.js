import React, { Component } from "react";

import { connect } from "react-redux";

import SlidingTabs from "../../hoc/SlidingTabs/SlidingTabs";
import BookDetail from "../BookDetail/BookDetail";
import UserDetail from "../UserDetail/UserDetail";
import Button from "../../components/UI/Button/Button";

class AvailableDetail extends Component {
  constructor(props) {
    super(props);
    this.exchangeProposeHandler = this.exchangeProposeHandler.bind(this);
    this.redirectToAuth = this.redirectToAuth.bind(this);
  }

  exchangeProposeHandler() {
    this.props.history.push("/request-exchange/step-1");
  }

  redirectToAuth() {
    this.props.history.push("/login");
  }

  render() {
    let actionJSX = (
      <Button btnType={"primary"} clicked={this.redirectToAuth}>
        Login to propose exchange
      </Button>
    );
    if (this.props.isAuthenticated) {
      actionJSX = (
        <Button btnType={"primary"} clicked={this.exchangeProposeHandler}>
          Propose exchange
        </Button>
      );
    }

    return (
      <SlidingTabs
        tab1={<BookDetail />}
        tab2={<UserDetail />}
        tabNames={["Book", "User"]}
        action={actionJSX}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  };
};

export default connect(mapStateToProps)(AvailableDetail);
