import { combineReducers } from 'redux'

import condition from './reducers/conditionReducer'
import search from './reducers/searchResult'

const rootReducer = combineReducers({
    condition,
    search
})

export default rootReducer