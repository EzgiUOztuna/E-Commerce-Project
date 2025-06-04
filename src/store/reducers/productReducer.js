export const ProductActions = {
    setCategories: 'SET_CATEGORIES',
    setProductList: 'SET_PRODUCT_LIST',
    setTotal: 'SET_TOTAL',
    setFetchState: 'SET_FETCH_STATE',
    setLimit: 'SET_LIMIT',
    setOffset: 'SET_OFFSET',
    setFilter: 'SET_FILTER'
};

const productInitial = {
    categories: [],
    productList: [],
    total: {},
    limit: 25, // 25 by default product count on the page
    offset: 0, // 0 by default for pagination
    filter: '',
    fetchState: 'NOT_FETCHED', // "NOT_FETCHED" by default | one of "NOT_FETCHED", "FETCHING", "FETCHED", "FAILED"
};

export const productReducer = (state = productInitial, action) => {
    switch (action.type) {
        case ProductActions.setCategories:
            return { ...state, categories: action.payload };
        case ProductActions.setProductList:
            return { ...state, productList: action.payload };
        // ⚠️ Diğerleri de gelecek
        default:
            return state;
    }
};