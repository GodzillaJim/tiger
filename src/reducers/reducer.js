import {
  OPEN_MODAL_REQUEST,
  CLOSE_MODAL_REQUEST,
  OPEN_MODAL_SUCCESS,
  OPEN_MODAL_FAIL,
} from '../constants/constants.js';

export const openModalReducer = (state = { openSideBar: true }, action) => {
  switch (action.type) {
    case OPEN_MODAL_REQUEST:
      return { openSideBar: true };
    case CLOSE_MODAL_REQUEST:
      return { openSideBar: false };
    default:
      return state;
  }
};
