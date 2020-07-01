import {put, take, all } from 'redux-saga/effects';
import { homeActions } from '../../store/HomeSlice';



export function* watchLoadImage() {
  while (true) {
    yield all([take(homeActions.bgLoaded), take(homeActions.logoLoaded)]);
    yield put(homeActions.setIsReady())
  }
}
