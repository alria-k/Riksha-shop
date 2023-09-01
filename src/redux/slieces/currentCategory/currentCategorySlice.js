import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("items/fetchData", async () => {
  return await axios.get("/src/db/items.json").then(({ data }) => data);
});

const initialState = {
  data: {
    items: null,
    sale: null,
  },
  loading: true,
  error: null,
};

const currentCategorySlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchData.pending]: (state) => {
      state.loading = true;
    },
    [fetchData.fulfilled]: (state, action) => {
      state.loading = false;
      [state.data.items] = action.payload;
    },
    [fetchData.rejected]: (state, action) => {
      console.log(action);
    },
  },
});

export const { setClickedCategory } = currentCategorySlice.actions;

export default currentCategorySlice.reducer;
