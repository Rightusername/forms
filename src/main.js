import React from "react"
import ReactDOM from "react-dom"
import FormsList from "./components/FormsList/FormsList.jsx"
import Form from "./components/Form/Form.jsx"
import { Link } from 'react-router';

import { createStore, combineReducers, applyMiddleware, compose} from 'redux'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history';

import { Router, Route, hashHistory, browserHistory } from 'react-router';

import { ConnectedRouter, routerReducer, routerMiddleware, push, syncHistoryWithStore } from 'react-router-redux'
import thunk from 'redux-thunk';


import reducer from './reducers';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';


const store = compose(applyMiddleware(thunk))(createStore)(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <div>
            

            <div className="navbar">
                <div className="container">
                    <div className="wrapper">
                    <span onClick={e => window.location = '/'} className="logo" >Forms</span>
                    </div>
                </div>
            </div>

            <Router history={history}>
                <div>
                    <Route path="/" component={FormsList} />
                    <Route path="/form/:id" component={Form} />
                    <Route path='*' exact={true} component={FormsList} />
                </div>
                
            </Router>
        </div>
    </Provider>,
document.getElementById("app"));