import {AppState} from './store';

export const getAllFlightsData = (state: AppState) => state.Flights.flights;
