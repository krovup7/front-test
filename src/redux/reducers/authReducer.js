import { LOGIN } from "../types/types";

let initialState = {
  auth: false,
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        auth: true,
      };
    default:
      return state;
  }
};
