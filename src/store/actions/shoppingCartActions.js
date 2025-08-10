/*
export const ShoppingCartActions = {
    setCart: 'SET_CART',
    setPayment: 'SET_PAYMENT',
    setAddress: 'SET_ADDRESS',
}
*/

export const SET_CART = 'setCart';
export const SET_PAYMENT = 'setPayment';
export const SET_ADDRESS = 'setAddress';

export function setCart(value) {
    return {
        type: 'SET_CART',
        payload: value
    };
}