// productsReducer.js
import { productsList } from './productsSlice'; // the array

export default function productsReducer(state = productsList, action) {
  switch (action.type) {
    default:
      return state;
  }
}
