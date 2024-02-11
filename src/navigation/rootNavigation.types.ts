import {FlightInfo} from '../redux/reducers/Flights/Flights.reducer.types';

export type HomeNavigationStackType = {
  HomeScreen: undefined;
  SearchResults: {
    fromCityCode: string;
    toCityCode: string;
    fromCityName: string;
    toCityName: string;
    date: string;
  };
  Booking: {flightInfo: FlightInfo};
  BookingSuccess: {flightInfo: FlightInfo};
};

export type BookingNavigationStackType = {
  BookingHistory: undefined;
  BookedFlight: {userId: string};
};

export type TabNavigationStackType = {
  Home: undefined;
  Bookings: undefined;
};
