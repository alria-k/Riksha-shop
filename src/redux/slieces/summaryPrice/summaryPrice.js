import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const summaryPrice = createSlice({
  name: "summary",
  initialState,
  reducers: {
    countSummaryPrice(state, action) {
      return action.payload.reduce((acc, curr) => {
        return curr.item.sale
          ? acc +
              curr.quantity *
                (curr.item.price - (curr.item.price / 100) * curr.item.sale)
          : acc + curr.item.price * curr.quantity;
      }, 0);
    },
  },
});

export const { countSummaryPrice } = summaryPrice.actions;

export default summaryPrice.reducer;
