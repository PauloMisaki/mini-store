import React, { useEffect } from 'react'
import { productsList } from '../database/productsInfo'
import ProductCard from './ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { updateTotal } from '../redux/actions/products'

// Componente pai da lista de produtos, que despacha
// a action responsável por atualizar o valor total dos produtos
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
      <h1 className='products-header'>Produtos</h1>
      <div className='products-list'>
        {productsList.map((product) => {
          return <ProductCard key={product.id} id={product.id} name={product.name} price={product.price}/>
        })}
      </div>
    </div>
  )
}

export default ProductsBox;
