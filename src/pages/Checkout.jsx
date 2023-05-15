import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetUserInfo } from '../redux/actions/checkout'
import { resetProductsInfo } from '../redux/actions/products'
import { Button } from '@mui/material';

const Checkout = () => {
  const totalValue = useSelector((state) => state.products.total)
  const userInfo = useSelector((state) => state.checkout.userInfo)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNewPurchase = () => {
    dispatch(resetUserInfo())
    dispatch(resetProductsInfo())
    navigate('/products');
  }

  return (
    <div>
      <h2>{userInfo.name},</h2>
      <h4>
        Sua compra no valor{' '} 
        <span>R$: {totalValue},00</span>
        <br/>
        foi finalizada com sucesso
      </h4>
      <img src={require(`../images/purchase.png`)} alt="Confirmação da compra" />
      <div>
        <Button onClick={ handleNewPurchase } variant="contained">INICIAR NOVA COMPRA</Button>
      </div>
    </div>
  )
}

export default Checkout