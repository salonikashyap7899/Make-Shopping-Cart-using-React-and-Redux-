import { createStore, combineReducers } from 'redux';

import cartReducer, {

} from './cartSlice';
import wishListReducer, {

} from './wishListSlice';
import productsReducer from './productSlice';

import {produce} from 'immer'




const reducer = combineReducers({
  products: productsReducer,
  cartItem: cartReducer,
  wishList: wishListReducer
});



export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__?.()
)
// console.log(store.getState());


const users = [
  {
    name: 'saloni',
    age: 19
  },
  {
    name: 'ram',
    age: 20
  },
  {
    name: 'aayu',
    age: 26
  },
]





// const newUsers = users.map((user, i)=>{
//   if(i === 1){
//     return {...users, age: 29}
//   }
//   return user
// })

const newUsers = produce(users, (userCopied)=>{
  userCopied[1].age = 16
})

console.log(newUsers);
console.log(users);

