
import requestParamsParser from "../../../misc/helpers/requestParamsParser";
import AppLoadingDispatcher from "../Utils/AppLoading";
import { BACKEND_DOMAIN } from "../../../misc/helpers/Backend";
import { GET_TOPICS_ERROR, GET_TOPICS_RESET, GET_TOPICS_SUCCESS } from "../../Actions/Topic/GetTopics";

let URL = `${BACKEND_DOMAIN}topics/`;

let ERROR = false;

const GetTopicsDispatcher = () => async (dispatch, getState) => {

  let params = requestParamsParser("GET", getState().GetUserFromSlug.token, null, );
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
          type: GET_TOPICS_ERROR,
          payload: { message: data.message },
        });
      } else {
        dispatch({
          type: GET_TOPICS_SUCCESS,
          payload: { message: data.message, topics: data.data.topics },
        });
      }
    })
    .catch((err) => {
      dispatch(AppLoadingDispatcher(false));
      dispatch({
        type: GET_TOPICS_ERROR,
        payload: { message: err.message },
      });
    });
};

export const resetTopicStore = () => (dispatch) => {
  dispatch({ type: GET_TOPICS_RESET });
};
export default GetTopicsDispatcher;
