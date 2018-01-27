const initialState = [

];

export default function forms(state = initialState, action) {
    if (action.type === 'DELETE_FORM') {
        return state.filter(form =>
            form.id !== action.payload.id
        )
    } 

    if (action.type === 'FETCH_FORMS_SUCCESS') {
        return [
            ...action.payload.data.data
        ];
    } 
    return state;
}