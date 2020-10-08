import React, {useState} from "react";
import s from "./AddItem.module.css";
import {Icon} from "@iconify/react";
import minusCircleOutlined from "@iconify/icons-ant-design/minus-circle-outlined";
import plusCircleOutlined from "@iconify/icons-ant-design/plus-circle-outlined";
import Input from "./Input";
export default (props)=>{
    const [type, setType] = useState(props.type);
    const [count, setCount] = useState([1,2]);
    const addColor=()=>{
        setCount([...count, 1])
    };
    const deleteColor=()=>{
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
            {count.map((n,index) => <Input key={index} setPropertyDropdownValue={props.setPropertyDropdownValue} index={index} id={props.id}/>)}<span><Icon
            icon={minusCircleOutlined} width='30' color="blue" onClick={deleteColor}/></span><br/>
            <span ><Icon icon={plusCircleOutlined} width='30' color="blue" onClick={addColor} /></span>
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
                <input type={'number'} onChange={(e) => props.valueProperty(e.target.value, props.id)}/>
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
                <input type={'text'} onChange={(e) => props.valueProperty(e.target.value,props.id)}/>
            </div>

        </div>
    }
}