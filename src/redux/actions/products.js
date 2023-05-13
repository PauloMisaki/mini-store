import { UPDATE_QUANTITY } from "./types";

export const updateQuantity = (id, name, price, quantity) => {
  return {
    type: UPDATE_QUANTITY,
    payload: { id, name, price, quantity },
  };
};