import { createSlice } from "@reduxjs/toolkit";
import { getFlights } from "../actions/flightAction";

const initialState = {
  isLoading: false,
  isError: false,
  flights: [],
  path: [],
};

const flightSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {
    setPath: (state, action) => {
      state.path = action.payload;
    },

    cleanPath: (state) => {
      state.path = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getFlights.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getFlights.rejected, (state, action) => {
      state.isLoading = false;
      state.rejected = action.error;
    });
    builder.addCase(getFlights.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.flights = action.payload;
    });
  },
});

export const { setPath, cleanPath } = flightSlice.actions;
export default flightSlice.reducer;
