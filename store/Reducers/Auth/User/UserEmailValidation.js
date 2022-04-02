import { USER_EMAIL_VALIDATION_ERROR, USER_EMAIL_VALIDATION_SUCCESS, USER_EMAIL_VALIDATION_RESET } from "../../../Actions/Auth/User/UserEmailValidation"

const initialState = {
    message:"",
    error:false,
    user:{},

}


const EmailActivation = (state= initialState, action)=>{
    switch(action.type){
        case USER_EMAIL_VALIDATION_ERROR:
            return {
                ...state,
                message:action.payload.message,
                error:true,
                user:{},
            }
        case USER_EMAIL_VALIDATION_SUCCESS:
            return {
                ...state,
                message:action.payload.message,
                error:false,
                user:action.payload.user
            }
        case USER_EMAIL_VALIDATION_RESET:
            return {
                ...state,
                message:'',
                error:false,
                user:{}
            }
        default: return state;
    }
}


export default EmailActivation;