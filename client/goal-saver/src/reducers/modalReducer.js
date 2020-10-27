import { OPEN_MODAL, CLOSE_MODAL } from "../constants";

const initialState = {
  isOpen: false,
  modalType: "",
  data: undefined,
};

const ModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isOpen: true,
        modalType: action.modalType,
        data: action.data,
      };

    case CLOSE_MODAL:
      return {
        ...state,
        isOpen: false,
        modalType: "",
        data: undefined,
      };

    default:
      return state;
  }
};

export default ModalReducer;
