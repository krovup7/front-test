export const deleteItem = (id) => {
    return {type: "DELETE_ITEM", id}
};
export const changeItem = (item) => {
    return {type: "CHANGE_ITEM", item}
};
export const addItem = (item) => {
    return {type: "ADD_ITEM", item}
};
export const deleteProperty = (id) => {
    return {type: "DELETE_PROPERTY", id}
};
export const addProperty = (property) => {
    return {type: "ADD_PROPERTY", property}
};
export const sortItems = (sortValue) => {
    return {type: "SORT_ITEMS_BY_PRICE", sortValue}
};
export const showAlert = (text) => {
    return dispatch => {
        dispatch({
            type: "SHOW_ALERT",
            payload: text
        })
        setTimeout(() => {
            dispatch(hideAlert())
        }, 3000)
    }
};
export const hideAlert = () => {
    return {type: "HIDE_ALERT",}
};
export const login = (data) => {
    return {type: "LOGIN", data}
};
