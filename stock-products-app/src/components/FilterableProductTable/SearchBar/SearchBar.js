import React from "react";

function SearchBar({
  searchVal,
  inStockFilter,
  handleInputChange,
  handleCheckChange
}) {
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={searchVal}
        onChange={handleInputChange}
      />
      <br></br>
      <input
        type="checkbox"
        name="stockProducts"
        id="filter-stock-checkbox"
        checked={inStockFilter}
        onChange={handleCheckChange}
      />
      <label htmlFor="filter-stock-checkbox">Only show products in stock</label>
    </form>
  );
}

export default SearchBar;
