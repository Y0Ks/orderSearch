import PropTypes from "prop-types";
import { header } from "./data/header";
import React, { useState } from "react";
import "./Item.css";

const Item = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const filteredValues = Object.entries(props).filter(([key]) =>
    header.includes(key)
  );

  return (
    <>
      <tr>
        <td>
          <button onClick={toggleExpand}>{isExpanded ? "-" : ">"}</button>
        </td>
        {filteredValues.map(([key, value], index) => (
          <td key={index} className={`column-${key}`}>
            {value}
          </td>
        ))}
        
        <td>
          <button className="round-button">...</button>
        </td>
      </tr>
      {isExpanded && (
        <tr>
          <td colSpan={filteredValues.length + 1}>
            <div className="item-details">
              <div className="name-code-location">
                {props.firstname} {props.lastname} ({props.code} -{" "}
                {props.location})
                <button className="detail-button" onClick={toggleExpand}>
                  Full Review Detail
                </button>
              </div>
              <div className="action-buttons">
                <button className="accept-button">Accept</button>
                <button className="reject-button">Reject</button>
              </div>
            </div>
          </td>
        </tr>
      )}
      {isExpanded && (
        <tr className="expanded-details">
          <td colSpan={filteredValues.length + 1}>
            <div className="detail-row">
              <div>
                <strong>Net Amount:</strong> {props.netAmount}
              </div>
              <div>
                <strong>Price:</strong> {props.price}
              </div>{" "}
              <div>
                <strong>Exchange Rate:</strong> {props.exchangeRate}
              </div>
            </div>
            <div className="detail-row">
              <div>
                <strong>Reference Number:</strong> {props.noRef}
              </div>
              <div>
                <strong>Date/Time:</strong> {props.dateTimeDetail}
              </div>
              <div>
                <strong>Telephone:</strong> {props.telephone}
              </div>
            </div>
            <div className="warnings">
              <strong>Warning(s):</strong>
              <ul>
                <li>
                  To trade this security in this account, a currency conversion
                  will be made at the current rate.
                </li>
                <li>A similar order has already been submitted.</li>
                <li>
                  Your transaction will be processed the following business day.
                </li>
                <li>
                  It is not possible to calculate the buying power of this
                  order.
                </li>
                <li>
                  A cancellation will not be possible during business hours on
                  market orders. You can call a representative for more
                  information.
                </li>
                <li>
                  ㆍFor the above-mentioned reason(s), your order will be
                  processed by one of our representatives.
                </li>
              </ul>
            </div>
          </td>
        </tr>
      )}
    </>
  );
};

Item.prototype = {
  account: PropTypes.string.isRequired,
  operation: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  qty: PropTypes.number.isRequired,
  filledQty: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  expiration: PropTypes.string.isRequired,
  noRef: PropTypes.string.isRequired,
  extRef: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  netAmount: PropTypes.number.isRequired,
  exchangeRate: PropTypes.number.isRequired,
  osLimit: PropTypes.number.isRequired,
  noRefDetail: PropTypes.string.isRequired,
  dateTimeDetail: PropTypes.string.isRequired,
};
export default Item;
