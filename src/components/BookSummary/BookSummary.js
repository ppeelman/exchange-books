import React from "react";

import myStyles from "./BookSummary.module.css";
import SapiensImage from "../../assets/images/sapiens.jpg";
import isabelle from "../../assets/images/isabelle.jpg";
import TagGroup from "../TagGroup/TagGroup";
import Avatar from "..//Avatar/Avatar";

const BookSummary = ({ userShown, selected, clicked }) => {
  let userJSX = null;
  if (userShown) {
    userJSX = (
      <div className={myStyles.BookSummary__Distance}>
        <div className={myStyles.BookSummary__UserPicture}>
          <Avatar image={isabelle} />
        </div>
        <p>3 km away from you</p>
      </div>
    );
  }

  const bookSummaryClasses = [myStyles.BookSummary];
  if (!userShown) {
    bookSummaryClasses.push(myStyles["BookSummary--noUser"]);
  }
  if (selected) {
    bookSummaryClasses.push(myStyles["BookSummary--selected"]);
  }

  return (
    <div className={bookSummaryClasses.join(" ")} onClick={clicked}>
      <img
        src={SapiensImage}
        alt="Cover"
        className={myStyles.BookSummary__Cover}
      />
      <div className={myStyles.BookSummary__Content}>
        <p className={myStyles.BookSummary__Author}>Yuval Noah Harari</p>
        <div className={myStyles.BookSummary__TitleBlock}>
          <p className={myStyles.BookSummary__MainTitle}>Sapiens</p>
          <p className={myStyles.BookSummary__SubTitle}>
            A Brief History of Humankind
          </p>
        </div>
        <TagGroup tags={["English", "Paperback"]} />
        {userJSX}
      </div>
    </div>
  );
};

export default BookSummary;
