import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const fetchProductData = createAsyncThunk("product/fetchProductItems", async () => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products`);
    const data = await response.json();
    return data;
  } catch (err) {
    throw err("Failed to fetch cart items");
  }
});

const slice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    list: [],
    error: "",
  },
  

  extraReducers: (builder) => {
    builder.addCase(fetchProductData.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchProductData.fulfilled, (state, action) => {
          state.loading = false;
      state.list = action.payload;
      state.error = "";
    });
    builder.addCase(fetchProductData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Failed to fetch products";
    });
  }
});





export const getAllProducts = (state) => state.products.list;
export const getLoadingStatus = (state) => state.products.loading;
export const getErrorStatus = (state) => state.products.error;


export const { updateAllProducts, fetchProducts, fetchError } = slice.actions;
export default slice.reducer;
