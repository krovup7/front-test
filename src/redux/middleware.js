import {showAlert} from "./actions/ItemsAction";
import {ADD_ITEM, CHANGE_ITEM, DELETE_ITEM, DELETE_PROPERTY} from "./types";

export function notificationAlert({dispatch}){
    return function (next){
        return function (action){
            if(action.type===DELETE_ITEM){
                dispatch(showAlert('Товар успешно удален'))
            }
            else if (action.type===CHANGE_ITEM){
                dispatch(showAlert('Товар успешно изменен'))
            }
            else if (action.type===ADD_ITEM){
                dispatch(showAlert('Товар успешно добавлен'))
            }
            else if (action.type===DELETE_PROPERTY){
                dispatch(showAlert('Свойство удалено'))
            }
            return next(action)
        }
    }
}