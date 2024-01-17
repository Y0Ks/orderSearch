import React, { useState, useEffect } from "react";
import "./SearchComponent.css";

const SearchComponent = (props) => {
  console.log("render form component");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [period, setPeriod] = useState("transmission");
  const [status, setStatus] = useState("waiting");

  const [formValid, setFormValid] = useState(false);

  const dateFromChange = (event) => {
    setDateFrom(event.target.value);
  };

  const dateToChange = (event) => {
    setDateTo(event.target.value);
  };

  const doSearch = (event) => {
    event.preventDefault();

    const searchCriteria = {
      period,
      status,
      dateFrom,
      dateTo,
    };

    props.onSearch(searchCriteria);
  };

  const doReset = (event) => {
    event.preventDefault();
    setDateFrom("");
    setDateTo("");
    document.getElementById("seachDateFrom").value = "";
    document.getElementById("seachDateTo").value = "";
    const searchCriteria = {
      searchPeriod: "transmission",
      searchStatus: "waiting",
      dateFrom: "",
      dateTo: "",
    };

    props.onSearch(searchCriteria);
  };

  useEffect(() => {
    console.log("call useEffect");

    console.log("dateFrom", dateFrom);
    console.log("dateTo", dateTo);
    const checkData = dateFrom !== "" || dateTo !== "";
    setFormValid(checkData);

    console.log("form valid", formValid);
  }, [dateFrom, dateTo]);

  return (
    <div>
      <form onSubmit={doSearch} onReset={doReset}>
        <div className="form-control">
          <label>Period</label>
          <select name="searchPeriod" id="searchPeriod" onChange={setPeriod}>
            <option value="transmission">Transaction</option>
          </select>
        </div>
        <div className="form-control">
          <label>Status</label>
          <select name="searchStatus" id="searchStatus" onChange={setStatus}>
            <option value="waiting">Waiting</option>
          </select>
        </div>
        <div className="form-control">
          <label>From</label>
          <input
            type="date"
            id="seachDateFrom"
            name="seachDateFrom"
            placeholder=""
            onChange={dateFromChange}
          />
        </div>
        <div className="form-control">
          <label>To</label>
          <input
            type="date"
            id="seachDateTo"
            name="seachDateTo"
            placeholder=""
            onChange={dateToChange}
          />
        </div>
        <div className="form-control">
          <button className="btn" type="submit" disabled={!formValid}>
            Search
          </button>
        </div>

        <div className="form-control">
          <button className="btn" type="reset">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};
export default SearchComponent;
