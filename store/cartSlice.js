import { produce } from "immer";

// Action Types
const CART_ADD_ITEM = "cart/addItem";
const CART_REMOVE_ITEM = "cart/removeItem";
const CART_ITEM_INCREASE_QUANTITY = "cart/increaseItemQuantity";
const CART_ITEM_DECREASE_QUANTITY = "cart/decreaseItemQuantity";

// Action Creators
export function AddCartItem(productData) {
  return { type: CART_ADD_ITEM, payload: productData };
}

export function removeItem(productId) {
  return { type: CART_REMOVE_ITEM, payload: { productId } };
}

export function decreaseCartItemQuantity(productId) {
  return {
    type: CART_ITEM_DECREASE_QUANTITY,
    payload: { productId },
  };
}

export function increaseCartItemQuantity(productId) {
  return {
    type: CART_ITEM_INCREASE_QUANTITY,
    payload: { productId },
  };
}
// Reducer
export default function cartReducer(Originalstate = [], action) {
  return produce(Originalstate, (state) => {
    const existingItem = state.findIndex(
      (cartItem) => cartItem.productId === action.payload.productId
    );
    switch (action.type) {
      case CART_ADD_ITEM:
        if (existingItem !== -1) {
          state[existingItem].quantity += 1;
          break;
        }
        state.push({ ...action.payload, quantity: 1 });
        break;
      case CART_REMOVE_ITEM:
        state.splice(existingItem, 1);
        break;
      case CART_ITEM_INCREASE_QUANTITY:
        state[existingItem].quantity += 1;
        break;
      case CART_ITEM_DECREASE_QUANTITY:
        state[existingItem].quantity -= 1;
        if (state[existingItem].quantity === 0) {
          state.splice[(existingItem, 1)];
        }
    }
    return state;
  });
} 
