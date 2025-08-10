import { SET_ADDRESS, SET_CART, SET_PAYMENT } from "../actions/shoppingCartActions";

const shoppingCartInitial = {
    cart: [],
    payment: {},
    address: {},
};

export const shoppingCartReducer = (state = shoppingCartInitial, action = {}) => {
    switch (action.type) {
        case SET_CART:
            return { ...state, cart: action.payload };
        case SET_PAYMENT:
            return { ...state, payment: action.payload };
        case SET_ADDRESS:
            return { ...state, address: action.payload };
        default:
            return state;
    }

}