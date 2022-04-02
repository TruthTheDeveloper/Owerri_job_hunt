import { USER_EMAIL_RESEND_ERROR, USER_EMAIL_RESEND_RESET, USER_EMAIL_RESEND_SUCCESS } from "../../../Actions/Auth/User/ResendUserAccountActivationEmail"

const initialState = {
    message:"",
    error:false,

}


const ResendUserAccountActivation = (state= initialState, action)=>{
    switch(action.type){
        case USER_EMAIL_RESEND_ERROR:
            return {
                ...state,
                message:action.payload.message,
                error:true
            }
        case USER_EMAIL_RESEND_SUCCESS:
            return {
                ...state,
                message:action.payload.message,
                error:false
            }
        case USER_EMAIL_RESEND_RESET:
            return {
                ...state,
                message:'',
                error:false
            }
        default: return state;
    }
}


export default ResendUserAccountActivation;