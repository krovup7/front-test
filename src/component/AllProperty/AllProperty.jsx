import React from "react";
import { NavLink } from "react-router-dom";
import { Property } from "./Property";
import {
  Button,
  Content,
  Header,
  Main,
  Table,
  TextStyle,
} from "../../styles/Styles";
import styled from "styled-components";

const Products = styled.div`
  text-align: center;
  width: 200px;
  padding: 1rem 1rem;
  a {
    color: black;
  }
`;
const Properties = styled.div`
  margin-right: 100px;
  width: 200px;
  color: #0258ff;
  text-align: center;
  padding: 1rem 1rem;
  border-top: 3px solid #0258ff;
  background: linear-gradient(to bottom, #e0eafa, #ffffff);
`;
export const AllProperty = ({ properties, deleteProperty, routeChange }) => {
  return (
    <Content primary>
      <Header>
        <ul>
          <li>
            <Products>
              <NavLink to={"/Items"}>Листинг товаров</NavLink>
            </Products>
          </li>
          <li>
            <Properties>
              <NavLink to={"/AllProperty"}>Листинг проперти</NavLink>
            </Properties>
          </li>
        </ul>
      </Header>
      <Main primary>
        <div>
          <Button onClick={routeChange} add>
            Добавить проперти
          </Button>
        </div>
        <div>
          <Table cellSpacing="0">
            <tbody>
              <tr>
                <th>Перечень проперти</th>
                <TextStyle>Тип</TextStyle>
                <TextStyle>Управление</TextStyle>
              </tr>
              {properties.map((pro) => (
                <Property
                  key={pro.id}
                  name={pro.name}
                  type={pro.type}
                  id={pro.id}
                  deleteProperty={deleteProperty}
                />
              ))}
            </tbody>
          </Table>
        </div>
      </Main>
    </Content>
  );
};
