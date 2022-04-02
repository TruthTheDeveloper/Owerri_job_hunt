import { REGISTER_COMPANY_ERROR, REGISTER_COMPANY_SUCCESS } from "../../../Actions/Auth/Company/Register"



const initialState = {
    company:[],
    error:false,
    success:false,
    message:"",
}


const RegisterReducer = (state=initialState, action)=>{
    switch(action.type){
        case REGISTER_COMPANY_ERROR:
            return {
                ...state,
                company:[],
                error:true,
                success:false,
                message:action.payload.message
            }
        case REGISTER_COMPANY_SUCCESS:
            return {
                ...state,
                company:action.payload.company,
                message:action.payload.message,
                error:false,
                success:true
            }
        default: return state
    }
}

export default RegisterReducer;