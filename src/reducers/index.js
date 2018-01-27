import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';


import forms from './formslist';
import formDetail from './formDetail';

export default combineReducers({
    routing: routerReducer,
    forms,
    formDetail
});