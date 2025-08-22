import React from "react";
import AccountTable from "./tables/Acop";
import TableComponent from "./TableContainer";

const OpeningCharges = () => {
  return (
    <div className="acop-container">
      <TableComponent
        table={<AccountTable />}
        title="Charges for optional value added services"
      ></TableComponent>
    </div>
  );
};

export default OpeningCharges;
