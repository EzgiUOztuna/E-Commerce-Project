import { combineReducers, legacy_createStore as createStore } from "redux";
import { clientReducer } from "./reducers/clientReducer";
import { productReducer } from "./reducers/productReducer";

export const reducers = combineReducers({
    clients: clientReducer,
    products: productReducer,
})

export const store = createStore(reducers);