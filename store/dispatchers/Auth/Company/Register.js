import requestParamsParser from "../../../../misc/helpers/requestParamsParser";
import AppLoadingDispatcher from "../../Utils/AppLoading";
import { BACKEND_DOMAIN } from "../../../../misc/helpers/Backend";
import { REGISTER_COMPANY_ERROR, REGISTER_COMPANY_SUCCESS } from "../../../Actions/Auth/Company/Register";
import Toast from "../../Utils/Toast";



let URL = `${BACKEND_DOMAIN}api/user/company/register`;

let ERROR = false;

const RegisterCompanyDispatcher = (data) => async (dispatch) => {
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
    .then((data) => {
      console.log(data)
      if (ERROR) {
        dispatch({
          type: REGISTER_COMPANY_ERROR,
          payload: { message: data.message },
        });
        dispatch(Toast({ error:true, message:data.message}));

        console.log(data, 'the data')
      } else {
        dispatch({
          type: REGISTER_COMPANY_SUCCESS,
          payload: { message: data.message, company: data.data.company },
        });
        dispatch(Toast({ error:false, message:data.message}));

      }
    })
    .catch((err) => {
      dispatch(AppLoadingDispatcher(false));
      dispatch({
        type: REGISTER_COMPANY_ERROR,
        payload: { message: err.message },
      });
      dispatch(Toast({ error:true, message:err.message}));

      console.log(err, 'another error')

    });
};

export default RegisterCompanyDispatcher;

