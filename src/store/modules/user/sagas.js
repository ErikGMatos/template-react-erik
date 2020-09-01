import { put, all, takeLatest } from 'redux-saga/effects';

import * as UserActions from './actions';

function* userJWTRequest() {
  try {
    const jwtInfo = {};
    yield put(UserActions.userJWTSuccess(jwtInfo));
  } catch {
    yield put(UserActions.userJWTFailure());
  }
}
export default all([takeLatest(UserActions.Types.REQUEST, userJWTRequest)]);
