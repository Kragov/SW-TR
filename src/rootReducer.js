import { combineReducers } from 'redux'

import checkLogin from './reducers/loginReducer'
import condition from './reducers/conditionReducer'
import products from './reducers/projectsReducer'

const rootReducer = combineReducers({
    checkLogin,
    condition,
    products
})

export default rootReducer