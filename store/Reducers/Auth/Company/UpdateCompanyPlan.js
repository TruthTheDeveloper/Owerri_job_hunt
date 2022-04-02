import {
  RESET_UPDATE_COMPANY_PLAN,
  UPDATE_COMPANY_PLAN_ERROR,
  UPDATE_COMPANY_PLAN_SUCCESS,
} from "../../../Actions/Auth/Company/UpdateCompanyPlan";

const initialState = {
  error: false,
  success: false,
  message: "",
};

const UpdateCompanyPlan = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COMPANY_PLAN_ERROR:
      return {
        ...state,
        error: true,
        success: false,
        message: action.payload.message,
      };
    case UPDATE_COMPANY_PLAN_SUCCESS:
      window.location.reload();
    case RESET_UPDATE_COMPANY_PLAN:
      return {
        error: false,
        success: false,
        message: "",
      };
    default:
      return state;
  }
};

export default UpdateCompanyPlan;
