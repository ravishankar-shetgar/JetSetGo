import {FlightInfo} from '../Flights/Flights.reducer.types';

export interface Booking extends FlightInfo {
  seats: string[];
  totalFare: number;
  bookedDate: string;
  uuid: string;
}
