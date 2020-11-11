export const deleteItem = (id) => {
  return { type: "DELETE_ITEM", id };
};
export const changeItem = (item) => {
  return { type: "CHANGE_ITEM", item };
};
export const addItem = (item) => {
  return { type: "ADD_ITEM", item };
};
export const sortItems = (sortValue) => {
  return { type: "SORT_ITEMS_BY_PRICE", sortValue };
};
export const showAlert = (text) => {
  return (dispatch) => {
    dispatch({
      type: "SHOW_ALERT",
      payload: text,
    });
    setTimeout(() => {
      dispatch(hideAlert());
    }, 1500);
  };
};
export const hideAlert = () => {
  return { type: "HIDE_ALERT" };
};
