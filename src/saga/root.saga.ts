import {fork} from 'redux-saga/effects';
import {onHomeScreen} from './HomeScreen.saga';

export function* rootSaga() {
  yield fork(onHomeScreen);
}
