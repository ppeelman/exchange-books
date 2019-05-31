import React, { Component } from "react";

import SlidingTabs from "../../hoc/SlidingTabs/SlidingTabs";
import BookDetail from "../BookDetail/BookDetail";
import UserDetail from "../UserDetail/UserDetail";
import Button from "../../components/UI/Button/Button";

class AvailableDetail extends Component {
  clickedHandler = () => {
    this.props.history.push("/request-exchange/step-1");
  };

  render() {
    return (
      <SlidingTabs
        tab1={<BookDetail />}
        tab2={<UserDetail />}
        tabNames={["Book", "User"]}
        action={
          <Button btnType={"primary"} clicked={this.clickedHandler}>
            Propose exchange
          </Button>
        }
      />
    );
  }
}

export default AvailableDetail;
