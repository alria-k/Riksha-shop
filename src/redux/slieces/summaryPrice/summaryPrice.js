import { createSlice, current } from "@reduxjs/toolkit";

const initialState = 0;

const summaryPrice = createSlice({
  name: "summary",
  initialState,
  reducers: {
    countSummaryPrice(state, action) {
      console.log("hi");
    },
  },
});

export const { countSummaryPrice } = summaryPrice.actions;

export default summaryPrice.reducer;
