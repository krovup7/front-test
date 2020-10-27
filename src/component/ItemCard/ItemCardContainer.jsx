import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {ItemCard} from "./ItemCard";
import {getItem} from "../../redux/actions/ItemsAction";

export const ItemCardContainer = (props) => {
    const dispatch = useDispatch();
    let items = useSelector(state => state.items.items)
    let allProp = useSelector(state => state.properties.properties)
    let userId = props.match.params.userId
    if (!userId) {
        userId = 1
    }
    let i = items.find(item => item.id == userId)
    let listProperty = []
    for (let key in i.property) {
        listProperty.push({
            id: key,
            value: i.property[key],
            name: allProp.find(p => p.id === Number(key)).name,
            type: allProp.find(p => p.id === Number(key)).type,
        })
    }
    // Как-будто получил данные с сервера по идентификатору в роуте
    dispatch(getItem(i, listProperty))
    //Положил их в стейт
    let item = useSelector(state => state.card.item)
    let properties = useSelector(state => state.card.properties)
    //Взял селектором и передал компоненте
    return (<ItemCard item={item} listProperty={properties}/>
    )
}

