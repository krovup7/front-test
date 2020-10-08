import React, {useState} from "react";
import s from "./ChangeItem.module.css";
import {Icon} from "@iconify/react";
import minusCircleOutlined from "@iconify/icons-ant-design/minus-circle-outlined";
import plusCircleOutlined from "@iconify/icons-ant-design/plus-circle-outlined";
import InputChange from "./InputChange";
export default (props)=>{
    const [type, setType] = useState(props.type);
    const [count, setCount] = useState([1,2]);
    const addDropdown=()=>{
        setCount([...count, 1])
    };
    const deleteDropdown=()=>{
        setCount(count.slice(0, -1))
    }
    if(type==='Dropdown')
        return <div className={s.prop}>
            <div className={s.propNum}>
                <p><span><Icon icon={minusCircleOutlined} color="blue" width='30' onClick={()=>{props.deleteProperty(props.id)}}/></span> Свойство
                </p>
                <input type={'text'} value={props.name}/>
            </div>
            <div className={s.propVal}>
                <p>Значение</p>
                {props.value.map((n,index) => <InputChange key={index} setPropertyDropdownValue={props.setPropertyDropdownValue} index={index} id={props.id} value={n}/>)}<span><Icon
                icon={minusCircleOutlined} width='30' color="blue" onClick={deleteDropdown}/></span><br/>
                <span ><Icon icon={plusCircleOutlined} width='30' color="blue" onClick={addDropdown} /></span>
            </div>
        </div>
    else if(type==='Number'){
        return <div className={s.prop}>
            <div className={s.propNum}>
                <p><span><Icon icon={minusCircleOutlined} width='30' color="blue" onClick={()=>{props.deleteProperty(props.id)}}/></span> Свойство
                </p>
                <input type={'text'} value={props.name}/>
            </div>
            <div className={s.propVal}>
                <p>Значение</p>
                <input type={'number'} onChange={(e) => props.setPropertyValue(e.target.value, props.id)} value={props.value}/>
            </div>

        </div>
    }
    else if(type==='String'){
        return <div className={s.prop}>
            <div className={s.propNum}>
                <p><span><Icon icon={minusCircleOutlined} width='30' color="blue" onClick={()=>{props.deleteProperty(props.id)}}/></span> Свойство
                </p>
                <input type={'text'} value={props.name}/>
            </div>
            <div className={s.propVal}>
                <p>Значение</p>
                <input type={'text'} onChange={(e) => props.setPropertyValue(e.target.value,props.id)} value={props.value}/>
            </div>

        </div>
    }
}