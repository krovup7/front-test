import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/actions/ItemsAction";
import { dateNow } from "../component/utils/Date";
import { AddChangeItem } from "../component/AddChangeItem/AddChangeItem";

export const AddItemContainer = (props) => {
  const [choosesProp, setChoosesProp] = useState([
    {
      id: 1,
      name: "Цвет авто",
      type: "Dropdown",
    },
    {
      id: 2,
      name: "Год выпуска",
      type: "Number",
    },
    {
      id: 3,
      name: "Тип топлива",
      type: "String",
    },
  ]);
  const [data, setData] = useState({
    name: "",
    price: "",
    title: "",
    photo: "",
    currency: "$",
    changed: dateNow,
    properties: {},
  });

  const [count, setCount] = useState([1, 2]);
  const dispatch = useDispatch();
  let items = useSelector((state) => state.items.items);
  let item = items[items.length - 1];
  let color = [];
  let allProp = useSelector((state) => state.properties.properties);
  let avaibleProp = allProp.filter(
    (o) => !choosesProp.find((x) => o.id === x.id)
  );

  const deleteProperty = (id) => {
    setChoosesProp(choosesProp.filter((x) => x.id !== id));
  };
  const addProperty = (e) => {
    let p = allProp.find((x) => x.id === Number(e));
    setChoosesProp([...choosesProp, p]);
  };
  const setPropertyValue = (e, id) => {
    setData({ ...data, properties: { ...data.properties, [id]: e } });
  };
  const setPropertyDropdownValue = (e, id, index) => {
    color[index] = e;
    setData({ ...data, properties: { ...data.properties, [id]: color } });
  };
  const handleImageChange = (e) => {
    e.preventDefault();
    let fileName = document.getElementById("fileName").value;
    let idxDot = fileName.lastIndexOf(".") + 1;
    let extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
    if (extFile === "jpg" || extFile === "jpeg" || extFile === "png") {
      let reader = new FileReader();
      let file = e.target.files[0];
      reader.onloadend = () => {
        setData({ ...data, photo: reader.result });
      };
      reader.readAsDataURL(file);
    } else {
      alert("Only jpg/jpeg and png files are allowed!");
    }
  };
  const addDropdown = () => {
    setCount([...count, 1]);
  };
  const deleteDropdown = () => {
    setCount(count.slice(0, -1));
  };
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const routeChange = () => {
    let path = "/Items";
    props.history.push(path);
  };
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(
        addItem({
          id: item.id + 1,
          name: data.name,
          price: data.price,
          photo: data.photo,
          title: data.title,
          currency: data.currency,
          changed: data.changed,
          property: data.properties,
        })
      );
      props.history.push('/Items"');
    },
    [dispatch, item.id, data, props.history]
  );

  return (
    <AddChangeItem
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      addProperty={addProperty}
      avaibleProp={avaibleProp}
      choosesProp={choosesProp}
      setPropertyValue={setPropertyValue}
      setPropertyDropdownValue={setPropertyDropdownValue}
      deleteProperty={deleteProperty}
      color={color}
      addDropdown={addDropdown}
      deleteDropdown={deleteDropdown}
      handleImageChange={handleImageChange}
      count={count}
      data={data}
      setData={setData}
      routeChange={routeChange}
    />
  );
};
