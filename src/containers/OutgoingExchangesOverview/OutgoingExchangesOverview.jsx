import React, { Component, Fragment } from "react";
//import PropTypes from "prop-types";

import Collapsible from "../../components/UI/Collapsible/Collapsible";
import ExchangeSummary from "../../components/ExchangeSummary/ExchangeSummary";

class OutgoingExchangesOverview extends Component {
  render() {
    return (
      <Fragment>
        <Collapsible head={"Accepted"} shown>
          <ExchangeSummary />
          <ExchangeSummary />
        </Collapsible>
        <Collapsible head={"Pending"}>
          <ExchangeSummary status={"pending"} />
        </Collapsible>
      </Fragment>
    );
  }
}

/* OutgoingExchangesOverview.propTypes = {
  
};
 */
export default OutgoingExchangesOverview;
