import React from "react";
import {useSelector} from "react-redux";
import { deleteProperty} from "../../redux/actions/ItemsAction";
import {AllProperty} from "./AllProperty";
import {useDispatch} from "react-redux";

export const AllPropertyContainer = () => {
    const dispatch = useDispatch();
    let properties = useSelector(state => state.items.properties)
    const deleteProp=(id)=>{
        dispatch(deleteProperty(id))
    };
    return (<AllProperty deleteProperty={deleteProp} properties={properties}/>)
}
