export const ShoppingCartActions = {
    setCart: 'SET_CART',
    setPayment: 'SET_PAYMENT',
    setAddress: 'SET_ADDRESS',
}

const shoppingCartInitial = {
    cart: [],
    payment: {},
    address: {},
};

export const shoppingCartReducer = (state = shoppingCartInitial, action = {}) => {
    switch (action.type) {
        case 'SET_CART':
            return { ...state, cart: action.payload };
        // ⚠️ Diğerleri de gelecek
        default:
            return state;
    }

}