import React from "react";

import TableRow from "./TableRow/TableRow";

const Table = ({ tableData, vertical }) => {
  const tableJSX = tableData.map(rowData => (
    <TableRow key={rowData[0]} head={rowData[0]} body={rowData[1]} vertical={vertical} />
  ));

  return <div className={"Table"}>{tableJSX}</div>;
};

export default Table;
