import requestParamsParser from "../../../../misc/helpers/requestParamsParser";
import AppLoadingDispatcher from "../../Utils/AppLoading";
import { BACKEND_DOMAIN } from "../../../../misc/helpers/Backend";
import { GET_COMPANY_SLUG } from "../../../../misc/helpers/authTokenManager";
import { GET_COMPANY_ERROR, GET_COMPANY_SUCCESS, RESET_GET_COMPANY }
    from "../../../Actions/Auth/Company/GetCompanyFromSlug";
import Toast from "../../Utils/Toast";


let ERROR = false;

const GetCompanyFromSlug = (data) => async (dispatch) => {
  dispatch(AppLoadingDispatcher(true));
  let URL = `${BACKEND_DOMAIN}api/user/company/getCompanyBySlug/${data}`;

  let params = requestParamsParser("GET", null, null);
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
          type: GET_COMPANY_ERROR,
          payload: { message: data.message },
        });
      } else {
        dispatch({
          type: GET_COMPANY_SUCCESS,
            payload: {
                message: data.message, company: data.data.company,
                token: data.data.token, isActive: data.data.company.company_is_active
            },
        });
      }
    })
    .catch((err) => {
      dispatch(AppLoadingDispatcher(false));
      dispatch({
        type: GET_COMPANY_ERROR,
        payload: { message: err.message },
      });
    });
};

export const resetLoginStoreState = () => (dispatch) => {
  dispatch({ type: RESET_GET_COMPANY });
};
export default GetCompanyFromSlug;
