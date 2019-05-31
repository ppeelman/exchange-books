import React, { Component } from "react";

import myStyles from "./UserDetail.module.css";
import Table from "../../components/UI/Table/Table";
import Isabelle from "../../assets/images/isabelle.jpg";
import Rating from "../../components/Rating/Rating";
import Avatar from "../../components/Avatar/Avatar";
import DataContainer from "../../components/UI/DataContainer/DataContainer";

class BookDetail extends Component {
  render() {
    return (
      <div className={myStyles.UserDetail}>
        <div className={myStyles.ProfileSection}>
          <div className={myStyles.ProfileSection__Picture}>
            <Avatar image={Isabelle} />
          </div>
          <div className={myStyles.ProfileSection__NameAndRating}>
            <p className={myStyles.ProfileSection__Name}>Jokie2</p>
            <Rating score={3.6} className={myStyles.ProfileSection__Rating} />
          </div>
        </div>
        <div className={myStyles.MetadataSection}>
          <Table
            tableData={[
              ["Exchange location(s)", "Gent, Lokeren"],
              ["Exchange method(s)", "Mailbox, Appointment"],
              ["Books exchanged", "3"]
            ]}
          />
          <DataContainer title={"Interests"}>
            <div className={myStyles.GenreContent}>
              <div>
                <p className={myStyles.GenreTitle}>Fiction</p>
                <ul className={myStyles.GenreList}>
                  <li>Romance</li>
                  <li>Science-fiction</li>
                </ul>
              </div>
              <div>
                <p className={myStyles.GenreTitle}>Non-Fiction</p>
                <ul className={myStyles.GenreList}>
                  <li>Biography</li>
                  <li>Psychology</li>
                </ul>
              </div>
            </div>
          </DataContainer>
        </div>
      </div>
    );
  }
}

export default BookDetail;
