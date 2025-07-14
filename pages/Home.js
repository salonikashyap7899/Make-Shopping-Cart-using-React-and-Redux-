import React from 'react'
import { useSelector } from 'react-redux'
import Product from '../components/product'
import { getAllProducts, getErrorStatus, getLoadingStatus } from '../store/productSlice'


export default function Home() {
  const productsList = useSelector(getAllProducts)
  const isLoading = useSelector(getLoadingStatus)
  const isError  = useSelector(getErrorStatus)

  return  isLoading ? (
      <h1 style={{textAlign: 'center'}}>Loading....</h1>
    ) : isError ? (
      <h1 style={{textAlign: 'center'}}>{isError}</h1>
    ) : (
    <div className="products-container">
      {productsList.map(({ id, title, rating, price, image }) => (
        <Product
          key={id}
          productId={id}
          title={title}
          rating={rating.rate}
          price={price}
          imageUrl={image}
        />
      ))}
    </div>
  )
}