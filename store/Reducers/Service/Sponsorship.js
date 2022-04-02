import { ADD_SPONSORSHIP_ERROR, ADD_SPONSORSHIP_SUCCESS, RESET_ADD_SPONSORSHIP } from "../../Actions/Service/Sponsorship";

  
  const initialState = {
    error: false,
    success: false,
    message: "",
  };
  
  const SponsorshipReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_SPONSORSHIP_ERROR:
        return {
          ...state,
          error: true,
          success: false,
          message: action.payload.message,
        };
      case ADD_SPONSORSHIP_SUCCESS:
        return {
          ...state,
          message: action.payload.message,
          error: false,
          success: true,
        };
      case RESET_ADD_SPONSORSHIP:
        return {
          error: false,
          success: false,
          message: "",
        };
      default:
        return state;
    }
  };
  
  export default SponsorshipReducer;
  