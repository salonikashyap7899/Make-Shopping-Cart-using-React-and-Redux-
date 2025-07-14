import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    list: [],
    errro: "",
  },
  reducers: {
    fetchProducts(state) {
      state.loading = true;
    },
    fetchError(state, action) {
      state.loading = false;
      state.error = action.payload || "Failed to fetch products";
    },
    loadError(state, action){
        
    },
    updateAllProducts(state, action) {
      state.loading = false;
      state.list = action.payload;
      state.error = "";
    },
  },
});

export const getAllProducts = (state) => state.products.list;
export const getLoadingStatus = (state) => state.products.loading;
export const getErrorStatus = (state) => state.products.error;

export const { updateAllProducts, fetchProducts, fetchError } = slice.actions;
export default slice.reducer;
