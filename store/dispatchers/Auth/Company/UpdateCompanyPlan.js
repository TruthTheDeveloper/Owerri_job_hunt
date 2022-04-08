import requestParamsParser from "../../../../misc/helpers/requestParamsParser";
import AppLoadingDispatcher from "../../Utils/AppLoading";
import { BACKEND_DOMAIN } from "../../../../misc/helpers/Backend";
import { RESET_UPDATE_COMPANY_PLAN, UPDATE_COMPANY_PLAN_ERROR, UPDATE_COMPANY_PLAN_SUCCESS } from "../../../Actions/Auth/Company/UpdateCompanyPlan";
import Toast from "../../Utils/Toast";



let ERROR = false;

const UpdateCompanyPlan = (data) => async (dispatch, getState) => {
  dispatch(AppLoadingDispatcher(true));
  let URL = `${BACKEND_DOMAIN}api/user/company/updatePlan`;

  let params = requestParamsParser("PATCH", getState().GetCompanyFromSlug?.token, data);
  await fetch(URL, params)
    .then((res) => {
      dispatch(AppLoadingDispatcher(false));
      if (res.status > 299) {
        ERROR = true;
      } else {
        ERROR = false;
      }
      return res.json();
    })
    .then((data) => {
      dispatch(AppLoadingDispatcher(false));
      if (ERROR) {
        dispatch({
          type: UPDATE_COMPANY_PLAN_ERROR,
          payload: { message: data.message },
        });
        dispatch(Toast({ error:true, message: data.message }));

      } else {
        dispatch({
          type: UPDATE_COMPANY_PLAN_SUCCESS,
            payload: {
                message: data.message, company: data.data.company,
                token: data.data.token, isActive: data.data.company.company_is_active
            },
        });
        dispatch(Toast({ error:false, message:"CompanyPayment Completed" }));
        setTimeout(() => {
          window.location.reload();
      }, 5000);
      }
    })
    .catch((err) => {
      dispatch(AppLoadingDispatcher(false));
      dispatch({
        type: RESET_UPDATE_COMPANY_PLAN,
        payload: { message: err.message },
      });
      dispatch(Toast({ error:true, message: err.message }));

    });
};

export const resetLoginStoreState = () => (dispatch) => {
  dispatch({ type: RESET_UPDATE_COMPANY_PLAN });
};
export default UpdateCompanyPlan;
