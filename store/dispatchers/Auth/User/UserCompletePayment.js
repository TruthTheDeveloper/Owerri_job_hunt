import { RESET_UPDATE_USER_PLAN, UPDATE_USER_PLAN_ERROR } from "../../../Actions/Auth/UserCompletePayment";
import { BACKEND_DOMAIN } from "../../../../misc/helpers/Backend";
import requestParamsParser from "../../../../misc/helpers/requestParamsParser";
import AppLoadingDispatcher from "../../Utils/AppLoading";


let ERROR = false;

const UpdateCompanyPlan = () => async (dispatch, getState) => {
  dispatch(AppLoadingDispatcher(true));
  let URL = `${BACKEND_DOMAIN}users/updateUserPayment`;
  const data = {
      userID:getState().GetUserFromSlug.user.id
  };

  console.log(data);

  let params = requestParamsParser("PATCH", getState().GetUserFromSlug.token, data);
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
          type: UPDATE_USER_PLAN_ERROR,
          payload: { message: data.message },
        });
      } else {
        window.location.reload()
      }
    })
    .catch((err) => {
      dispatch(AppLoadingDispatcher(false));
      dispatch({
        type: RESET_UPDATE_USER_PLAN,
        payload: { message: err.message },
      });
    });
};

export const resetLoginStoreState = () => (dispatch) => {
  dispatch({ type: RESET_UPDATE_USER_PLAN });
};
export default UpdateCompanyPlan;
