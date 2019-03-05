import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './rootReducer'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './components/Login/Login'

import './index.css';
import App from './components/App'

const store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__())

store.subscribe( () => {
    console.log('subscribe', store.getState())
})

ReactDOM.render(
    <Provider store={store}>
        {/* <App /> */}
        <Router>
            <>
            <Route exact path='/' component={Login} />
            <Route path='/home' component={App} />
            </>
        </Router>
    </Provider>,
    document.getElementById('root')
)