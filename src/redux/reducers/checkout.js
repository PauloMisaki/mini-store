import { UPDATE_USER_INFO, RESET_USER_INFO } from "../actions/types";

const initialState = {
  userInfo: null,
};

const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };
    case RESET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload, // null
      };

    default:
      return state;
  }
};

export default checkoutReducer;
