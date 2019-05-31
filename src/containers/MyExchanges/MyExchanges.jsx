import React, { Component } from "react";

import SlidingTabs from "../../hoc/SlidingTabs/SlidingTabs";
import OutgoingExchangesOverview from "../OutgoingExchangesOverview/OutgoingExchangesOverview";

class MyExchanges extends Component {
  render() {
    return (
      <SlidingTabs
        tab1={<OutgoingExchangesOverview />}
        tab2={<p />}
        tabNames={["Outgoing", "Incoming"]}
      />
    );
  }
}

export default MyExchanges;
