import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetUserInfo } from '../redux/actions/checkout'
import { resetProductsInfo } from '../redux/actions/products'
import { Button } from '@mui/material';
import { orange } from '@mui/material/colors';

const Checkout = () => {
  const totalValue = useSelector((state) => state.products.total)
  const userInfo = useSelector((state) => state.checkout.userInfo)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Função zera o valor total e quaisquer quantidade de itens adicionados
  const handleNewPurchase = () => {
    dispatch(resetUserInfo())
    dispatch(resetProductsInfo())
    navigate('/products');
  }

  return (
    <div className='checkout-page'>
      <div className='checkout-success'>
        <h2 style={{ color: '#2A3F63' }}>{userInfo.name},</h2>
        <h4 style={{ color: '#2A3F63' }}> 
          Sua compra no valor{' '} 
          <span style={{ color: '#36ADFF' }}>R$ {totalValue},00</span>
          <br/>
          foi finalizada com sucesso
        </h4>
        <img src={require(`../images/purchase.png`)} alt="Confirmação da compra" className='svg-done'/>
        <div>
          <Button onClick={ handleNewPurchase } variant="contained" style={{ backgroundColor: orange[400], color: '#fff' }}>INICIAR NOVA COMPRA</Button>
        </div>
      </div>
    </div>
  )
}

export default Checkout