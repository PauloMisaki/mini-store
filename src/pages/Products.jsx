import React from 'react';
import ClientForm from '../components/ClientForm';
import ProductsBox from '../components/ProductsBox';
// import getResults from '../utils/getResults';
// Com a função getResults é possível testar o retorno do formulário antes
// de executar o dispatch dentro do componente, passado como prop para o ClientForm.

export default function Products() {
  return (
    <div>
      <ProductsBox/>
      <ClientForm/>
    </div>
  )
}
