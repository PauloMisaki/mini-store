// Importe os tipos de ação, se necessário
// import { AÇÃO_3, AÇÃO_4 } from '../actions/types';

// Defina o estado inicial
const initialState = {
  // Defina o estado inicial das informações da compra
  nome: '',
  email: '',
  sexo: '',
  valorTotal: 0,
};

const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    // Manipule as ações, se necessário
    // case AÇÃO_3:
    //   // Faça alguma coisa
    //   return state;

    // case AÇÃO_4:
    //   // Faça alguma coisa
    //   return state;

    default:
      return state;
  }
};

export default checkoutReducer;
