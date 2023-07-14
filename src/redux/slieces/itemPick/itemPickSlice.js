import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: {},
};

const itemPickerSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    pickItem(state, action) {
      state.item = action.payload;
    },
  },
});

export const { pickItem } = itemPickerSlice.actions;

export default itemPickerSlice.reducer;
