import React from "react";
import {useSelector} from "react-redux";
import { deleteProperty} from "../../redux/actions/ItemsAction";
import AllProperty from "./AllProperty";
import {Redirect} from "react-router-dom";
import {useDispatch} from "react-redux";

export default () => {
    const dispatch = useDispatch();
    let auth = useSelector(state => state.items.auth)
    let properties = useSelector(state => state.items.properties)
    const deleteProp=(id)=>{
        dispatch(deleteProperty(id))
    };
    if(!auth){
        return <Redirect to={'/Login'}/>
    }
    return (<AllProperty deleteProperty={deleteProp} properties={properties}/>)
}
