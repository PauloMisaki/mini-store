import { UPDATE_QUANTITY } from "./types";

export const updateQuantity = (id, quantity) => {
  return {
    type: UPDATE_QUANTITY,
    payload: { id, quantity },
  };
};