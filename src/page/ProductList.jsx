import React from "react";
import TableData from "../components/dasebord/TableData";

const ProductList = () => {
  return (
    <div>
      <h2 className="text-[24px] font-semibold mb-5">All Product</h2>
      <div>
        <TableData />
      </div>
    </div>
  );
};

export default ProductList;
