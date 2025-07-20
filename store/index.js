import { configureStore } from "@reduxjs/toolkit";

// ✅ Import all your slices
import cartReducer from "./cartSlice";
import wishListReducer from "./wishListSlice";
import productsReducer from "./productSlice";


export const store = configureStore({
  reducer: {
    products: productsReducer,
    cartItem: cartReducer,
    wishList: wishListReducer,

  },
});
