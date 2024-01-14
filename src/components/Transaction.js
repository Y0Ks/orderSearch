import { v4 as uuid4 } from "uuid";

import "./Transaction.css";

import Item from "./Item";

const Transaction = (props) => {
  const { header, items } = props;
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            {header.map((columnName) => (
              <th key={uuid4()} className={`column-${columnName}`}>
                {columnName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <Item {...item} key={uuid4()} />
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Transaction;
