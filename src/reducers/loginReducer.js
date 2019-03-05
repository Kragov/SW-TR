const defaultState = {
    login: 'admin',
    password: '1234',
    loginInput: '',
    passwordInput: ''
}

const checkLogin = (state = defaultState, action) => {
    if (action.type === "CHECK_LOGIN") {
        return {...state}
    }

    if (action.type === "LOGIN_INPUT") {
        return { ...state, loginInput: action.payload}
    }

    if (action.type === "PASSWORD_INPUT") {
        return { ...state, passwordInput: action.payload}
    }
    
    return state
}

export default checkLogin