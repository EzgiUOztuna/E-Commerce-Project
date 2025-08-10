export const SET_USER = 'set_user';
export const SET_ROLES = 'set_roles';
export const SET_THEME = 'set_theme';
export const SET_LANGUAGE = 'set_language';

//ACTION CREATOR FUNCTIONS ⤵️
export function setUser(user) { //user yerine newUser gibi şeyler de yazabilirim.
    return { type: SET_USER, payload: user };
}

export function setRoles(role) { //export const setRoles = (role) => { return ...}
    return {
        type: SET_ROLES,
        payload: role
    };
}
/*
export const getRolesActions = () => (dispatch, getState) => {
    axios
        .get("https://....")
        .then((res) => {
            dispatch(setRoles(res.data));
        });
    };
    //Sprint10_3 23.dk 👌🏻
*/

export function setTheme(value) {
    return {
        type: SET_THEME,
        payload: value
    };
}

export function setLanguage(value) {
    return {
        type: SET_LANGUAGE,
        payload: value
    };
}
