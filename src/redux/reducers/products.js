import { RESET_PRODUCT_INFO, UPDATE_QUANTITY, UPDATE_TOTAL } from "../actions/types";


const initialState = {
  products: [
    { id: 1, name: 'AirPods Apple Fones de ouvido', price: 1499, quantity: 0 },
    { id: 2, name: 'Capa de silicone para iPhone 8/7 cor Areia - rosa', price: 299, quantity: 0 },
    { id: 3, name: 'Apple Pencil', price: 729, quantity: 0 },
    { id: 4, name: 'Magic Mouse 2 - Prateado', price: 549, quantity: 0 },
    { id: 5, name: 'Caixa prateada de alumínio com pulseira esportiva branca', price: 2899, quantity: 0 },
    { id: 6, name: 'Cabo de lightning para USB (1m)', price: 149, quantity: 0 },
    { id: 7, name: 'Smart Keyboard para iPad Pro 12,9 polegadas - inglês (EUA)', price: 1099, quantity: 0 },
    { id: 8, name: 'Carregador USB de 5W Apple', price: 149, quantity: 0 },
  ],
  total: 0,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TOTAL:
      return {
        ...state,
        total: action.payload,
      };
    case UPDATE_QUANTITY:
      const { id, quantity } = action.payload;
      if (quantity < 0) {
        return state;
      }
      const updatedProducts = state.products.map((product) => {
        if (product.id === id) {
          return { ...product, quantity }
        } else {
          return product;
        }
      });      
      return { ...state, products: updatedProducts }
    case RESET_PRODUCT_INFO:
      const resettedProducts = state.products.map((product) => {
        return { ...product, quantity: 0 }
      });
      return { ...state, products: resettedProducts, total: 0 }
    default:
      return state;
  }
};

export default productsReducer;