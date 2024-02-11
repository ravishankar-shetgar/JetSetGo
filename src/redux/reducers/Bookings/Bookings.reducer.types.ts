import {FlightInfo} from '../Flights/Flights.reducer.types';

export interface Booking extends FlightInfo {
  noOfSeats: number;
}
