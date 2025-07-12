import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '../assets/cart-icon.svg';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, updateAllProducts } from '../store/productSlice';

export default function Header() {
   const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchProducts())
    fetch('https://fakestoreapi.com/products').then((res) => res.json()).then((data) =>{
      console.log(data)
     dispatch(updateAllProducts(data))
    })

 
  }, [])
  const cartItems = useSelector((state) => state.cartItem); // ✅ use correct key
  return (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/">Shopee</Link>
        </h1>
        <Link className="cart-icon" to="/cart">
          <img src={CartIcon} alt="🛒" />
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
