import { createStore, combineReducers } from 'redux';
import { productsList } from '../store/productsList'; // ✅ Works with your current export
;
import cartReducer, {
  AddCartItem,
  decreaseCartItemQuantity,
  increaseCartItemQuantity,
  removeItem
} from './cartReducer';
import wishListReducer, {
  addWishListItem,
  removeWishList,
} from './wishListReducer';
import productsReducer from './productReducer';

// function combineReducers(reducers) {
//   const reducerKeys = Object.keys(reducers)

//   return function (state = {}, action) {
//     const nextState = {}
    
//     for (let i = 0; i < reducerKeys.length; i++) {
//       const key = reducerKeys[i]
//       const reducer = reducers[key]
//       const previousStateForKey = state[key]
//       const nextStateForKey = reducer(previousStateForKey, action)
//       nextState[key] = nextStateForKey
//     }

//     return nextState
//   }
// }



const reducer = combineReducers({
  products: productsReducer,
  cartItem: cartReducer,
  wishList: wishListReducer
});



export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__?.()
)
// console.log(store);



// store.dispatch(AddCartItem(1, 2));
// store.dispatch(removeItem(12))
// store.dispatch(decreaseCartItemQuantity(70))
// store.dispatch(increaseCartItemQuantity(1))

 
// store.dispatch(addWishListItem(1, 2));
// store.dispatch(removeWishList(1));


