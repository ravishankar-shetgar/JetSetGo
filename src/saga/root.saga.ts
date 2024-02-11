import {fork} from 'redux-saga/effects';
import {onBookingScreen} from './BookingScreen.saga';
import {onHomeScreen} from './HomeScreen.saga';

export function* rootSaga() {
  yield fork(onHomeScreen);
  yield fork(onBookingScreen);
}
