import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("items/fetchData", async () => {
  return await Promise.all([
    axios.get("/src/db/items.json"),
    axios.get("/src/db/sale.json"),
  ]).then(([goods, sale]) => {
    const [goodsData] = goods.data;
    const [saleData] = sale.data;
    return { goodsData, saleData };
  });
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
      state.data.items = action.payload.goodsData;
      state.data.sale = action.payload.saleData;
    },
    [fetchData.rejected]: (state, action) => {
      console.log(action);
    },
  },
});

export const { setClickedCategory } = currentCategorySlice.actions;

export default currentCategorySlice.reducer;
