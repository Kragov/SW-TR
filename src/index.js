import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './rootReducer'


import './index.css';
import App from './components/App'

// const initialState = {
//     search: '',
//     condition: false,
//     changeSearch: (e) => {
//         this.setState({search: e.target.value})
//         console.log(e.target.value)
//     }
// }

// function search (state = initialState, action) {
//     if (action.type === 'searchResults') {
//         return {
//             ...state,
//             search: action.search
//         }
//     } else if (action.type === 'changeCondition') {
//         return {
//             ...state,
//             condition: action.condition
//         }
//     }
//     return state
// }


const store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__())

store.subscribe( () => {
    console.log('subscribe', store.getState())
})

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)