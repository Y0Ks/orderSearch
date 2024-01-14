import Transaction from "./components/Transaction";
import SearchComponent from "./components/SearchComponent";

import "./App.css";
import React, { useState } from "react";

import { header } from "./components/data/header";
import { detail } from "./components/data/detail";

function App() {
  let [items, setItems] = useState([...detail]);
  let [resultCount, setCount] = useState(detail.length);
  const searchCriteriaItem = (object) => {

    // Set default dates with min and max dates
    const defaultFromDate = new Date("1970-01-01");
    const defaultToDate = new Date("2999-12-31");
    defaultFromDate.setHours(0, 0, 0, 0);
    defaultToDate.setHours(0, 0, 0, 0);

    // Use given dates or defaults if not provided
    const fromDate = object.dateFrom
      ? new Date(object.dateFrom)
      : defaultFromDate;
    const toDate = object.dateTo ? new Date(object.dateTo) : defaultToDate;
    fromDate.setHours(0, 0, 0, 0);
    toDate.setHours(0, 0, 0, 0);

    // Filter function
    const result = detail.filter((item) => {
      const itemDate = new Date(item.date);
      itemDate.setHours(0, 0, 0, 0);
      return itemDate >= fromDate && itemDate <= toDate;
    });

    setItems(result);
    setCount(result.length); // Set count based on the filtered result
  };

  return (
    <div className="App">
      <h1>Search</h1>
      <div>result(s): {resultCount}</div>
      <SearchComponent onSearch={searchCriteriaItem} />
      <br />
      <Transaction {...{ header, items }} />
    </div>
  );
}

export default App;
