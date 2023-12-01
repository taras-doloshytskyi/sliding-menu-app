import { SET_BUTTONS } from './actions';

const initialState = {
  buttons: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BUTTONS:
      return {
        ...state,
        buttons: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;