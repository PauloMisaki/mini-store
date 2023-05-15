import React, { useEffect } from 'react'
import { productsList } from '../database/productsInfo'
import ProductCard from './ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { updateTotal } from '../redux/actions/products'

const ProductsBox = () => {
  const products = useSelector((state) => state.products.products)
  // const totalValue = useSelector((state) => state.products.total)
  const dispatch = useDispatch();

  const calculateTotalValue = () => {
    return products.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0)
  };

  const total = calculateTotalValue();

  useEffect(() => {
    dispatch(updateTotal(total));
  }, [dispatch, total])

  return (
    <div>
      <h1>Produtos</h1>
      {productsList.map((product) => {
        return <ProductCard id={product.id} name={product.name} price={product.price}/>
      })}
    </div>
  )
}

export default ProductsBox;
