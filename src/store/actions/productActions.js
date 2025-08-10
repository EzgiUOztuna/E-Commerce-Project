/*
export const ProductActions = {
    setCategories: 'SET_CATEGORIES',
    setProductList: 'SET_PRODUCT_LIST',
    setTotal: 'SET_TOTAL',
    setFetchState: 'SET_FETCH_STATE',
    setLimit: 'SET_LIMIT',
    setOffset: 'SET_OFFSET',
    setFilter: 'SET_FILTER'
};
*/

export const SET_CATEGORIES = 'setCategories';
export const SET_PRODUCT_LIST = 'setProductList';
export const SET_TOTAL = 'setTotal';
export const SET_LIMIT = 'setLimit';
export const SET_OFFSET = 'setOffset';
export const SET_FILTER = 'setFilter';
export const SET_FETCH_STATE = 'setFetchState';


export function setCategories(value) {
    return { type: SET_CATEGORIES, payload: value };
}

// {String} | "NOT_FETCHED" by default | one of "NOT_FETCHED", "FETCHING", "FETCHED", "FAILED"
export function setFetchState(value) {
    return { type: SET_FETCH_STATE, payload: value };
}