import {FlightInfo} from '../redux/reducers/Flights/Flights.reducer.types';

export type HomeNavigationStackType = {
  HomeScreen: undefined;
  SearchResults: {userId: string};
  Booking: {flightInfo: FlightInfo};
};

export type BookingNavigationStackType = {
  BookingHistory: undefined;
  BookedFlight: {userId: string};
};

export type TabNavigationStackType = {
  Home: undefined;
  Bookings: undefined;
};
