import { SET_ROLES, SET_USER } from "../actions/clientActions";

const clientInitial = {
    user: {}, //{Object}
    addressList: [], //{Object Array}
    creditCards: [], //{Object Array}
    roles: [], //{Object Array}
    theme: '', //{String}
    language: '', //{String}
}

export const clientReducer = (state = clientInitial, action = {}) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload
            };
        case SET_ROLES:
            return {
                ...state,
                roles: action.payload
            };
        // ⚠️ Diğerleri de gelecek
        default:
            return state;
    }
}