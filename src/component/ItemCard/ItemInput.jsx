import React, {useState} from "react";

export default (props) => {
    const [type, setType] = useState(props.type);
    if (type === 'Dropdown') {
        return <div>
            <h4>{props.name}</h4>
            <select size="1">
                {props.value.map((v, index) =>
                    <option key={index} value="0">{v}</option>
                )}
            </select>
        </div>
    } else if (type === 'Number') {
        return <div>
            <h4>{props.name}</h4>
            <p>{props.value}</p>
        </div>
    }
    else if (type === 'String') {
        return <div>
            <h4>{props.name}</h4>
            <p>{props.value}</p>
        </div>
    }

}