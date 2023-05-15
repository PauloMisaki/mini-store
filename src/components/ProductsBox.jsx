import React from 'react'
import { productsList } from '../database/productsInfo'
import ProductCard from './ProductCard'

export default function ProductsBox() {
  return (
    <div>
      {productsList.map((product) => {
        return <ProductCard id={product.id} name={product.name} price={product.price}/>
      })}
    </div>
  )
}
