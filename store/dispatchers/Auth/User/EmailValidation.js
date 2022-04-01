import requestParamsParser from "../../../../../misc/helpers/requestParamsParser";
import AppLoadingDispatcher from "../../../Utils/AppLoading";
import { BACKEND_DOMAIN } from "../../../../../misc/helpers/Backend";
import { USER_EMAIL_VALIDATION_ERROR, USER_EMAIL_VALIDATION_RESET, USER_EMAIL_VALIDATION_SUCCESS } from "../../../Actions/Auth/UserEmailValidation";

let ERROR = false;

const EmailValidationDispatcher = (token) => async (dispatch) => {
  let URL = `${BACKEND_DOMAIN}users/complete-user-email-activation/${token}`;
  dispatch(AppLoadingDispatcher(true));
  console.log("From the dispatcher");

  let params = requestParamsParser("GET");
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
      if (ERROR) {
        dispatch({
          type: USER_EMAIL_VALIDATION_ERROR,
          payload: { message: data.message },
        });
      } else {
        dispatch({
          type: USER_EMAIL_VALIDATION_SUCCESS,
          payload: { message: data.message, user: data.data.user},
        });
      }
    })
    .catch((err) => {
      dispatch(AppLoadingDispatcher(false));
      dispatch({
        type: USER_EMAIL_VALIDATION_ERROR,
        payload: { message: err.message },
      });
    });
};

export const resetEmailActivationStoreState = () => (dispatch) => {
  dispatch({ type: USER_EMAIL_VALIDATION_RESET });
};
export default EmailValidationDispatcher;
