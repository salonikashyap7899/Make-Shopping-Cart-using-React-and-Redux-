
import { myCreateSlice } from "../redux-toolkit";

const findItemIndex = (state, action) =>
  state.findIndex(
    (cartItem) => cartItem.productId === action.payload.productId
  );


const mySlice = myCreateSlice({
  name: "cart",
  initialState: [],
  reducers: {
    AddCartItem(state, action) {
      const existingItem = findItemIndex(state, action);
      if (existingItem !== -1) {
        state[existingItem].quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem(state, action) {
      const existingItem = findItemIndex(state, action);
      state.splice(existingItem, 1);
    },
    increaseCartItemQuantity(state, action) {
      const existingItem = findItemIndex(state, action);
      state[existingItem].quantity += 1;
    },
    decreaseCartItemQuantity(state, action) {
      const existingItem = findItemIndex(state, action);
      state[existingItem].quantity -= 1;
      if (state[existingItem].quantity === 0) {
        state.splice[(existingItem, 1)];
      }
    },
  },
});



export const {
  AddCartItem,
  removeItem,
  increaseCartItemQuantity,
  decreaseCartItemQuantity,
} = mySlice.actions;


export default mySlice.reducer;
