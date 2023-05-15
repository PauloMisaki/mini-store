import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { updateQuantity } from '../redux/actions/products';

const ProductCard = ({ id, name, price, quantity }) => {
  const dispatch = useDispatch();

  const handleQuantityChange = (newQuantity) => {
    dispatch(updateQuantity(id, newQuantity));
  };

  return (
    <div key={id} id={id}>
      <img src={require(`../images/produto-0${id}.jpeg`)} alt={name} />
      <h2>{name}</h2>
      <h2>R$: {price},00</h2>
      <div>
        <button onClick={(e) => handleQuantityChange(parseInt(quantity) - 1)}>-</button>
        <input
          type="number"
          value={quantity}
          onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
        />
        <button onClick={(e) => handleQuantityChange(parseInt(quantity) + 1)}>+</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const product = state?.products?.products.find((p) => p.id === ownProps.id);
  const quantity = product?.quantity ?? 0;
  return {
    quantity: quantity,
  }
}

export default connect(mapStateToProps)(ProductCard);