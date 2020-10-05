import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { deleteProperty} from "../../redux/actions/ItemsAction";
import AllProperty from "./AllProperty";
import {Redirect} from "react-router-dom";

export default () => {
    let auth = useSelector(state => state.items.auth)
    let properties = useSelector(state => state.items.properties)
    const dispatch = useDispatch();
    if(!auth){
        return <Redirect to={'/Login'}/>
    }
    return (<AllProperty deleteProperty={deleteProperty} properties={properties}/>)
}
