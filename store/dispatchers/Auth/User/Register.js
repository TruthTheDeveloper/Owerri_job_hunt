import { REGISTER_ERROR, REGISTER_SUCCESS } from "../../../Actions/Auth/User/Register";
import requestParamsParser from "../../../../misc/helpers/requestParamsParser";
import AppLoadingDispatcher from "../../Utils/AppLoading";
import Toast from "../../Utils/Toast";
import { BACKEND_DOMAIN } from "../../../../misc/helpers/Backend";

let URL = `${BACKEND_DOMAIN}api/user/candidate/register`;

let ERROR = false;

console.log()

const RegisterUserDispatcher = (data) => async (dispatch) => {
  dispatch(AppLoadingDispatcher(true));

  let params = requestParamsParser("POST", null, data);
  try{
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
          type: REGISTER_ERROR,
          payload: { message: data.message },
        });
        console.log(data, 'err data')
        dispatch(Toast({ error:true, message: data.message }));
      } else {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: { message: data.message, user: data.data.user },
        });
        console.log(data, 'data data')
        
        dispatch(Toast({ error:false, message: data.message }));
      }
    })
    .catch((err) => {
      dispatch(AppLoadingDispatcher(false));
      dispatch({
        type: REGISTER_ERROR,
        payload: { message: err.message },
      });

      console.log(err, 'err')
      dispatch(Toast({ error:false, message: err.message }));

    });
  }catch(e){
    console.log(e, 'err another')
    dispatch(Toast({ error:false, message: "Error Making Request" }));
  }
  
};

export default RegisterUserDispatcher;

