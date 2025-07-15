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

export const fetchProductData = () => (dispatch) =>{
    dispatch(fetchProducts());
     fetch(`https://fakestoreapi.com/products`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          dispatch(updateAllProducts(data))
        })
        .catch(() => {
          dispatch(fetchError())
        });
    
  }


export const { updateAllProducts, fetchProducts, fetchError } = slice.actions;
export default slice.reducer;
