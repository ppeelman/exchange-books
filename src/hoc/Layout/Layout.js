import React, { Component, Fragment } from "react";

import myStyles from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState, props) => ({
      showSideDrawer: !prevState.showSideDrawer
    }));
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  render() {
    return (
      <Fragment>
        <Toolbar
          pageTitle={"Available"}
          menuToggled={this.sideDrawerToggleHandler}
          openState={this.state.showSideDrawer}
        />
        <SideDrawer
          openState={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={myStyles.Main}>{this.props.children}</main>
      </Fragment>
    );
  }
}

export default Layout;
