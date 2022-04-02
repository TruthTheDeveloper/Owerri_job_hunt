import { GET_COMPANY_ERROR, GET_COMPANY_SUCCESS, RESET_GET_COMPANY } from "../../../Actions/Auth/Company/GetCompanyFromSlug";


const initialState = {
    company: [],
    error: false,
    success: false,
    isActive: false,
    token: "",
    message: "",
    loading:true,
};

const GetUserFromSlugReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COMPANY_ERROR:
            return {
                ...state,
                company: [],
                error: true,
                success: false,
                token: "",
                isActive: false,
                loading:false,
                message: action.payload.message,
            };
        case GET_COMPANY_SUCCESS:
            return {
                ...state,
                company: action.payload.company,
                message: action.payload.message,
                isActive: action.payload.isActive,
                error: false,
                token: action.payload.token,
                success: true,
                loading:false,

            };
        case RESET_GET_COMPANY:
            return {
                company: [],
                error: false,
                success: false,
                token: "",
                message: "",
                isActive: false,
                loading:true,
            };
        default:
            return state;
    }
};

export default GetUserFromSlugReducer;
