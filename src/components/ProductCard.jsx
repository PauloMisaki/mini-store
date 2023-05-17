import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { updateQuantity } from '../redux/actions/products';
import { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const useStyles = makeStyles({
  card: {
    width: '280px',
    height: '370px',
    position: 'relative',
    display: 'inline-block',
    '&:hover': {
      cursor: 'pointer',
    },
    '&:last-child': {
      paddingBottom: '15px !important',
    },
  },
  cardHover: {
    maxWidth: 'fit-content',
    margin: '0 !important',
    marginLeft: '16px !important',
    marginRight: '16px !important',
    marginBottom: '20px !important',
    '&:hover $name': {
      bottom: '51%',
      background: 'white',
      paddingTop: '4px',
      paddingBottom: '4px',
      paddingRight: '16px',
      width: '89%',
    },
    '&:hover $price': {
      bottom: '43%',
      background: 'white',
      width: '100%',
      paddingTop: '4px',
      paddingBottom: '8px',
    },
    '&:hover $typo': {
      bottom: '32%',
      background: 'white',
      width: '100%',
      paddingTop: '8px',
      paddingBottom: '4px',
    },
    '&:hover $overlay': {
      bottom: '0',
      background: 'white',
      width: '100%',
    },
    '&:hover $buttonGroup': {
      bottom: '0',
      background: 'white',
    },
  },
  cardMedia: {
    height: '220px',
    width: '220px !important',
    position: 'absolute',
    top: '35%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  name: {
    position: 'absolute',
    bottom: '22%',
    fontSize: '14px !important',
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#2A3F63 !important',
    zIndex: 1300,
    transition: '.3s ease',
  },
  price: {
    position: 'absolute',
    bottom: '15%',
    fontSize: '19px !important',
    fontWeight: '700 !important',
    textAlign: 'left',
    color: '#2A3F63 !important',
    zIndex: 1300,
    transition: '.3s ease',
  },
  typo: {
    position: 'absolute',
    bottom: '3%',
    fontSize: '12px !important',
    textAlign: 'left',
    color: '#2A3F63 !important',
    zIndex: 1300,
    transition: '.3s ease',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    background: 'rgba(0, 0, 0, 0)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0,
    transition: '0.9s ease',
    width: '100%',
  },
  overlayVisible: {
    opacity: 1,
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    transition: '0.9s ease',
    marginLeft: '0 !important',
    width: '100% !important',
  },
  addButton: {
    width: '250px',
    bottom: 0,
    transition: '0.9s ease',
    marginBottom: '15px !important',
    marginTop: '12px !important',
  },
  qtyInput: {
    border: '1px solid #7b7b7b',
    borderRadius: '4px 4px 4px 4px',
    background: '#f5f5f5',
    transition: '0.9s ease',
    width: '140px',
    marginLeft: '10px',
    marginRight: '10px',
    marginTop: '16px !important',
    paddingTop: '8px !important',
    paddingBottom: '8px !important',
    paddingLeft: '4px !important',
    paddingRight: '4px !important',

  },
  qtyButton: {
    width: '40px !important',
    minWidth: '24px !important',
    height: '40px !important',
    minHeight: '24px !important',
    padding: '0 0 !important',
    margin: '0 0 !important',
    fontSize: '15px !important',
    borderRadius: '80px !important',
    paddingLeft: '4px !important',
    paddingRight: '4px !important',
  },
  buttonSvg: {
    transform: 'scale(2)',
  },
  gridItem: {
    paddingLeft: '4px !important',
    paddingRight: '4px !important',
  },
  cardRoot: {
    padding: '0 !important',
  },
  addToCardGrid: {
    padding: '0 !important',
  },
});

// Renderiza dinâmicamente uma lista de produtos a partir de um array
const ProductCard = ({ key, id, name, price, quantity }) => {
  const classes = useStyles();
  const [showOverlay, setShowOverlay] = useState(false);
  const dispatch = useDispatch();

  const handleQuantityChange = (newQuantity) => {
    dispatch(updateQuantity(id, newQuantity));
  };

  const handleMouseEnter = () => {
    setShowOverlay(true);
  };

  const handleMouseLeave = () => {
    setShowOverlay(false);
  };

  return (
    <div key={key} id={id} className={classes.cardHover}>
      <Card
        className={classes.card}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <CardMedia
          component="img"
          className={classes.cardMedia}
          image={require(`../images/produto-0${id}.jpeg`)}
          alt={name}
        />
        <CardContent>
          <Typography variant="body1" component="div" gutterBottom className={classes.name}>
            {name}
          </Typography>
          <Typography variant="h5" color="text.secondary" className={classes.price}>
            R$ {price},00
          </Typography>
          <Typography variant="body1" color="text.secondary" className={classes.typo}>
            Em até 12x de R$ {(price / 12).toFixed(2)}<br/>
            R$ {(price * 0.9).toFixed(2)} à vista (10% de desconto)
          </Typography>
        </CardContent>
        <div
          className={`${classes.overlay} ${
            showOverlay ? classes.overlayVisible : ''
          }`}
        >
          {showOverlay && (
            <CardContent className={classes.cardRoot}>
              <Grid container spacing={2} alignItems="center" className={classes.buttonGroup}>
                <Grid item className={classes.gridItem}>
                  <Button variant="outlined" onClick={() => handleQuantityChange(parseInt(quantity) - 1)} className={classes.qtyButton}>
                    <RemoveCircleOutlineIcon className={classes.buttonSvg}/>
                  </Button>
                </Grid>
                <Grid item className={classes.qtyInput}>{quantity}</Grid>
                <Grid item className={classes.gridItem}>
                  <Button variant="outlined" onClick={() => handleQuantityChange(parseInt(quantity) + 1)} className={classes.qtyButton}>
                    <AddCircleOutlineIcon className={classes.buttonSvg}/>
                  </Button>
                </Grid>
                <Grid item className={classes.addToCardGrid}>
                  <Button variant="contained" onClick={() => handleQuantityChange(parseInt(quantity) + 1)} className={classes.addButton}>
                    ADICIONAR
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          )}
        </div>
      </Card>
    </div>
  );
};

// Resgata as informações do produto pelo id, e define 0 como quantidade padrão
const mapStateToProps = (state, ownProps) => {
  const product = state?.products?.products.find((p) => p.id === ownProps.id);
  const quantity = product?.quantity ?? 0;
  return {
    quantity: quantity,
  }
}

export default connect(mapStateToProps)(ProductCard);