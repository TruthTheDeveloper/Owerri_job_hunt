import requestParamsParser from "../../../../misc/helpers/requestParamsParser";
import AppLoadingDispatcher from "../../Utils/AppLoading";
import { BACKEND_DOMAIN } from "../../../../misc/helpers/Backend";
import {
  GET_USER_ERROR,
  GET_USER_SUCCESS,
  RESET_GET_USER,
} from "../../../Actions/Auth/User/GetUserFromSlug";
import { GET_USER_SLUG } from "../../../../misc/helpers/authTokenManager";
import Toast from "../../Utils/Toast";




let ERROR = false;

const GetUserFromSlugDispatcher = () => async (dispatch) => {
  dispatch(AppLoadingDispatcher(true));
  let slug = await GET_USER_SLUG();
  let URL = `${BACKEND_DOMAIN}api/user/candidate/getUserFromSlug/${slug}`;

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
          type: GET_USER_ERROR,
          payload: { message: data.message },
        });
        dispatch(Toast({ error: true, message: data.message }));
        window.location.href = "/logout";

      } else {
        dispatch({
          type: GET_USER_SUCCESS,
          payload: {
            message: data.message,
            user: data.data.user,
            token: data.data.token,
          },
        });
      }
    })
    .catch((err) => {
      dispatch(AppLoadingDispatcher(false));
      dispatch(Toast({ error: true, message: "Error Verifying User"}));
      window.location.href = "/logout";
      dispatch({
        type: GET_USER_ERROR,
        payload: { message: err.message },
      });
    });
};

export const resetLoginStoreState = () => (dispatch) => {
  dispatch({ type: RESET_GET_USER });
};
export default GetUserFromSlugDispatcher;
