import {createAction} from '@reduxjs/toolkit';
import {call, put, take} from 'redux-saga/effects';
import {Api} from '../api/api';
import ENDPOINTS from '../api/endpoints';
import {ApiResponseType} from '../constants/types';
import {ACTION_TYPES} from '../redux/actions';
import {
  setFlightsData,
  setIsLoading,
  unsetIsLoading,
} from '../redux/reducers/Flights/Flights.reducer';
import {GetFlightsResponse} from '../redux/reducers/Flights/Flights.reducer.types';

export const fetchFlightsAction = createAction(ACTION_TYPES.fetchFlights);

export function* onHomeScreen() {
  while (true) {
    yield take(ACTION_TYPES.fetchFlights);

    yield put(setIsLoading());
    const response: ApiResponseType<GetFlightsResponse> = yield call(
      [Api, Api.get],
      ENDPOINTS.getFlights,
    );

    if (response) {
      yield put(setFlightsData(response.data.data.result));
    } else {
      yield put(setFlightsData([]));
    }
    // yield delay(2000); // TODO: remove
    yield put(unsetIsLoading());
  }
}
