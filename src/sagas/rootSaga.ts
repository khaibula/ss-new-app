import { all } from 'redux-saga/effects';
import { watchLoadImage } from './home/loadImage';
export function* rootSaga() {
  yield all([watchLoadImage()]);
}
