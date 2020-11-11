import React from "react";
import { NavLink } from "react-router-dom";
import { ItemInput } from "./ItemInput";
import { Content, Main } from "../../styles/Styles";
import styled from "styled-components";

const Columns = styled.div`
  display: flex;
  @media (max-width: 992px) {
    display: block;
  }
`;
const Image = styled.div`
  flex: 1;
`;
const Text = styled.div`
  flex: 2;
`;
const ImgBlock = styled.div`
  width: 80%;
  img{
    width: 300px;
  }
`;
const ItemSpecific = styled.div`
  select {
    width: 300px;
    padding: 5px;
  }
  h4 {
    margin-bottom: 0;
  }
  p {
    display: inline-block;
    margin-top: 0.5em;
  }
  button {
    font-weight: 400;
    cursor: pointer;
    min-width: 150px;
    color: #fff;
    background-color: #ffb800;
    vertical-align: middle;
    text-align: center;
    border: 1px solid #ffb800;
    padding: 0.375rem 0.75rem;
    font-size: 0.875rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    float: right;
  }
`;
const Buy = styled.div`
  width: 50%;
`;
export const ItemCard = ({ item, listProperty }) => {
  return (
    <Content>
      <Main>
        <NavLink to={"/Items"}>Вернуться</NavLink>
        <hr />
        <Columns>
          <Image>
            <ImgBlock>
              <img src={item.photo} alt={"CardPhoto"} />
            </ImgBlock>
          </Image>
          <Text>
            <h3>{item.name}</h3>
            <p> {item.title}</p>
          </Text>
        </Columns>
        <ItemSpecific>
          {listProperty.map((p, index) => (
            <ItemInput
              key={index}
              name={p.name}
              value={p.value}
              type={p.type}
            />
          ))}
          <h4>Стоимость</h4>
          <Buy>
            <p>
              {item.price.toLocaleString("ru")}
              {item.currency}
            </p>
            <button>Беру!!!</button>
          </Buy>
        </ItemSpecific>
      </Main>
    </Content>
  );
};
