import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BookingItem } from "../../../interface";

type BookState = {
  hospitalItems: BookingItem[];
};

const initialState: BookState = { hospitalItems: [] };

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addVaccineBook: (state, action: PayloadAction<BookingItem>) => {
      state.hospitalItems = [action.payload];
    },
    removeVaccineBook: (state, action: PayloadAction<BookingItem>) => {
      const remainItems = state.hospitalItems.filter((obj) => {
        return (
          obj.hospitalName !== action.payload.hospitalName ||
          obj.bookingDate !== action.payload.bookingDate
        );
      });
      state.hospitalItems = remainItems;
    },
  },
});

export const { addVaccineBook, removeVaccineBook } = bookSlice.actions;
export default bookSlice.reducer;
