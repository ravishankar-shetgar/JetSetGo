import {AppState} from './store';

export const getAllFlightsData = (state: AppState) => state.Flights.flights;
export const isLoadingFlights = (state: AppState) => state.Flights.isLoading;
export const getBookedFlights = (state: AppState) => state.Bookings.bookings;
