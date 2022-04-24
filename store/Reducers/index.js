import { combineReducers } from "redux";
import LoginUserReducer from "./Auth/User/Login";
import RegisterUserReducer from "./Auth/User/Register";
import RegisterCompanyReducer from "./Auth/Company/Register";
import LoginCompanyReducer from "./Auth/Company/Login";
import GetCompanyFromSlug from "./Auth/Company/GetCompanyFromSlug";
import AppLoadingReducer from "./Utils/AppLoading";
import EmailActivationReducer from "./Auth/User/UserEmailValidation";
import GetTopicsReducer from "./Topics/GetTopics";
import GetUserFromSlug from "./Auth/User/GetUserFromSlug";
import AddTopicResourceReducer from "./Topics/AddTopicResource";
import UpdateCompanyPlan from "./Auth/Company/UpdateCompanyPlan";
import UpdateUserPlan from "./Auth/User/UserCompletePayment";
import ResendUserAccountActivation from "./Auth/User/ResendUserAccountActivationEmail";
import UpdateUserProfileReducer from "./Profile/User/Update";
import SponsorshipReducer from "./Service/Sponsorship";
import ContactUsReducer from "./Service/ContactUs";
import AppToast from "./Utils/Toast";



const reducers = combineReducers({
    LoginUserReducer,
    RegisterUserReducer,
    AppLoadingReducer,
    EmailActivationReducer,
    GetTopicsReducer,
    GetUserFromSlug,
    UpdateUserProfileReducer,
    AddTopicResourceReducer,
    RegisterCompanyReducer,
    LoginCompanyReducer,
    GetCompanyFromSlug,
    UpdateCompanyPlan,
    UpdateUserPlan,
    ResendUserAccountActivation,
    SponsorshipReducer,
    ContactUsReducer,
    AppToast
});


export default reducers;