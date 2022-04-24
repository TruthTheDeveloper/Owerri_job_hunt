import { UPDATE_USER_PROFILE_ERROR, UPDATE_USER_PROFILE_SUCCESS } from "../../../Actions/Profile/User/Update"



const initialState = {
    profile:[],
    error:false,
    success:false,
    message:"",
}


const UpdateUserProfileReducer = (state=initialState, action)=>{
    switch(action.type){
        case UPDATE_USER_PROFILE_ERROR:
            return {
                ...state,
                profile:[],
                error:true,
                success:false,
                message:action.payload.message
            }
        case UPDATE_USER_PROFILE_SUCCESS:
            return {
                ...state,
                profile:action.payload.profile,
                message:action.payload.message,
                error:false,
                success:true
            }
        default: return state
    }
}

export default UpdateUserProfileReducer;