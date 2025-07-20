import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";

const findItemIndex = (state, action) =>
  state.findIndex(
    (cartItem) => cartItem.productId === action.payload.productId
  );

export const fetchCartItemsData = createAsyncThunk("cart/fetchCartItems", async () => {
  try {
    const response = await fetch(`https://fakestoreapi.com/carts/5`);
    const data = await response.json();
    return data;
  } catch (err) {
    throw err("Failed to fetch cart items");
  }
});

const slice = createSlice({
  name: "cart",
  initialState: {
    loading: false,
    list: [],
    error: "",
  },
    reducers: {
    AddCartItem(state, action) {
      const existingItemIndex = findItemIndex(state.list, action)
      if (existingItemIndex !== -1) state.list[existingItemIndex].quantity += 1
      else state.list.push({ ...action.payload, quantity: 1 })
    },
    removeItem(state, action) {
      const existingItemIndex = findItemIndex(state.list, action)
      state.list.splice(existingItemIndex, 1)
    },
    increaseCartItemQuantity(state, action) {
      const existingItemIndex = findItemIndex(state.list, action)
      state.list[existingItemIndex].quantity += 1
    },
    decreaseCartItemQuantity(state, action) {
      const existingItemIndex = findItemIndex(state.list, action)
      state.list[existingItemIndex].quantity -= 1
      if (state.list[existingItemIndex].quantity === 0)
        state.list.splice(existingItemIndex, 1)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCartItemsData.pending, (state) => {
      state.loading = true;

    }),
      builder.addCase(fetchCartItemsData.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload.products;
      }),
      builder.addCase(fetchCartItemsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch cart items";
      });
  },
});

const getCartItems = ({ products, cartItem }) => {
  return cartItem.list
    ?.map(({ productId, quantity }) => {
      const cartProduct = products.list.find(
        (product) => product.id === productId
      );
      return { ...cartProduct, quantity };
    })
    .filter(({ title }) => title);
};

export const getAllCartItems = createSelector(getCartItems, (state) => state);

export const getCartLoadingStatus = (state) => state.cartItem.loading;
export const getCartErrorStatus = (state) => state.cartItem.error;

export const {
  AddCartItem,
  removeItem,
  increaseCartItemQuantity,
  decreaseCartItemQuantity,
} = slice.actions;

export default slice.reducer;
