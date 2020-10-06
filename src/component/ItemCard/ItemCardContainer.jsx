import React from "react";
import {withRouter} from "react-router-dom";
import {useSelector} from "react-redux";
import ItemCard from "./ItemCard";

const ItemCardContainer = (props) => {
    let items = useSelector(state => state.items.items)
    let userId = props.match.params.userId
    if (!userId) {
         userId = 1
    }
    let item = items.find(item => item.id == userId)

    return (<ItemCard item={item}/>
    )
}
const WRItemCard = withRouter(ItemCardContainer)
export default WRItemCard
