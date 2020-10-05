import React, {useEffect, useState} from "react";
import { Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {changeItem} from "../../redux/actions/ItemsAction";
import {dateNow} from "../utils/Date";
import {withRouter} from "react-router-dom";
import ChangeItem from "./ChangeItem";


const ChangeItemContainer = (props) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [photo, setPhoto] = useState('');
    const [title, setTitle] = useState('');
    const [currency, setCurrency] = useState('$');
    const [changed, setChanged] = useState(dateNow);
    const [redirect, setRedirect] = useState(false);
    const [color, setColor] = useState([]);
    const [color1, setColor1] = useState('');
    const [color2, setColor2] = useState('');
    const [year, setYear] = useState('');
    const [fuel, setFuel] = useState("");
    const dispatch = useDispatch();
    let items = useSelector(state => state.items.items)
    let userId = props.match.params.userId
    let item = items.find(item => item.id == userId)
    let auth = useSelector(state => state.items.auth)

    useEffect(() => {
        setName(item.name)
        setPrice(item.price)
        setPhoto(item.photo)
        setCurrency(item.currency)
        setColor1(item.property.color[0])
        setColor2(item.property.color[1])
        setYear(item.property.year)
        setFuel(item.property.fuel)
        setTitle(item.title)

    }, [userId]);


    const handleImageChange = (e) => {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            setPhoto(reader.result)
        }
        reader.readAsDataURL(file)
    };
    const handleSubmit = (e) => {
        color.push(color1, color2)
        e.preventDefault();
        setRedirect(true)
        dispatch(
            changeItem({
                id: item.id,
                name,
                price: Number(price),
                photo,
                title,
                currency,
                changed,
                property: {
                    color: color,
                    year,
                    fuel
                }


            })
        );
    };
if(!auth){
    return <Redirect to={'/Login'}/>
}
    return (redirect ? <Redirect to={'/'}/>
        : <ChangeItem handleSubmit={handleSubmit} name={name} setName={setName} price={price} setPrice={setPrice}
                      handleImageChange={handleImageChange} title={title} setTitle={setTitle} color1={color1}
                      setColor1={setColor1} color2={color2} setColor1={setColor1} year={year} setYear={setYear}fuel={fuel} setFuel={setFuel} />)
}
const WRChangeItem = withRouter(ChangeItemContainer)
export default WRChangeItem