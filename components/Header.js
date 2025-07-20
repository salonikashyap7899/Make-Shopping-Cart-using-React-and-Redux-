import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import cartIcon from '../assets/cart-icon.svg'
import { useDispatch, useSelector } from "react-redux";
import { fetchProductData } from "../store/productSlice";
import { fetchCartItemsData } from "../store/cartSlice";

export default function Header() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductData());
    dispatch(fetchCartItemsData());
  }, []);
  const cartItems = useSelector((state) => state.cartItem.list);
  return (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/">Shopee</Link>
        </h1>
        <Link className="cart-icon" to="/cart">
          <div className="cart-items-count">  
            {cartItems?.reduce(
              (accumulator, currentItem) => accumulator + currentItem.quantity,
              0
            )}
          </div>
        </Link>
      </div>
    </header>
  );
}
