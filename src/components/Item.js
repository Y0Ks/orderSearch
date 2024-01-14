import PropTypes from "prop-types";
import { header } from "./data/header";

const Item = (props) => {
  // Filter the props based on the header array
  const filteredValues = Object.entries(props)
    .filter(([key]) => header.includes(key))
    

  return (
    <>
      <tr>
        {filteredValues.map(([key, value], index) => (
          // Use the key for the class name
          <td key={index} className={`column-${key}`}>
            {value}
          </td>
        ))}
      </tr>
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
