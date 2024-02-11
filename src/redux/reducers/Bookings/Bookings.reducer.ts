import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Booking} from './Bookings.reducer.types';

export interface FlightsState {
  bookings: Booking[];
}

export const INITIAL_STATE: FlightsState = {
  bookings: [],
};

export const Bookings = createSlice({
  name: 'Bookings',
  initialState: INITIAL_STATE,
  reducers: {
    setBookingsData: (state, action: PayloadAction<Booking[]>) => ({
      ...state,
      bookings: action.payload,
    }),
  },
});

export const {setBookingsData} = Bookings.actions;

export default Bookings.reducer;
