import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ItemCard } from "../component/ItemCard/ItemCard";
import { getItem } from "../redux/actions/ItemCardAction";

export const ItemCardContainer = (props) => {
  const dispatch = useDispatch();
  let items = useSelector((state) => state.items.items);
  let allProp = useSelector((state) => state.properties.properties);
  let itemId = props.match.params.itemId;
  if (!itemId) {
    itemId = 1;
  }
  let itemUrl = items.find((item) => item.id === Number(itemId));
  let listProperty = [];
  for (let key in itemUrl.property) {
    listProperty.push({
      id: key,
      value: itemUrl.property[key],
      name: allProp.find((p) => p.id === Number(key)).name,
      type: allProp.find((p) => p.id === Number(key)).type,
    });
  }
  // Как-будто получил данные с сервера по идентификатору в роуте
  dispatch(getItem(itemUrl, listProperty));
  //Положил их в стейт
  let item = useSelector((state) => state.card.item);
  let properties = useSelector((state) => state.card.properties);
  //Взял селектором и передал компоненте
  return <ItemCard item={item} listProperty={properties} />;
};
