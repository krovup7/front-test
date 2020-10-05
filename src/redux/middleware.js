import {showAlert} from "./actions/ItemsAction";
import {ADD_ITEM, ADD_PROPERTY, CHANGE_ITEM, DELETE_ITEM, DELETE_PROPERTY} from "./types";

export function notificationAlert({dispatch}) {
    return function (next) {
        return function (action) {
            switch (action.type) {
                case DELETE_ITEM:
                    return dispatch(showAlert('Товар успешно удален'));
                case CHANGE_ITEM:
                    return dispatch(showAlert('Товар успешно изменен'));
                case ADD_ITEM:
                    return dispatch(showAlert('Товар успешно добавлен'));
                case DELETE_PROPERTY:
                    return dispatch(showAlert('Свойство удалено'));
                case ADD_PROPERTY:
                    return dispatch(showAlert('Свойство добавлено'));
                default:
                    next(action)
            }
        }
    }
}

