import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Booking} from './Bookings.reducer.types';

export interface BookingsState {
  bookings: Booking[];
  isLoading: boolean;
}

export const INITIAL_STATE: BookingsState = {
  isLoading: true,
  bookings: [],
};

export const Bookings = createSlice({
  name: 'Bookings',
  initialState: INITIAL_STATE,
  reducers: {
    setBookingsData: (state, action: PayloadAction<Booking>) => ({
      ...state,
      bookings: [...state.bookings, action.payload],
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

export const {setBookingsData, setIsLoading, unsetIsLoading} = Bookings.actions;

export default Bookings.reducer;
