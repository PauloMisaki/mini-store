import { UPDATE_USER_INFO } from "./types";
import { RESET_USER_INFO } from "./types";

export const updateUserInfo = (formValues) => {
  return {
    type: UPDATE_USER_INFO,
    payload: formValues,
  };
};

export const resetUserInfo = () => {
  return {
    type: RESET_USER_INFO,
    payload: null,
  }
}