import { SET_CART } from "../actions/shoppingCartActions";

const shoppingCartInitial = {
    cart: [],
    payment: {},
    address: {},
};

export const shoppingCartReducer = (state = shoppingCartInitial, action = {}) => {
    switch (action.type) {
        case SET_CART:
            return { ...state, cart: action.payload };
        // ⚠️ Diğerleri de gelecek
        default:
            return state;
    }

}