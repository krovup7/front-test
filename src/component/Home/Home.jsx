import React, {useEffect, useState} from "react";
import s from './Home.module.css'
import {useDispatch, useSelector} from "react-redux";
import {changeItem, deleteItem, showAlert, sortItems} from '../../redux/actions/ItemsAction';
import Alert from "../utils/Alert/Alert";
import {Redirect} from "react-router-dom";
import {dateNow} from "../utils/Date";


export default () => {
    const [id, setId] = useState('');
    let items = useSelector(state => state)
    let alert = useSelector(state => state.items.alert)
    let auth = useSelector(state => state.items.auth)

    // let item = items.items.items.find(item => item.id === id)
    const [modalVisible, setModalVisible] = useState(false);
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [currency, setCurrency] = useState('');
    const [search, setSearch] = useState('');
    const [photo, setPhoto] = useState('');
    const [imageCPreviewUrl, setImageCPreviewUrl] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        setFilteredItems(items.items.items.filter(item => {
            return item.title.toLowerCase().includes(search.toLowerCase())
        }))
    }, [search, items]);

    console.log(dateNow)


    const openModal = (item) => {
        setModalVisible(true);
        setId(item.id)
        setTitle(item.title)
        setPrice(item.price)
        setPrice(item.price)
        setCurrency(item.currency)


    };
    const handleSubmit = (e) => {
        setModalVisible(false);
        e.preventDefault();
        dispatch(
            changeItem({
                id: id,
                title,
                price,
                currency

            })
        );
    };
    const handleImageChange=(e)=> {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            setPhoto(reader.result)

        }
        reader.readAsDataURL(file)
    }



    return  <div>
                <input type={'text'} placeholder={'search'} onChange={e => setSearch(e.target.value)}/>
                <select name="sortOrder"  >
                    <option >Цена</option>
                    <option value="lowest">Сначала дешевые</option>
                    <option value="highest">Сначала дорогие</option>
                </select>
                <table>
                    <thead>
                    <tr>
                        <th>Перечень товаров</th>
                        <th>Стоимость</th>
                        <th>Дата изменения</th>
                        <th></th>
                    </tr>
                    </thead>

                    {
                        filteredItems.map((item,) => <tbody key={item.id}>
                        <tr className={s.productInfo}>
                            {/*<td>{item.title}</td>*/}
                            <td>{item.price.toLocaleString('ru')}{item.currency}</td>
                            <td>
                                <button
                                    onClick={() => dispatch(deleteItem(item.id))}
                                    className="btn red"
                                >
                                    Delete
                                </button>
                                <button
                                    onClick={() => openModal({id: item.id, title: item.title, price: item.price, currency:item.currency})}
                                    className="btn red"
                                >
                                    Edite
                                </button>

                            </td>

                        </tr>

                        </tbody>)
                    }
                    <thead>
                    <tr>
                        <td align={"right"} colSpan="5">ИТОГО</td>


                    </tr>
                    </thead>
                </table>
        <input type="file" onChange={handleImageChange}/>
        <img src={photo}/>
                {modalVisible ? <div className="form">
                        <form onSubmit={handleSubmit}>
                            <ul className="form-container">
                                <li>
                                    <label>Name
                                        <input type={'text'} value={title}
                                               onChange={(e) => setTitle(e.target.value)}
                                        /></label>
                                </li>
                                <li>
                                    <label>Price
                                        <input
                                            type="text"
                                            name="price"
                                            value={price}
                                            id="price"
                                            onChange={(e) => setPrice(e.target.value)}
                                        /></label>
                                </li>
                                {/*<li>*/}
                                {/*    <label htmlFor="image">Image</label>*/}
                                {/*    <input*/}
                                {/*        type="text"*/}
                                {/*        name="image"*/}
                                {/*        value={image}*/}
                                {/*        id="image"*/}
                                {/*        onChange={(e) => setImage(e.target.value)}*/}
                                {/*    ></input>*/}
                                {/*    <input type="file" onChange={uploadFileHandler}></input>*/}

                                {/*</li>*/}

                                <li>
                                    <button type="submit" className="button primary">
                                        'Update'
                                    </button>
                                </li>

                            </ul>


                        </form>
                    </div>
                    : null}

            </div>




}
