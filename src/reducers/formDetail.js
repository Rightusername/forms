const initialState = [];

export default function forms(state = initialState, action) {

    if (action.type === 'FETCH_FORM_DETAIL_SUCCESS') {
        return [
            ...action.payload.data.data
        ];
    }

    if (action.type === 'REMOVE_FORM_DETAIL') {
        return [];
    }



    return state;
}