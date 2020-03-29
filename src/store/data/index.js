import {
    GET_NAMES, GET_NAMES_SUCCESS, GET_NAMES_ERROR
} from './constant';

const initialState = {
    phase : 'Loading',
    names : null
}

export function DataStore(state = initialState, action) {
    switch(action.type) {
        case GET_NAMES:
        return {
            ...state,
            phase: 'loading'
        }

        case GET_NAMES_SUCCESS:
        return {
            ...state,
            phase: 'success',
            names: action.data
        }

        case GET_NAMES_ERROR:
        return {
            ...state,
            phase: 'error'
        }

        default:
        return state;
    }
}

// Action creator -- getModelString
export const getNames = payload => ({
    type: GET_NAMES,
    payload
});