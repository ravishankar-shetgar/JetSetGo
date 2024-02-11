import {createAction} from '@reduxjs/toolkit';
import {put, take} from 'redux-saga/effects';
import {ACTION_TYPES} from '../redux/actions';
import {
  setBookingsData,
  setIsLoading,
  unsetIsLoading,
} from '../redux/reducers/Bookings/Bookings.reducer';
import {Booking} from '../redux/reducers/Bookings/Bookings.reducer.types';

export const bookFlightAction = createAction<Booking>(ACTION_TYPES.bookFlight);

export function* onBookingScreen() {
  while (true) {
    const {payload}: {payload: Booking} = yield take(ACTION_TYPES.bookFlight);

    yield put(setIsLoading());
    yield put(setBookingsData(payload));
    yield put(unsetIsLoading());
  }
}
