import React from "react";
import ProductCategoryRow from "./ProductCategoryRow/ProductCategoryRow";
import ProductRow from "./ProductRow/ProductRow";

function ProductsTable({ data, searchVal, inStockFilter }) {
  var category = "";
  var products = data.map((product, index) => {
    var row;
    var productRow;
    if (product.name.toLowerCase().includes(searchVal.toLowerCase())) {
      if (category !== product.category) {
        category = product.category;
        row = <ProductCategoryRow category={category} />;
      }
      if (inStockFilter) {
        if (product.stocked) {
          productRow = (
            <ProductRow
              name={product.name}
              price={product.price}
              stocked={product.stocked}
            />
          );
        }
      } else {
        productRow = (
          <ProductRow
            name={product.name}
            price={product.price}
            stocked={product.stocked}
          />
        );
      }
    }
    return (
      <tbody key={index}>
        {row && row}
        {productRow && productRow}
      </tbody>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      {products}
    </table>
  );
}

export default ProductsTable;
