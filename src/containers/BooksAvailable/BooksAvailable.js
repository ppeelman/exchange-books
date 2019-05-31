import React, { Component } from "react";

import myStyles from "./BooksAvailable.module.css";
import BookSummary from "../../components/BookSummary/BookSummary";

class BooksAvailable extends Component {
  bookSelectedHandler = () => {
    console.log("clicked");
    this.props.history.push("/available/1");
  };

  render() {
    return (
      <div className={myStyles.Container}>
        <BookSummary
          userShown={true}
          selected={false}
          clicked={this.bookSelectedHandler}
        />
        <BookSummary
          userShown={true}
          selected={false}
          clicked={this.bookSelectedHandler}
        />
        <BookSummary
          userShown={true}
          selected={false}
          clicked={this.bookSelectedHandler}
        />
      </div>
    );
  }
}

export default BooksAvailable;
