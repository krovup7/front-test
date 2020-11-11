import React from "react";
import { Icon } from "@iconify/react";
import minusCircleOutlined from "@iconify/icons-ant-design/minus-circle-outlined";
import plusCircleOutlined from "@iconify/icons-ant-design/plus-circle-outlined";
import { InputDropdown } from "./InputDropdown";
import {Input} from '../../styles/Styles'
import styled from "styled-components";

const Property = styled.div`
      display: flex;
      width: 50%;
      @media (max-width: 650px) {
        display: block;
      }
    `
const PropertyName = styled.div`
      flex: 1;
      @media (max-width: 1350px) {
        margin-right: 30px;
      }
    `
const PropertyValue = styled.div`
      margin-top: 12px;
      flex: 1;
    `
export const FormProperty = ({
  type,
  deleteProperty,
  id,
  name,
  edit,
  value,
  setPropertyDropdownValue,
  deleteDropdown,
  count,
  setPropertyValue,
  addDropdown,
}) => {

  switch (type) {
    case "Dropdown":
      return (
        <Property >
          <PropertyName>
            <p>
              <span>
                <Icon
                  icon={minusCircleOutlined}
                  color="blue"
                  width="30"
                  onClick={() => {
                    deleteProperty(id);
                  }}
                />
              </span>{" "}
              Свойство
            </p>
            <Input type={"text"} value={name} readOnly />
          </PropertyName>
          <PropertyValue>
            <p>Значение</p>
            {edit
              ? value.map((n, index) => (
                  <InputDropdown
                    key={index}
                    setPropertyDropdownValue={setPropertyDropdownValue}
                    index={index}
                    id={id}
                    value={n}
                    deleteDropdown={deleteDropdown}
                    edit={edit}
                  />
                ))
              : count.map((n, index) => (
                  <InputDropdown
                    key={index}
                    setPropertyDropdownValue={setPropertyDropdownValue}
                    index={index}
                    id={id}
                    value={n}
                    deleteDropdown={deleteDropdown}
                    edit={edit}
                  />
                ))}
            <span>
              <Icon
                icon={plusCircleOutlined}
                width="30"
                color="blue"
                onClick={() => {
                  addDropdown(id);
                }}
              />
            </span>
          </PropertyValue>
        </Property>
      );
    case "Number":
      return (
        <Property>
          <PropertyName>
            <p>
              <span>
                <Icon
                  icon={minusCircleOutlined}
                  width="30"
                  color="blue"
                  onClick={() => {
                    deleteProperty(id);
                  }}
                />
              </span>{" "}
              Свойство
            </p>
            <Input type={"text"} value={name} readOnly />
          </PropertyName>
          <PropertyValue>
            <p>Значение</p>
            <Input
              type={"number"}
              onChange={(e) => setPropertyValue(e.target.value, id)}
              value={value}
            />
          </PropertyValue>
        </Property>
      );
    case "String":
      return (
        <Property>
          <PropertyName>
            <p>
              <span>
                <Icon
                  icon={minusCircleOutlined}
                  width="30"
                  color="blue"
                  onClick={() => {
                    deleteProperty(id);
                  }}
                />
              </span>{" "}
              Свойство
            </p>
            <Input type={"text"} value={name} readOnly />
          </PropertyName>
          <PropertyValue>
            <p>Значение</p>
            <Input
              type={"text"}
              onChange={(e) => setPropertyValue(e.target.value, id)}
              value={value}
            />
          </PropertyValue>
        </Property>
      );
    default:
      return type;
  }
};
