import React from "react";
import {Icon} from "@iconify/react";
import minusCircleOutlined from "@iconify/icons-ant-design/minus-circle-outlined";
export default (props)=>{

    return <div>
        <input type={"text"} onChange={(e) => props.setPropertyDropdownValue(e.target.value, props.id, props.index)} value={props.value}/><span><Icon
        icon={minusCircleOutlined} width='30' color="blue" onClick={()=>{props.deleteDropdown(props.index,props.id)}}/></span>

    </div>
}
