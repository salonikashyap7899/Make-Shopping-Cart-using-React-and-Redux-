import React from "react";
import CartItems from "../components/CartItem";
import { useSelector } from "react-redux";
import "../App.css";
import { getAllCartItems, getCartErrorStatus, getCartLoadingStatus } from "../store/cartSlice";

export default function Cart() {
  const cartItem = useSelector(getAllCartItems)

  const  isLoading = useSelector(getCartLoadingStatus)
  const  isError = useSelector(getCartErrorStatus)

  return ( isLoading ?    <h2>Loading Cart Items...</h2> : isError ? <h2>{isError}</h2> :
    <div className="cart-container">
      <h2>Items in Your Cart</h2>
      <div className="cart-items-container">
        <div className="cart-header cart-item-container">
          <div className="cart-item">Item</div>
          <div className="item-price">Price</div>
          <div className="quantity">Quantity</div>
          <div className="total">Total</div>
        </div>
        {cartItem?.map(({ id, title, rating, price, image, quantity }) => (
          <CartItems
            key={id}
            productId={id}
            title={title}
            price={price}
            quantity={quantity}
            imageUrl={image}
            rating={rating.rate}
          />
        ))}
        <div className="cart-header cart-item-container">
          <div></div>
          <div></div>
          <div></div>
          {
            isLoading || (isError && <div className="total">
            $
            {cartItem?.reduce(
              (accumulator, currentItem) =>
                accumulator + currentItem.quantity * currentItem.price,
              0
            )}
          </div>)
          }
        </div>
      </div>
    </div>
  );
}
