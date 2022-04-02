
import requestParamsParser from "../../../misc/helpers/requestParamsParser";
import AppLoadingDispatcher from "../Utils/AppLoading";
import { BACKEND_DOMAIN } from "../../../misc/helpers/Backend";
import { CONTACT_US_ERROR, CONTACT_US_SUCCESS, RESET_CONTACT_US } from "../../Actions/Service/ContactUs";

let URL = `${BACKEND_DOMAIN}users/send-user-contact-us-email`;

let ERROR = false;

const ContactUsDispatcher = (data) => async (dispatch) => {
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
    .then( async (data) => {
      if (ERROR) {
        dispatch({
          type: CONTACT_US_ERROR,
          payload: { message: data.message },
        });
      } else {
          dispatch({
            type: CONTACT_US_SUCCESS,
            payload: { message: data.message, user: data.data.user },
        }, 3000);
        
      }
    })
    .catch((err) => {
      dispatch(AppLoadingDispatcher(false));
      dispatch({
        type: CONTACT_US_ERROR,
        payload: { message: err.message },
      });
    });
};

export const resetContactUsState = () => (dispatch) => {
  dispatch({ type: RESET_CONTACT_US });
};
export default ContactUsDispatcher;
