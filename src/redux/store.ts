import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from '../saga/root.saga';
import BookingsReducer, {
  BookingsState,
} from './reducers/Bookings/Bookings.reducer';
import FlightsReducer, {FlightsState} from './reducers/Flights/Flights.reducer';

export interface AppState {
  Flights: FlightsState;
  Bookings: BookingsState;
}

const sagaMiddleware = createSagaMiddleware();

const Store = configureStore({
  reducer: {
    Flights: FlightsReducer,
    Bookings: BookingsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default Store;
