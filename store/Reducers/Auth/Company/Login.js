import { LOGIN_COMPANY_ERROR, LOGIN_COMPANY_SUCCESS, RESET_COMPANY_LOGIN } from "../../../Actions/Auth/Company/Login";

  
  const initialState = {
    user: [],
    error: false,
    success: false,
    message: "",
  };
  
  const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_COMPANY_ERROR:
        return {
          ...state,
          user: [],
          error: true,
          success: false,
          message: action.payload.message,
        };
      case LOGIN_COMPANY_SUCCESS:
        return {
          ...state,
          user: action.payload.user,
          message: action.payload.message,
          error: false,
          success: true,
        };
      case RESET_COMPANY_LOGIN:
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
  