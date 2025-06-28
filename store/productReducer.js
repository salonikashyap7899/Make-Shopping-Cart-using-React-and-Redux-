// productsReducer.js
import { productsList } from './productsList'; // the array

export default function productsReducer(state = productsList, action) {
  switch (action.type) {
    default:
      return state;
  }
}
