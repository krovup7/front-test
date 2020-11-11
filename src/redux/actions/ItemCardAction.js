export const getItem = (item, properties) => {
  return { type: "GET_ITEM", item, properties };
};
