import React from "react";
export default (props)=>{
    return <input type={"text"} onChange={(e) => props.setPropertyDropdownValue(e.target.value, props.id, props.index)}/>
}