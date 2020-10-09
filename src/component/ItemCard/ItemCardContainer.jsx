import React from "react";
import {withRouter} from "react-router-dom";
import {useSelector} from "react-redux";
import {ItemCard} from "./ItemCard";

const ItemCardContainer = (props) => {
    let items = useSelector(state => state.items.items)
    let allProp = useSelector(state => state.items.properties)
    let userId = props.match.params.userId
    if (!userId) {
        userId = 1
    }
    let item = items.find(item => item.id == userId)
    let listProperty = []
    for (let key in item.property) {
        listProperty.push({
            id: key,
            value: item.property[key],
            name: allProp.find(p => p.id === Number(key)).name,
            type: allProp.find(p => p.id === Number(key)).type,
        })
    }
    return (<ItemCard item={item} listProperty={listProperty}/>
    )
}
const WRItemCard = withRouter(ItemCardContainer)
export default WRItemCard
