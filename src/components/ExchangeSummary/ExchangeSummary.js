import React from "react";
//import PropTypes from "prop-types";

import styles from "./ExchangeSummary.module.css";
import Avatar from "../Avatar/Avatar";
import Button from "../UI/Button/Button";
import Isabelle from "../../assets/images/isabelle.jpg";
import SapiensCover from "../../assets/images/sapiens.jpg";
import BuddhismCover from "../../assets/images/buddhism.jpg";

const ExchangeSummary = ({ status }) => {
  let offeredCover = (
    <img src={BuddhismCover} alt="Cover" className={styles.OfferedCover} />
  );
  if (status === "pending") {
    offeredCover = (
      <div className={styles.UnknownCover}>
        <p>?</p>
      </div>
    );
  }

  return (
    <div className={styles.Card}>
      <div className={styles.Requested}>
        <div className={styles.Person}>
          <div className={styles.Picture}>
            <Avatar image={Isabelle} />
          </div>
          <p>Jokie2</p>
          <Button bntType={"secondary"}>1 message</Button>
        </div>
        <img src={SapiensCover} alt="Cover" className={styles.RequestedCover} />
      </div>
      <div className={styles.Offered}>{offeredCover}</div>
    </div>
  );
};

export default ExchangeSummary;
