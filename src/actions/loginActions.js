export const loginInputChange = (login) => {
    return {type: 'LOGIN_INPUT', payload: login}
}

export const passwordInputChange = (password) => {
    return {type: 'PASSWORD_INPUT', payload: password}
}