import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const summaryPrice = createSlice({
  name: "summary",
  initialState,
  reducers: {
    countSummaryPrice(state, action) {
      const summary = action.payload.reduce(
        (acc, curr) => acc + curr.item.price * curr.quantity,
        0
      );
      return summary;
    },
  },
});

export const { countSummaryPrice } = summaryPrice.actions;

export default summaryPrice.reducer;
