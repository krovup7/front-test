// import React from "react";
// import s from './ChangeItem.module.css'
// import {Icon} from '@iconify/react';
// import uploadIcon from '@iconify/icons-fa-solid/upload';
// import minusCircleOutlined from '@iconify/icons-ant-design/minus-circle-outlined';
// import plusCircleOutlined from '@iconify/icons-ant-design/plus-circle-outlined';
// import {NavLink} from "react-router-dom";
//
// const ChangeItem = (props) => {
//     return (<div className={s.AddContent}>
//         <div className={s.AddMain}>
//             <div>
//                 <div>
//                     <NavLink to={'/'} className={s.back}>Вернуться</NavLink>
//                 </div>
//                 <div>
//                     <NavLink to={'/'} className={s.change} onClick={props.handleSubmit}>Изменить</NavLink>
//                 </div>
//             </div>
//             <form>
//                 <div className={s.productDetale}>
//                     <h4>Добавление товара</h4>
//                     <p>Название товара<span style={{color: "red"}}>*</span></p>
//                     <input type={'text'} value={props.name} onChange={(e) => props.setName(e.target.value)}/>
//                     <p>Стоимость товара<span style={{color: "red"}}>*</span></p>
//                     <input type={'number'} value={props.price} onChange={(e) => props.setPrice(e.target.value)}/>
//                     <p>Изображение<span style={{color: "red"}}>*</span></p>
//                     <div className={s.uploadFile}><label>
//                         <input type="file" onChange={props.handleImageChange}/>
//                         <p>image <span><Icon icon={uploadIcon} color="blue" width="20"/></span></p>
//                     </label></div>
//                     <p>Описание</p>
//                     <textarea value={props.title} onChange={(e) => props.setTitle(e.target.value)}/>
//                 </div>
//                 <div className={s.propert}>
//                <span><h4>
//                     Добавление товару свойств <span><Icon icon={plusCircleOutlined} width='30' color="blue"/></span>
//                 </h4></span>
//                     <div className={s.properties}>
//                         <div className={s.propertyNumber}>
//                             <p><span><Icon icon={minusCircleOutlined} color="blue" width='30'/></span> Свойство 1
//                             </p>
//                             <input type={'text'} value={'Цвет авто'}/>
//                         </div>
//                         <div className={s.propertyValue}>
//                             <p>Значение</p>
//                             {/*{color.map((c,index)=><input key={index}rtype={'text'} value={c} onChange={(e) => changeColor(e.target.value)}/>*/}
//                             {/*)*/}
//
//                             {/*}*/}
//                             <input type={'text'} value={props.color1}
//                                    onChange={(e) => props.setColor1(e.target.value)}/>
//                             <input type={'text'} value={props.color2}
//                                    onChange={(e) => props.setColor2(e.target.value)}/><span><Icon
//                             icon={minusCircleOutlined} width='30' color="blue"/></span><br/>
//                             <span><Icon icon={plusCircleOutlined} width='30' color="blue"/></span>
//                         </div>
//                     </div>
//                     <div className={s.properties}>
//                         <div className={s.propertyNumber}>
//                             <p><span><Icon icon={minusCircleOutlined} width='30' color="blue"/></span> Свойство 2
//                             </p>
//                             <input type={'text'} value={'Год выпуска'}/>
//                         </div>
//                         <div className={s.propertyValue}>
//                             <p>Значение</p>
//                             <input type={'number'} value={props.year} onChange={(e) => props.setYear(e.target.value)}/>
//                         </div>
//                     </div>
//                     <div className={s.properties}>
//                         <div className={s.propertyNumber}>
//                             <p><span><Icon icon={minusCircleOutlined} width='30' color="blue"/></span> Свойство 3
//                             </p>
//                             <input type={'text'} value={'Тип топлива'}/>
//                         </div>
//                         <div className={s.propertyValue}>
//                             <p>Значение</p>
//                             <input type={'text'} value={props.fuel} onChange={(e) => props.setFuel(e.target.value)}/>
//                         </div>
//                     </div>
//                 </div>
//             </form>
//         </div>
//     </div>)
// }
// export default ChangeItem