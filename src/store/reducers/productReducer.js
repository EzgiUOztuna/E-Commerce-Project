import { SET_CATEGORIES, SET_PRODUCT_LIST } from "../actions/productActions";

const productInitial = {
    categories: [],
    productList: [],
    total: {},
    limit: 25, // 25 by default product count on the page
    offset: 0, // 0 by default for pagination
    filter: '',
    fetchState: 'NOT_FETCHED', // "NOT_FETCHED" by default | one of "NOT_FETCHED", "FETCHING", "FETCHED", "FAILED"
};

export const productReducer = (state = productInitial, action = {}) => {
    switch (action.type) {
        case SET_CATEGORIES:
            return { ...state, categories: action.payload };
        case SET_PRODUCT_LIST:
            return { ...state, productList: action.payload };
        // ⚠️ Diğerleri de gelecek
        default:
            return state;
    }
};