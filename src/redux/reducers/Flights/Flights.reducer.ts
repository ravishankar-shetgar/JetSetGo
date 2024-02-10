import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {FlightInfo} from './Flights.reducer.types';

export interface FlightsState {
  flights: FlightInfo[];
}

export const INITIAL_STATE: FlightsState = {
  flights: [],
};

export const Flights = createSlice({
  name: 'Flights',
  initialState: INITIAL_STATE,
  reducers: {
    setFlightsData: (state, action: PayloadAction<FlightInfo[]>) => ({
      ...state,
      flights: action.payload,
    }),
  },
});

export const {setFlightsData} = Flights.actions;

export default Flights.reducer;
