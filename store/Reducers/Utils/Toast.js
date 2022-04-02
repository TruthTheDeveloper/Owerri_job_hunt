import { APP_TOAST, RESET_APP_TOAST } from "../../Actions/Utils/Toast";

const initialState = {
    message:"",
    error:false,
};

const AppLoadingReducer = (state = initialState, action) => {

  switch (action.type) {
    case APP_TOAST:
      return {
        ...state,
        message:action.payload.message,
        error:action.payload.error
      };
    case RESET_APP_TOAST:
      return {
        ...state,
        message:"",
        error:false,
      };
    default:
      return state;
  }
};

export default AppLoadingReducer;
