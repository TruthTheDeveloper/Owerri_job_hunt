import requestParamsParser from "../../../misc/helpers/requestParamsParser";
import { BACKEND_DOMAIN } from "../../../misc/helpers/Backend";
import {
  ADD_RESOURCE_TOPICS_ERROR,
  ADD_RESOURCE_TOPICS_RESET,
  ADD_RESOURCE_TOPICS_SUCCESS,
} from "../../Actions/Topic/AddTopicResource";

let ERROR = false;

const AddTopicResourceDispatcher = (data) => async (dispatch, getState) => {
  let URL = `${BACKEND_DOMAIN}topics/${data.resource}/`;

  let params = requestParamsParser(
    "POST",
    getState().GetUserFromSlug.token,
    data
  );
  await fetch(URL, params)
    .then((res) => {
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
          type: ADD_RESOURCE_TOPICS_ERROR,
          payload: { message: data.message },
        });
      } else {
        dispatch({
          type: ADD_RESOURCE_TOPICS_SUCCESS,
          payload: { message: data.message, resource: data.data.resource },
        });
      }
    })
    .catch((err) => {
      dispatch({
        type: ADD_RESOURCE_TOPICS_ERROR,
        payload: { message: err.message },
      });
    });
};

export const resetTopicStore = () => (dispatch) => {
  dispatch({ type: ADD_RESOURCE_TOPICS_RESET });
};
export default AddTopicResourceDispatcher;
