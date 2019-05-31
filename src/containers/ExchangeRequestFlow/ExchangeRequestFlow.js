import React, { Component } from "react";
import { Route } from "react-router-dom";

import PageLayout from "../../hoc/PageLayout/PageLayout";
import ProgressTracker from "../../components/UI/ProgressTracker/ProgressTracker";
import Button from "../../components/UI/Button/Button";
import ERFStep1 from "./ERFStep1/ERFStep1";
import ERFStep2 from "./ERFStep2/ERFStep2";
import ERFStep3 from "./ERFStep3/ERFStep3";

class ExchangeRequestFlow extends Component {
  continueClickedHandler = nextStep => {
    this.props.history.push(`/request-exchange/step-${nextStep}`);
  };

  render() {
    const location = this.props.location.pathname;
    const currentStep = Number(location[location.length - 1]);
    const nextStep = currentStep + 1;

    return (
      <PageLayout
        top={
          <ProgressTracker
            steps={["Your books", "The exchange", "Message"]}
            currentStepIndex={currentStep - 1}
          />
        }
        action={
          <Button
            btnType={"primary"}
            clicked={() => this.continueClickedHandler(nextStep)}
          >
            Continue
          </Button>
        }
      >
        <Route path="/request-exchange/step-1" exact component={ERFStep1} />
        <Route path="/request-exchange/step-2" exact component={ERFStep2} />
        <Route path="/request-exchange/step-3" exact component={ERFStep3} />
      </PageLayout>
    );
  }
}

export default ExchangeRequestFlow;
