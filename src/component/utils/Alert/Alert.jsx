import React from "react";
import s from './Alert.module.css'
export default({text})=>{
    return(
<div className={s.alert}><p>{text}</p></div>
    )
}
