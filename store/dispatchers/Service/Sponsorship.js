
import requestParamsParser from "../../../misc/helpers/requestParamsParser";
import AppLoadingDispatcher from "../Utils/AppLoading";
import { BACKEND_DOMAIN } from "../../../misc/helpers/Backend";
import { ADD_SPONSORSHIP_ERROR, ADD_SPONSORSHIP_SUCCESS, RESET_ADD_SPONSORSHIP } from "../../Actions/Service/Sponsorship";

let URL = `${BACKEND_DOMAIN}users/add-new-sponsor`;

let ERROR = false;

const AddSponsorShipDispatcher = (data) => async (dispatch) => {
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
          type: ADD_SPONSORSHIP_ERROR,
          payload: { message: data.message },
        });
      } else {
          dispatch({
            type: ADD_SPONSORSHIP_SUCCESS,
            payload: { message: data.message, user: data.data.user },
        }, 3000);
        
      }
    })
    .catch((err) => {
      dispatch(AppLoadingDispatcher(false));
      dispatch({
        type: ADD_SPONSORSHIP_ERROR,
        payload: { message: err.message },
      });
    });
};

export const resetSponsorshipState = () => (dispatch) => {
  dispatch({ type: RESET_ADD_SPONSORSHIP });
};
export default AddSponsorShipDispatcher;
