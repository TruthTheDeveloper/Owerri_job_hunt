import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  RESET_LOGIN,
} from "../../../Actions/Auth/User/Login";

const initialState = {
  user: [],
  error: false,
  success: false,
  message: "",
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ERROR:
      return {
        ...state,
        user: [],
        error: true,
        success: false,
        message: action.payload.message,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        message: action.payload.message,
        error: false,
        success: true,
      };
    case RESET_LOGIN:
      return {
        user: [],
        error: false,
        success: false,
        message: "",
      };
    default:
      return state;
  }
};

export default LoginReducer;
