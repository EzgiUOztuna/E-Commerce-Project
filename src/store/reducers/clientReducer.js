export const ClientActions = {
    setUser: 'SET_USER',
    setRoles: 'SET_ROLES',
    setTheme: 'SET_THEME',
    setLanguage: 'SET_LANGUAGE',
};

const clientInitial = {
    user: {},
    addressList: [],
    creditCards: [],
    roles: [],
    theme: '',
    language: '',
}

export const clientReducer = (state = clientInitial, action = {}) => {
    switch (action.type) {
        case ClientActions.setUser:
            return { ...state, user: action.payload };
        case ClientActions.setRoles:
            return { ...state, roles: action.payload };
        // ⚠️ Diğerleri de gelecek
        default:
            return state;
    }
}