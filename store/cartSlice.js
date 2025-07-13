
import { createSlice } from "@reduxjs/toolkit";

const findItemIndex = (state, action) =>
  state.findIndex(
    (cartItem) => cartItem.productId === action.payload.productId
  );


const slice  = createSlice({
  name: "cart",
  initialState: {
loading: false,
list: [],
error: "",
  },
  reducers: {
    fetchCartItems(state) {
      state.loading = true;
    },
    fetchCartError(state, action) {
      state.loading = false ;
      state.error = action.payload || "Failed to fetch cart items";
    },
    loadCartItems(state, action){
      state.loading = false;
      state.error = "";
    state.list =  action.payload.products
    },
    AddCartItem(state, action) {
      const existingItem = findItemIndex(state.list, action);
      if (existingItem !== -1) {
        state.list[existingItem].quantity += 1;
      } else {
        state.list.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem(state, action) {
      const existingItem = findItemIndex(state.list, action);
      state.list.splice(existingItem, 1);
    },
    increaseCartItemQuantity(state, action) {
      const existingItem = findItemIndex(state.list, action);
      state.list[existingItem].quantity += 1;
    },
    decreaseCartItemQuantity(state, action) {
      const existingItem = findItemIndex(state.list, action);
      state.list[existingItem].quantity -= 1;
      if (state[existingItem].quantity === 0) {
        state.splice[(existingItem, 1)];
      }
    },
  },
});



export const {
  fetchCartError,
  fetchCartItems,
  loadCartItems,
  AddCartItem,
  removeItem,
  increaseCartItemQuantity,
  decreaseCartItemQuantity,
} = slice.actions;


export default slice.reducer;
