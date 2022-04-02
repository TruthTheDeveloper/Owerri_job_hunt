import requestParamsParser from "../../../../misc/helpers/requestParamsParser";
import AppLoadingDispatcher from "../../Utils/AppLoading";
import { BACKEND_DOMAIN } from "../../../../misc/helpers/Backend";
import {
  LOGIN_COMPANY_ERROR,
  LOGIN_COMPANY_SUCCESS,
  RESET_COMPANY_LOGIN,
} from "../../../Actions/Auth/Company/Login";
import { SAVE_COMPANY_SLUG } from "../../../../misc/helpers/authTokenManager";
import Toast from "../../Utils/Toast";

let URL = `${BACKEND_DOMAIN}api/user/company/login`;

let ERROR = false;

const RegisterCompanyDispatcher = (data) => async (dispatch) => {
  dispatch(AppLoadingDispatcher(true));

  let params = requestParamsParser("POST", null, data);
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
    .then(async (data) => {
      if (ERROR) {
        dispatch({
          type: LOGIN_COMPANY_ERROR,
          payload: { message: data.message },
        });
        dispatch(Toast({ error: true, message: data.message }));
      } else {
        await SAVE_COMPANY_SLUG(data.data.company.company_slug);
        dispatch({
          type: LOGIN_COMPANY_SUCCESS,
          payload: { message: data.message, user: data.data.user },
        });
        dispatch(Toast({ error: false, message: data.message }));
      }
    })
    .catch((err) => {
      dispatch(AppLoadingDispatcher(false));
      dispatch({
        type: LOGIN_COMPANY_ERROR,
        payload: { message: err.message },
      });
      dispatch(Toast({ error: true, message: err.message }));
    });
};

export const resetLoginCompanyStoreState = () => (dispatch) => {
  dispatch({ type: RESET_COMPANY_LOGIN });
};

export default RegisterCompanyDispatcher;
