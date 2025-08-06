/*
export const ClientActions = {
    setUser: 'SET_USER',
    setRoles: 'SET_ROLES',
    setTheme: 'SET_THEME',
    setLanguage: 'SET_LANGUAGE',
};
*/

export const SET_USER = 'setUser';
export const SET_ROLES = 'setRoles';
export const SET_THEME = 'setTheme';
export const SET_LANGUAGE = 'setLanguage';

export function setUser(value) {
    return { type: SET_USER, payload: value };
}

export function setRoles(value) {
    return { type: SET_ROLES, payload: value };
}

export function setTheme(value) {
    return { type: SET_THEME, payload: value };
}

export function setLanguage(value) {
    return { type: SET_LANGUAGE, payload: value };
}