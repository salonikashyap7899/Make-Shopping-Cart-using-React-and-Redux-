
import cartReducer from "./cartSlice";
import wishListReducer from "./wishListSlice";
import productsReducer from "./productSlice";
import { configureStore } from "@reduxjs/toolkit";
import { logger } from "./middleware/logger";




export const store = configureStore({
  reducer: {
    products: productsReducer,
    cartItem: cartReducer,
    wishList: wishListReducer,
  },
  middleware: [logger]
});
 