import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clickedCategory: {},
};

const currentCategorySlice = createSlice({
  name: "clicked-category",
  initialState,
  reducers: {
    setClickedCategory(state, action) {
      state.clickedCategory = action.payload;
    },
  },
});

export const { setClickedCategory } = currentCategorySlice.actions;

export default currentCategorySlice.reducer;
