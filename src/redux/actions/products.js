import { UPDATE_QUANTITY } from "./types";
import { UPDATE_TOTAL } from "./types";
import { RESET_PRODUCT_INFO } from "./types";

export const updateQuantity = (id, quantity) => {
  return {
    type: UPDATE_QUANTITY,
    payload: { id, quantity },
  };
};

export const updateTotal = (total) => {
  return {
    type: UPDATE_TOTAL,
    payload: total,
  }
};

export const resetProductsInfo = () => {
  return {
    type: RESET_PRODUCT_INFO,
    payload: null,
  }
};