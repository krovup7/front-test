import React from "react";

export const ItemInput = ({ type, name, value }) => {
  switch (type) {
    case "Dropdown":
      return (
        <div>
          <h4>{name}</h4>
          <select size="1">
            {value.map((v, index) => (
              <option key={index} value="0">
                {v}
              </option>
            ))}
          </select>
        </div>
      );
    case "Number":
      return (
        <div>
          <h4>{name}</h4>
          <p>{value}</p>
        </div>
      );
    case "String":
      return (
        <div>
          <h4>{name}</h4>
          <p>{value}</p>
        </div>
      );
    default:
      return type;
  }
};
