import React from "react";

function TableComponent({title , table}) {
  return (
    <>
      <div className="container text-left">
            {title&&<h1 className="text-start ms-5 ">{title}</h1>}
            <div >
                {table}
            </div>
      </div>
    </>
  );
}

export default TableComponent;
