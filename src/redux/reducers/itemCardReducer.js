import { GET_ITEM } from "../types/types";

let initialState = {
  item: {},
  properties: [],
};
export const itemCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEM:
      return {
        ...state,
        item: action.item,
        properties: action.properties,
      };
    default:
      return state;
  }
};
