const defaultState = {
    search: ''
}

const searchResults = (state = defaultState, action) => {
    if (action.type === 'CHANGE_SEARCH') {
        return { ...state, search: action.payload}
    }

    return state;
}

export default searchResults