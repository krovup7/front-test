import React from "react";
import s from './Alert.module.css'

export const Alert = ({text}) => {
    return(
<div className={s.alert}><p>{text}</p></div>
    )
}
