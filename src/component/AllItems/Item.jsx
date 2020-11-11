import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Edit = styled.td`
    a {
      margin-right: 20px;
    }
  `;
export const Item = ({ id, name, price, changed, deleteProduct, currency }) => {

  return (
    <tr>
      <td>
        <NavLink to={"/ItemCard/" + id}>{name}</NavLink>
      </td>
      <td>
        {price.toLocaleString("ru")}
        {currency}
      </td>
      <td>{changed}</td>
      <Edit>
        <NavLink to={"/ChangeItem/" + id}>Ред.</NavLink>{" "}
        <NavLink to={"/Items"} onClick={() => deleteProduct(id)}>
          Удалить
        </NavLink>
      </Edit>
    </tr>
  );
};
