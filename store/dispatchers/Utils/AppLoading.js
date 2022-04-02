import { APP_NOT_LOADING, APP_LOADING } from "../../Actions/Utils/AppLoading"




const AppLoadingDispatcher = (state)=>((dispatch)=>{state ? dispatch({type: APP_LOADING}) :dispatch({ type: APP_NOT_LOADING});}
);


export default AppLoadingDispatcher;