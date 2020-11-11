import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const DeleteProperty = styled.td`
  a {
    margin-left: 100px;
  }
`;
export const Property = ({ id, deleteProperty, name, type }) => {
  return (
    <tr key={id}>
      <td>{name}</td>
      <td>{type}</td>
      <DeleteProperty>
        <NavLink to={"/AllProperty"} onClick={() => deleteProperty(id)}>
          Удалить
        </NavLink>
      </DeleteProperty>
    </tr>
  );
};
