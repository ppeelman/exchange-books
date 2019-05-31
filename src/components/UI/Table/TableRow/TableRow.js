import React from "react";

import myStyles from "./TableRow.module.css";

const TableRow = ({ head, body, vertical }) => {
  const rowStyle = [myStyles.TableRow];

  if (vertical) {
    rowStyle.push(myStyles["TableRow--vertical"]);
  }

  return (
    <div className={rowStyle.join(" ")}>
      <div className={myStyles.TableRow__RowHead}>{head}</div>
      <div className={myStyles.TableRow__RowBody}>{body}</div>
    </div>
  );
};

export default TableRow;
