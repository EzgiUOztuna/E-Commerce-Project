import { combineReducers, legacy_createStore as createStore } from "redux";
import { clientReducer } from "./reducers/clientReducer";
import { productReducer } from "./reducers/productReducer";
import { shoppingCartReducer } from "./reducers/shoppingCartReducer";

export const reducers = combineReducers({
    clients: clientReducer,
    products: productReducer,
    shoppingCart: shoppingCartReducer,
})

export const store = createStore(reducers);