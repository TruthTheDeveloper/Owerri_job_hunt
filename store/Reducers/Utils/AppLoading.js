import { APP_LOADING, APP_NOT_LOADING } from "../../Actions/Utils/AppLoading";

const initialState = {
  loading: false,
};

const AppLoadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_LOADING:
      return {
        ...state,
        loading: true,
      };
    case APP_NOT_LOADING:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default AppLoadingReducer;
