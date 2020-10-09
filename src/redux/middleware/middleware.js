import {showAlert} from "../actions/ItemsAction";
import {ADD_ITEM, ADD_PROPERTY, CHANGE_ITEM, DELETE_ITEM, DELETE_PROPERTY} from "../types/types";

export function notificationAlert({dispatch}) {
    return function (next) {
        return function (action) {
            switch (action.type) {
                case DELETE_ITEM:
                     dispatch(showAlert('Товар успешно удален'));
                     break
                case CHANGE_ITEM:
                     dispatch(showAlert('Товар успешно изменен'));
                     break
                case ADD_ITEM:
                     dispatch(showAlert('Товар успешно добавлен'));
                     break
                case DELETE_PROPERTY:
                     dispatch(showAlert('Свойство удалено'));
                     break
                case ADD_PROPERTY:
                     dispatch(showAlert('Свойство добавлено'));
                     break
            }
            next(action)
        }
    }
}

