import { SET_CATEGORIES, SET_FETCH_STATE, SET_FILTER, SET_LIMIT, SET_OFFSET, SET_PRODUCT_LIST, SET_TOTAL } from "../actions/productActions";

const productInitial = {
    categories: [], //{Object Array}
    productList: [], //{Object Array}
    total: 0, //{Number} number of total products
    limit: 25, // {Number} | 25 by default product count on the page
    offset: 0, // {Number} | 0 by default for pagination
    filter: '', //{String}
    fetchState: 'NOT_FETCHED', // {String} | "NOT_FETCHED" by default | one of "NOT_FETCHED", "FETCHING", "FETCHED", "FAILED"
};

export const productReducer = (state = productInitial, action = {}) => {
    switch (action.type) {
        case SET_CATEGORIES:
            return { ...state, categories: action.payload };
        case SET_PRODUCT_LIST:
            return { ...state, productList: action.payload };
        case SET_TOTAL:
            return { ...state, total: action.payload };
        case SET_LIMIT:
            return { ...state, limit: action.payload };
        case SET_OFFSET:
            return { ...state, offset: action.payload };
        case SET_FILTER:
            return { ...state, filter: action.payload };
        case SET_FETCH_STATE: {
            const validStates = ["NOT_FETCHED", "FETCHING", "FETCHED", "FAILED"];
            return validStates.includes(action.payload)
                ? { ...state, fetchState: action.payload }
                : state;
        }
        default:
            return state;
    }
};