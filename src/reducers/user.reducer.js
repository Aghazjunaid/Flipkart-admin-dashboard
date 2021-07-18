import { userContants } from "../actions/constants";

const initState = {
  error: null,
  message: "",
  loading: false,
  users: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case userContants.USER_REGISTER_REQUEST:
      debugger;
      state = {
        ...state,
        loading: true,
      };
      break;
    case userContants.USER_REGISTER_SUCCESS:
      debugger;
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
      break;
    case userContants.USER_REGISTER_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    case userContants.GET_ALL_USERS_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case userContants.GET_ALL_USERS_SUCCESS:
      state = {
        ...state,
        loading: false,
        users : action.payload.usertList
      };
      break;
    case userContants.GET_ALL_USERS_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
  }

  return state;
};
