import React, { Fragment } from "react";

import myStyles from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

import { connect } from "react-redux";

import * as actions from "../../../store/actions/index";

const NavigationItems = props => {
  let authMenuItems = (
    <NavigationItem clicked={props.onLogout}>Log out</NavigationItem>
  );
  if (!props.isAuthenticated) {
    authMenuItems = (
      <Fragment>
        <NavigationItem to={"/login"}>Log in</NavigationItem>
        <NavigationItem to={"/login"}>Register</NavigationItem>
      </Fragment>
    );
  }

  return (
    <div className={myStyles.NavigationItems}>
      <NavigationItem to={"/"}>Available</NavigationItem>
      <NavigationItem to={"/exchange-requests"}>
        Exchange requests
      </NavigationItem>
      {authMenuItems}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(actions.logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationItems);
