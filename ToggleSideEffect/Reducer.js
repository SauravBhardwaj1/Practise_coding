// reducer.js
import { TOGGLE_FEATURE } from './actions';

const initialState = {
  featureEnabled: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FEATURE:
      return {
        ...state,
        featureEnabled: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

