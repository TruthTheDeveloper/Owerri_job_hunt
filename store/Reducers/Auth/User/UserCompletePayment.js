import { RESET_UPDATE_USER_PLAN, UPDATE_USER_PLAN_ERROR, UPDATE_USER_PLAN_SUCCESS } from "../../../Actions/Auth/User/UserCompletePayment";


  
  const initialState = {
    error: false,
    success: false,
    message: "",
  };
  
  const UpdateUserPlan = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_USER_PLAN_ERROR:
        return {
          ...state,
          error: true,
          success: false,
          message: action.payload.message,
        };
      case UPDATE_USER_PLAN_SUCCESS:
        window.location.reload();
      case RESET_UPDATE_USER_PLAN:
        return {
          error: false,
          success: false,
          message: "",
        };
      default:
        return state;
    }
  };
  
  export default UpdateUserPlan;
  