import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import ProductsTable from "./ProductsTable/ProductsTable";

const mockData = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football"
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball"
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball"
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch"
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5"
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchVal: "",
      inStockFilter: false
    };
  }

  handleInputChange = event => {
    this.setState({
      searchVal: event.target.value
    });
  };

  handleCheckChange = event => {
    this.setState({
      inStockFilter: event.target.checked
    });
  };

  render() {
    const { searchVal, inStockFilter } = this.state;
    return (
      <div>
        <SearchBar
          handleInputChange={this.handleInputChange}
          handleCheckChange={this.handleCheckChange}
          searchVal={searchVal}
          inStockFilter={inStockFilter}
        />
        <ProductsTable
          data={mockData}
          searchVal={searchVal}
          inStockFilter={inStockFilter}
        />
      </div>
    );
  }
}

export default FilterableProductTable;
