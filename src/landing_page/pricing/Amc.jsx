import React from 'react';
import AmcTable from "./tables/Amc";
import TableComponent from "./TableContainer";

const Amc = () => {
  return (
       <div className="acop-container">
      <TableComponent
        table={<AmcTable />}
        title="Demat AMC (Annual Maintenance Charge)"
      ></TableComponent>
    </div>
  );
};

export default Amc;
