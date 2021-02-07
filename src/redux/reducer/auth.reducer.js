import * as types from '../../types/auth.type';

const initState = {
  loading: false,
};
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case types.REGISTRATION_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    default:
      return state;
  }
  return state;
};

export default authReducer;
