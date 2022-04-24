import requestParamsParser from "../../../../misc/helpers/requestParamsParser";
import AppLoadingDispatcher from "../../Utils/AppLoading";
import Toast from "../../Utils/Toast";
import { BACKEND_DOMAIN } from "../../../../misc/helpers/Backend";
import { UPDATE_USER_PROFILE_ERROR, UPDATE_USER_PROFILE_SUCCESS } from "../../../Actions/Profile/User/Update";

let URL = `${BACKEND_DOMAIN}api/user/candidate/user-update-profile`;

let ERROR = false;


const UpdateUserProfileDispatcher = (data) => async (dispatch, getState) => {
  dispatch(AppLoadingDispatcher(true));
  console.log("FormData"+data)
  try{
    
    await fetch(URL, {
      method:"PUT",
      headers:{
        "Authorization":`Token ${getState().GetUserFromSlug.token}`
      },
      body:data
    })
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
          type: UPDATE_USER_PROFILE_ERROR,
          payload: { message: data.message },
        });
        dispatch(Toast({ error:true, message: data.message }));

      } else {

        dispatch({
          type: UPDATE_USER_PROFILE_SUCCESS,
          payload: { message: data.message, user: data.data.user },
        });
        
        dispatch(Toast({ error:false, message: data.message }));
      }
    })
    .catch((err) => {
      dispatch(AppLoadingDispatcher(false));
      dispatch({
        type: UPDATE_USER_PROFILE_ERROR,
        payload: { message: err.message },
      });

      dispatch(Toast({ error:false, message: err.message }));

    });
  }catch(e){
    dispatch(Toast({ error:false, message: "Error Making Request" }));
  }
  
};

export default UpdateUserProfileDispatcher;

