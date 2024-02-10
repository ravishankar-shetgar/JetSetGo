import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from '../saga/root.saga';
import FlightsReducer, {FlightsState} from './reducers/Flights/Flights.reducer';

export interface AppState {
  Flights: FlightsState;
}

const sagaMiddleware = createSagaMiddleware();

const Store = configureStore({
  reducer: {
    Flights: FlightsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default Store;
