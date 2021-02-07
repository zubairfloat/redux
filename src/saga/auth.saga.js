import * as types from '../types/auth.type';
import { takeLatest, call, put } from 'redux-saga/effects';

function* RegisterRequestSaga(action) {
  console.log('saga is ===>>', action);
  try {
  } catch (error) {}
}

export default function* authWatcher() {
  yield takeLatest(types.REGISTRATION_REQUEST, RegisterRequestSaga);
}
