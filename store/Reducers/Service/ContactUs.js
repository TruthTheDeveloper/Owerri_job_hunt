import { CONTACT_US_ERROR, CONTACT_US_SUCCESS, RESET_CONTACT_US } from "../../Actions/Service/ContactUs";

  
  const initialState = {
    error: false,
    success: false,
    message: "",
  };
  
  const ContactUsReducer = (state = initialState, action) => {
    switch (action.type) {
      case CONTACT_US_ERROR:
        return {
          ...state,
          error: true,
          success: false,
          message: action.payload.message,
        };
      case CONTACT_US_SUCCESS:
        return {
          ...state,
          message: action.payload.message,
          error: false,
          success: true,
        };
      case RESET_CONTACT_US:
        return {
          error: false,
          success: false,
          message: "",
        };
      default:
        return state;
    }
  };
  
  export default ContactUsReducer;
  