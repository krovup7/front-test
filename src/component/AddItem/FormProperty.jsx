import React, {useState} from "react";
import s from "./AddItem.module.css";
import {Icon} from "@iconify/react";
import minusCircleOutlined from "@iconify/icons-ant-design/minus-circle-outlined";
import plusCircleOutlined from "@iconify/icons-ant-design/plus-circle-outlined";
import {Input} from "./Input";

export const FormProperty = (props)=>{
    const [type, setType] = useState(props.type);

    if(type==='Dropdown')
    return <div className={s.property}>
        <div className={s.propNum}>
            <p><span><Icon icon={minusCircleOutlined} color="blue" width='30' onClick={()=>{props.deleteProperty(props.id)}}/></span> Свойство
            </p>
            <input type={'text'} value={props.name} readOnly/>
        </div>
        <div className={s.propValue}>
            <p>Значение</p>
            {props.count.map((n,index) => <Input key={index} setPropertyDropdownValue={props.setPropertyDropdownValue} index={index} id={props.id}/>)}<span><Icon
            icon={minusCircleOutlined} width='30' color="blue" onClick={props.deleteDropdown}/></span><br/>
            <span ><Icon icon={plusCircleOutlined} width='30' color="blue" onClick={props.addDropdown} /></span>
        </div>
    </div>
    else if(type==='Number'){
        return <div className={s.property}>
            <div className={s.propNum}>
                <p><span><Icon icon={minusCircleOutlined} width='30' color="blue" onClick={()=>{props.deleteProperty(props.id)}}/></span> Свойство
                </p>
                <input type={'text'} value={props.name} readOnly/>
            </div>
            <div className={s.propValue}>
                <p>Значение</p>
                <input type={'number'} onChange={(e) => props.valueProperty(e.target.value, props.id)}/>
            </div>

        </div>
    }
    else if(type==='String'){
        return <div className={s.property}>
            <div className={s.propNum}>
                <p><span><Icon icon={minusCircleOutlined} width='30' color="blue" onClick={()=>{props.deleteProperty(props.id)}}/></span> Свойство
                </p>
                <input type={'text'} value={props.name} readOnly/>
            </div>
            <div className={s.propValue}>
                <p>Значение</p>
                <input type={'text'} onChange={(e) => props.valueProperty(e.target.value,props.id)}/>
            </div>

        </div>
    }
}