import { GET_USER_ERROR, GET_USER_SUCCESS, RESET_GET_USER } from "../../../Actions/Auth/User/GetUserFromSlug";

  
  const initialState = {
    user: [],
    error: false,
    success: false,
    token:"",
    message: "",
  };
  
  const GetUserFromSlugReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_USER_ERROR:
        return {
          ...state,
          user: [],
          error: true,
          success: false,
          token:"",
          message: action.payload.message,
        };
      case GET_USER_SUCCESS:
        return {
          ...state,
          user: action.payload.user,
          message: action.payload.message,
          error: false,
          token:action.payload.token,
          success: true,
        };
      case RESET_GET_USER:
        return {
          user: [],
          error: false,
          success: false,
          token:"",
          message: "",
        };
      default:
        return state;
    }
  };
  
  export default GetUserFromSlugReducer;
  