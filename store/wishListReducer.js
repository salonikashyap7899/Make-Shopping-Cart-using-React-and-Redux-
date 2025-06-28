// Actions type
export const WISHLIST_ADD_ITEM = 'wishList/addItem';
export const WISHLIST_REMOVE_ITEM = 'wishList/removeItem';


// Action creators
export function addWishListItem(productId) {
  return { 
    type: WISHLIST_ADD_ITEM, 
    payload: { productId: productId} 
  };
}
export function removeWishList(productId) {
  return { 
    type: WISHLIST_REMOVE_ITEM, 
    payload: { productId: productId} 
  };
}



// Reducer
export default function wishListReducer(state = [], action) {
  switch (action.type) {
    case WISHLIST_ADD_ITEM:
      return [...state, action.payload];
    case WISHLIST_REMOVE_ITEM:
      return state.filter(item => item.productId !== action.payload.productId);
    default:
      return state;
  }
}