import { takeEvery } from "redux-saga/effects";
import * as actionTypes from "../actions/types";
import { logoutSaga} from './auth'

function* watchAuth(){
    yield takeEvery(actionTypes.AUTH_USER, logoutSaga)
}