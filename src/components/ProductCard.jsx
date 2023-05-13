import { useDispatch } from 'react-redux';
import { updateQuantity } from '../redux/actions/products';

const ProductCard = ({ id, name, price, quantity }) => {
  const dispatch = useDispatch();

  const handleQuantityChange = (newQuantity) => {
    dispatch(updateQuantity(id, name, price, newQuantity));
  };

  const handleQuantityDecrement = (newQuantity) => {
    dispatch(updateQuantity(id, name, price, quantity - 1));
  };

  const handleQuantityIncrement = (newQuantity) => {
    dispatch(updateQuantity(id, name, price, quantity + 1));
  };


  return (
    <div id={id}>Produto:
      <h2>{name}</h2>
      <h2>{price}</h2>
      <div>
        <button onClick={handleQuantityDecrement}>-</button>
        <input
          type="number"
          value={quantity}
          onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
        />
        <button onClick={handleQuantityIncrement}>+</button>
      </div>
    </div>
  )
}

export default ProductCard