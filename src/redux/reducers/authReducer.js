import {
    LOGIN,
} from "../types/types";

let initialState = {
    auth: false,
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state, auth: true
            };
        default:
            return state;
    }
}
export default authReducer;
