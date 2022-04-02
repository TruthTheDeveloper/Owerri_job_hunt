import { GET_TOPICS_ERROR, GET_TOPICS_RESET, GET_TOPICS_SUCCESS } from "../../Actions/Topic/GetTopics";

  
  const initialState = {
    topics: [],
    error: false,
    success: false,
    message: "",
    loading:true
  };
  
  const GetTopicReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_TOPICS_ERROR:
        return {
          ...state,
          topics: [],
          error: true,
          success: false,
          message: action.payload.message,
          loading:false
        };
      case GET_TOPICS_SUCCESS:
        return {
          ...state,
          topics: action.payload.topics,
          message: action.payload.message,
          error: false,
          success: true,
          loading:false
        };
      case GET_TOPICS_RESET:
        return {
          topics: [],
          error: false,
          success: false,
          message: "",
          loading:true
        };
      default:
        return state;
    }
  };
  
  export default GetTopicReducer;
  