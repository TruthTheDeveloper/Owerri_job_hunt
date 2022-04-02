import requestParamsParser from "../../../../misc/helpers/requestParamsParser";
import AppLoadingDispatcher from "../../Utils/AppLoading";
import { BACKEND_DOMAIN } from "../../../../misc/helpers/Backend";
import { USER_EMAIL_RESEND_ERROR, USER_EMAIL_RESEND_SUCCESS, USER_EMAIL_RESEND_RESET} from "../../../Actions/Auth/User/ResendUserAccountActivationEmail"
import Toast from "../../Utils/Toast";




let ERROR = false;

const UserReendActivationEmail = (company=false) => async ( dispatch, getState ) => {
  let URL = `${BACKEND_DOMAIN}api/user/candidate/resendUserRegterationEmail/${company? getState().RegisterCompanyReducer.company.registered_by.id:getState().RegisterUserReducer.user.id}`;
  dispatch(AppLoadingDispatcher(true));

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
          type: USER_EMAIL_RESEND_ERROR,
          payload: { message: data.message },
        });
        dispatch(Toast({ error:true, message: data.message }));
        
      } else {
        dispatch({
          type: USER_EMAIL_RESEND_SUCCESS,
          payload: { message: data.message},
        });
        dispatch(Toast({ error:true, message: data.message }))

      }
    })
    .catch((err) => {
      dispatch(AppLoadingDispatcher(false));
      dispatch({
        type: USER_EMAIL_RESEND_ERROR,
        payload: { message: err.message },
      });
      dispatch(Toast({ error:true, message: err.message }))

    });
};

export const resetEmailActivationStoreState = () => (dispatch) => {
  dispatch({ type: USER_EMAIL_RESEND_RESET });
};
export default UserReendActivationEmail;
