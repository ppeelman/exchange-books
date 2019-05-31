import React, { Component } from "react";

import myStyles from "./BookDetail.module.css";
import Table from "../../components/UI/Table/Table";
import SapiensImage from "../../assets/images/sapiens.jpg";
import Rating from "../../components/Rating/Rating";

class BookDetail extends Component {
  render() {
    return (
      <div className={myStyles.BookDetail}>
        <div className={myStyles.TitelSection}>
          <p className={myStyles.TitelSection__Title}>
            Sapiens - A Brief History of Humankind
          </p>
          <p className={myStyles.TitelSection__Author}>by Yuval Noah Harari</p>
        </div>
        <div className={myStyles.MetadataSection}>
          <div className={myStyles.CoverAndRating}>
            <img src={SapiensImage} alt="Cover" className={myStyles.Cover} />
            <Table
              tableData={[["Goodreads rating", <Rating score={4.2} />]]}
              vertical={true}
            />
          </div>
          <Table
            tableData={[
              ["Language", "English"],
              ["Type", "Paperback"],
              ["State", "Very good (8/10)"],
              ["Size", "443 pages"]
            ]}
          />
        </div>
      </div>
    );
  }
}

export default BookDetail;
