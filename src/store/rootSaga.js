import { all } from 'redux-saga/effects';
import { getNameSaga } from './data/saga';


export default function* (){
    yield all([
        getNameSaga(),
    ])
}