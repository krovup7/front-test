import { combineReducers } from "redux";
import { itemsReducer } from "./reducers/itemsReducer";
import { propertiesReducer } from "./reducers/propertiesReducer";
import { authReducer } from "./reducers/authReducer";
import { itemCardReducer } from "./reducers/itemCardReducer";
export const rootReducer = combineReducers({
  items: itemsReducer,
  properties: propertiesReducer,
  auth: authReducer,
  card: itemCardReducer,
});
