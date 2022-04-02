import { APP_TOAST } from "../../Actions/Utils/Toast";





const  AppLoadingDispatcher = (state)=>((dispatch)=>{
    dispatch({
        type:APP_TOAST,
        payload: { error:state.error, message: state.message }
    })
}
);


export default AppLoadingDispatcher;