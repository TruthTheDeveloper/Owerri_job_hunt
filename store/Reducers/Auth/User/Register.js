import { REGISTER_ERROR, REGISTER_SUCCESS } from "../../../Actions/Auth/User/Register"



const initialState = {
    user:[],
    error:false,
    success:false,
    message:"",
}


const RegisterReducer = (state=initialState, action)=>{
    switch(action.type){
        case REGISTER_ERROR:
            return {
                ...state,
                user:[],
                error:true,
                success:false,
                message:action.payload.message
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                user:action.payload.user,
                message:action.payload.message,
                error:false,
                success:true
            }
        default: return state
    }
}

export default RegisterReducer;