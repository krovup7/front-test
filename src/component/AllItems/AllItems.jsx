import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import chevronSortDown from "@iconify/icons-carbon/chevron-sort-down";
import { Item } from "./Item";
import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css"; //for css
import styled from "styled-components";
import {
  Button,
  Content,
  Main,
  Input,
  Header,
  Table,
  TextStyle,
} from "../../styles/Styles";

const Product = styled.div`
    width: 200px;
    color: #0258ff;
    text-align: center;
    padding: 1rem 1rem;
    border-top: 3px solid #0258ff;
    background: linear-gradient(to bottom, #e0eafa, #ffffff);
  `;
const Property = styled.div`
    text-align: center;
    width: 200px;
    padding: 1rem 1rem;
    a {
      color: black;
    }
  `;
export const AllItems = ({
  setSearch,
  sortItems,
  currentItems,
  currentPage,
  totalItems,
  paginate,
  deleteProduct,
  routeChange,
}) => {


  return (
    <Content primary>
      <Header>
        <ul>
          <li>
            <Product>
              <NavLink to={"/"}>Листинг товаров</NavLink>
            </Product>
          </li>
          <li>
            <Property>
              <NavLink to={"/AllProperty"}>Листинг проперти</NavLink>
            </Property>
          </li>
        </ul>
      </Header>
      <Main primary>
        <div>
          <Button onClick={routeChange} add>
            Добавить товар
          </Button>
        </div>
        <div>
          <Input
            type={"text"}
            placeholder={"search"}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Table cellSpacing="0">
            <tbody>
              <tr>
                <th>
                  Перечень товаров
                  <Icon
                    icon={chevronSortDown}
                    width="30"
                    cursor="pointer"
                    onClick={(event) => sortItems(event)}
                  />
                </th>
                <TextStyle>Стоимость</TextStyle>
                <TextStyle>Дата изменения</TextStyle>
                <TextStyle>Управление</TextStyle>
              </tr>
              {currentItems.map((item) => (
                <Item
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  currency={item.currency}
                  changed={item.changed}
                  deleteProduct={deleteProduct}
                />
              ))}
            </tbody>
          </Table>
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalItems}
          changeCurrentPage={paginate}
          theme="square-fill"
        />
      </Main>
    </Content>
  );
};
