import React from "react";

function ProductRow({ name, price, stocked }) {
  return (
    <tr>
      <td style={stocked ? {} : { color: "#f00" }}>{name}</td>
      <td>{price}</td>
    </tr>
  );
}

export default ProductRow;
