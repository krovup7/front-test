import React, {useState} from "react";
import s from "./AddItem.module.css";
import {Icon} from "@iconify/react";
import minusCircleOutlined from "@iconify/icons-ant-design/minus-circle-outlined";
import plusCircleOutlined from "@iconify/icons-ant-design/plus-circle-outlined";
export default (props)=>{
    const [type, setType] = useState(props.type);
    if(type==='Dropdown')
    return <div className={s.prop}>
        <div className={s.propNum}>
            <p><span><Icon icon={minusCircleOutlined} color="blue" width='30'/></span> Свойство 1
            </p>
            <input type={'text'} value={'Цвет авто'}/>
        </div>
        <div className={s.propVal}>
            <p>Значение</p>
            <input type={'text'} onChange={(e) => props.setPropertyDropdownValue(e.target.value, props.id, props.index)}/>
            <input type={'text'} /> <span><Icon
            icon={minusCircleOutlined} width='30' color="blue"/></span><br/>
            <span ><Icon icon={plusCircleOutlined} width='30' color="blue"  /></span>
        </div>
    </div>
    else if(type==='Number'){
        return <div className={s.prop}>
            <div className={s.propNum}>
                <p><span><Icon icon={minusCircleOutlined} width='30' color="blue"/></span> Свойство 2
                </p>
                <input type={'text'} value={'Год выпуска'}/>
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
                <p><span><Icon icon={minusCircleOutlined} width='30' color="blue"/></span> Свойство 3
                </p>
                <input type={'text'} value={'Тип топлива'}/>
            </div>
            <div className={s.propVal}>
                <p>Значение</p>
                <input type={'text'} onChange={(e) => props.valueProperty(e.target.value,props.id)}/>
            </div>

        </div>
    }
}