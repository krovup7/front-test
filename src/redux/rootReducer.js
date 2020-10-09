import {combineReducers} from "redux";
import itemsReducer from "./reducers/itemsReducer";
export const rootReducer = combineReducers({
    items:itemsReducer,
})