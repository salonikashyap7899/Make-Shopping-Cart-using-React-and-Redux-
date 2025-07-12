import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "products",
  initialState:{
      loading: false,
      list: []
  },
  reducers: {
    updateAllProducts(state, action) {
      state.loading = false;
      state.list =  action.payload;
    },
    fetchProducts(state){
      state.loading = true
    }
  },
});

export const { updateAllProducts, fetchProducts } = slice.actions;
export default slice.reducer;
