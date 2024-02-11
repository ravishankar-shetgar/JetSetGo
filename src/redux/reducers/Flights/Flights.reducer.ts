import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {FlightInfo} from './Flights.reducer.types';

export interface FlightsState {
  flights: FlightInfo[];
  isLoading: boolean;
}

export const INITIAL_STATE: FlightsState = {
  flights: [],
  isLoading: true,
};

export const Flights = createSlice({
  name: 'Flights',
  initialState: INITIAL_STATE,
  reducers: {
    setFlightsData: (state, action: PayloadAction<FlightInfo[]>) => ({
      ...state,
      flights: action.payload,
    }),
    setIsLoading: state => ({
      ...state,
      isLoading: true,
    }),
    unsetIsLoading: state => ({
      ...state,
      isLoading: false,
    }),
  },
});

export const {setFlightsData, setIsLoading, unsetIsLoading} = Flights.actions;

export default Flights.reducer;
