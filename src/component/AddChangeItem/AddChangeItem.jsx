import React from "react";
import { Icon } from "@iconify/react";
import uploadIcon from "@iconify/icons-fa-solid/upload";
import plusCircleOutlined from "@iconify/icons-ant-design/plus-circle-outlined";
import { FormProperty } from "./FormProperty";
import { Option } from "./Option";
import { Content, Main, Button, Input } from "../../styles/Styles";
import styled from "styled-components";

const Properties = styled.div`
  margin-top: 50px;
`;
const InputImg = styled.div`
  vertical-align: middle;
  background: #fff;
  border: 2px solid #dbdfe4;
  transition: all 0.2s linear;
  padding: 5px 9px;
  margin: 0;
  border-radius: 4px;
  font-size: 13px;
  height: 15px;
  width: 220px;

  span {
    float: right;
  }

  p {
    margin: 0;
  }
`;
const Img = styled.img`
  margin-top: 1rem;
  width: 250px;
  height: 200px;
`;
const Textarea = styled.textarea`
  background: #fff;
  border: 2px solid #dbdfe4;
  transition: all 0.2s linear;
  padding: 5px 9px;
  margin: 0;
  border-radius: 4px;
  font-size: 13px;
  height: 200px;
  width: 40%;
`;
const PropertyBlock = styled.div`
  span {
    vertical-align: middle;
    margin-left: 20px;
  }
`;
export const AddChangeItem = ({
  handleSubmit,
  routeChange,
  handleChange,
  data,
  handleImageChange,
  addProperty,
  avaibleProp,
  edit,
  deleteDropdown,
  addDropdown,
  allProp,
  setPropertyValue,
  setPropertyDropdownValue,
  deleteProperty,
  choosesProp,
  count,
  color,
}) => {
  return (
    <Content>
      <Main>
        <form onSubmit={handleSubmit}>
          <Button type="submit" primary>
            Сохранить
          </Button>
          <Button onClick={routeChange}>Вернуться</Button>
          <Properties>
            <h4>Добавление товара</h4>
            <p>
              Название товара<span style={{ color: "red" }}>*</span>
            </p>
            <Input
              name="name"
              type="text"
              onChange={handleChange}
              value={data.name}
            />
            <p>
              Стоимость товара<span style={{ color: "red" }}>*</span>
            </p>
            <Input
              name="price"
              type="number"
              onChange={handleChange}
              value={data.price}
            />
            <p>
              Изображение<span style={{ color: "red" }}>*</span>
            </p>
            <InputImg>
              <label>
                <input
                  type="file"
                  name="photo"
                  accept="image/jpeg,image/png,image/gif"
                  id="fileName"
                  onChange={handleImageChange}
                />
                <p>
                  image{" "}
                  <span>
                    <Icon icon={uploadIcon} color="blue" width="20" />
                  </span>
                </p>
              </label>
            </InputImg>
            {data.photo.length > 0 ? (
              <div>
                <Img src={data.photo} alt={"ChosePhoto"} />
              </div>
            ) : null}
            <p>Описание</p>
            <Textarea name="title" onChange={handleChange} value={data.title} />
          </Properties>
          <PropertyBlock>
            <span>
              <h4>
                Добавление товару свойств{" "}
                <span>
                  <Icon icon={plusCircleOutlined} width="30" color="blue" />
                </span>
                <span>
                  <select
                    size="1"
                    onChange={(event) => addProperty(event.target.value)}
                  >
                    <option value="0">Выберите свойство</option>

                    {avaibleProp.map((p, index) => (
                      <Option key={index} name={p.name} value={p.id} />
                    ))}
                  </select>
                </span>
              </h4>
            </span>
            {edit
              ? Object.keys(data.properties).map((key) => (
                  <FormProperty
                    key={key}
                    deleteDropdown={deleteDropdown}
                    addDropdown={addDropdown}
                    value={data.properties[key]}
                    type={allProp.find((p) => p.id === Number(key)).type}
                    name={allProp.find((p) => p.id === Number(key)).name}
                    setPropertyValue={setPropertyValue}
                    id={key}
                    setPropertyDropdownValue={setPropertyDropdownValue}
                    deleteProperty={deleteProperty}
                    edit={edit}
                  />
                ))
              : choosesProp.map((pro, index) => (
                  <FormProperty
                    key={pro.id}
                    type={pro.type}
                    name={pro.name}
                    setPropertyValue={setPropertyValue}
                    index={index}
                    id={pro.id}
                    setPropertyDropdownValue={setPropertyDropdownValue}
                    deleteProperty={deleteProperty}
                    color={color}
                    addDropdown={addDropdown}
                    deleteDropdown={deleteDropdown}
                    count={count}
                  />
                ))}
          </PropertyBlock>
        </form>
      </Main>
    </Content>
  );
};
