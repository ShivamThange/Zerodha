import React from "react";
import Ovas from "./tables/Ovas";
import TableContainer from "./TableContainer.jsx";

const OptionalVAS = () => {
  return (
    <div className="Ovas">
      <TableContainer
        table={<Ovas />}
        title="Charges for optional value added services"
      ></TableContainer>
    </div>
  );
};

export default OptionalVAS;
