import { UPDATE_QUANTITY } from "../actions/types";


const initialState = {
  products: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_QUANTITY:
      const { id, name, price, quantity } = action.payload;
      let updatedProducts;
      if (quantity === 0) {
        updatedProducts = state.products.filter((product) => product.id !== id)
      } else {
        updatedProducts = state.products.map((product) => {
          if (product.id === id) {
            return { ...product, quantity }
          } else if (!state.products.includes(id)) {
            const newProduct = { id: id, name: name, price: price, quantity: quantity }
            return { ...product, newProduct }
          }
          return product
        });
      }
      return { ...state, products: updatedProducts }
      
    // case AÇÃO_2:
    //   // Faça alguma coisa
    //   return state;

    default:
      return state;
  }
};

export default productsReducer;