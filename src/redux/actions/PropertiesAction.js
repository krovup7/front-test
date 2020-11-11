export const deleteProperty = (id) => {
  return { type: "DELETE_PROPERTY", id };
};
export const addProperty = (property) => {
  return { type: "ADD_PROPERTY", property };
};
