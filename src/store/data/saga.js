import {
    GET_NAMES, GET_NAMES_SUCCESS, GET_NAMES_ERROR
} from './constant';

import { getNamesAPI } from './api';
import { takeLatest, put, call } from 'redux-saga/effects';

function* NamesSaga(action) {
    try {
        const data = yield call(getNamesAPI, action.payload )
        yield put( { type: GET_NAMES_SUCCESS, data })
    }
    catch (error){
        console.log("error", error);
    }
}


export function* getNameSaga(){
    yield takeLatest( GET_NAMES, NamesSaga);
}