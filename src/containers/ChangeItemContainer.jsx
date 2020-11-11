import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeItem } from "../redux/actions/ItemsAction";
import { AddChangeItem } from "../component/AddChangeItem/AddChangeItem";
import { dateNow } from "../component/utils/Date";

export const ChangeItemContainer = (props) => {
  const [data, setData] = useState({
    name: "",
    price: "",
    title: "",
    photo: "",
    currency: "$",
    changed: dateNow,
    properties: {},
  });

  const dispatch = useDispatch();
  let items = useSelector((state) => state.items.items);
  let userId = props.match.params.userId;
  let item = items.find((item) => item.id === Number(userId));

  let allProp = useSelector((state) => state.properties.properties);
  let edit = "edit";

  useEffect(() => {
    setData((prevState) => ({
      ...prevState,
      properties: item.property,
      name: item.name,
      price: item.price,
      title: item.title,
      photo: item.photo,
    }));
  }, [
    item.name,
    item.photo,
    item.price,
    item.property,
    item.title,
    items,
    props.match.params.userId,
  ]);
  let avaibleProp = allProp.filter(
    (o) => !data.properties.hasOwnProperty(o.id)
  );

  const deleteProperty = (id) => {
    let newProps = { ...data.properties };
    delete newProps[id];
  };
  const addProperty = (e) => {
    let selectedProperty = allProp.find((o) => o.id === Number(e));
    let defaultValue = "";
    if (selectedProperty.type === "Dropdown") {
      defaultValue = [];
    } else if (selectedProperty.type === "Number") {
      defaultValue = 0;
    }
    let newProps = { ...data.properties };
    newProps[e] = defaultValue;
    setData({ ...data, properties: newProps });
  };
  const setPropertyValue = (e, id) => {
    let newProps = { ...data.properties };
    newProps[id] = e;
    setData({ ...data, properties: newProps });
  };
  const setPropertyDropdownValue = (e, id, index) => {
    let newProps = { ...data.properties };
    newProps[id][index] = e;
    setData({ ...data, properties: newProps });
  };
  const addDropdown = (id) => {
    let newProps = { ...data.properties };
    newProps[id].push("");
    setData({ ...data, properties: newProps });
  };
  const deleteDropdown = (index, id) => {
    let newProps = { ...data.properties };
    delete newProps[id][index];
    setData({ ...data, properties: newProps });
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
  const routeChange = () => {
    let path = "/Items";
    props.history.push(path);
  };
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(
        changeItem({
          id: item.id,
          name: data.name,
          price: data.price,
          photo: data.photo,
          title: data.title,
          currency: data.currency,
          changed: data.changed,
          property: data.properties,
        })
      );
      props.history.push("/Items");
    },
    [data, dispatch, item.id, props.history]
  );

  return (
    <AddChangeItem
      handleSubmit={handleSubmit}
      handleImageChange={handleImageChange}
      addProperty={addProperty}
      deleteProperty={deleteProperty}
      avaibleProp={avaibleProp}
      deleteDropdown={deleteDropdown}
      addDropdown={addDropdown}
      allProp={allProp}
      setPropertyValue={setPropertyValue}
      setPropertyDropdownValue={setPropertyDropdownValue}
      edit={edit}
      data={data}
      routeChange={routeChange}
      handleChange={handleChange}
    />
  );
};
