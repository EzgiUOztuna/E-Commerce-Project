import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { clientReducer } from "./reducers/clientReducer";
import { productReducer } from "./reducers/productReducer";
import { shoppingCartReducer } from "./reducers/shoppingCartReducer";
import logger from "redux-logger";

export const reducers = combineReducers({
    clients: clientReducer,
    products: productReducer,
    shoppingCart: shoppingCartReducer,
})

export const store = createStore(reducers, applyMiddleware(logger));