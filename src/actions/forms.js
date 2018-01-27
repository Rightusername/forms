import axios from 'axios';
import { formsUrl } from "../constants/urls";

export const getForms = () => dispatch => {
    axios.get(formsUrl)
    .then(res => {
        dispatch({ type: 'FETCH_FORMS_SUCCESS', payload: res })
    });

}

export const getFormDetail = (id) => dispatch => {
    axios.get(formsUrl + '/' + id)
        .then(res => {
            dispatch({ type: 'FETCH_FORM_DETAIL_SUCCESS', payload: res })
        });
}

export const deleteForm = (form) => ({ type: 'DELETE_FORM', payload: form })

