import React, { Component, Fragment } from "react";

import myStyles from "./ERFStep1.module.css";
import BookSummary from "../../../components/BookSummary/BookSummary";

class ERFStep1 extends Component {
  state = {
    selected: [true, true, true]
  };

  bookSelectedHandler = key => {
    this.setState((prevState, props) => {
      return {
        selected: [
          ...prevState.selected.slice(0, key),
          !prevState.selected[key],
          ...prevState.selected.slice(key + 1)
        ]
      };
    });
  };

  render() {
    const bookData = ["", "", ""];
    const bookSummaryJSX = bookData.map((book, index) => {
      return (
        <BookSummary
          key={index}
          userShown={false}
          selected={this.state.selected[index]}
          clicked={() => this.bookSelectedHandler(index)}
        />
      );
    });

    return (
      <Fragment>
        <div className={myStyles.Header}>
          <h1>Which books can Jokie2 choose from?</h1>
          <p>(By default all of your books are selected)</p>
        </div>
        <div className={myStyles.Body}>{bookSummaryJSX}</div>
      </Fragment>
    );
  }
}

export default ERFStep1;
