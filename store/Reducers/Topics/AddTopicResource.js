import {
  ADD_RESOURCE_TOPICS_ERROR,
  ADD_RESOURCE_TOPICS_RESET,
  ADD_RESOURCE_TOPICS_SUCCESS,
} from "../../Actions/Topic/AddTopicResource";

const initialState = {
  resource: [],
  error: false,
  success: false,
  message: "",
};

const AddTopicResourceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RESOURCE_TOPICS_ERROR:
      return {
        ...state,
        resource: [],
        error: true,
        success: false,
        message: action.payload.message,
      };
    case ADD_RESOURCE_TOPICS_SUCCESS:
      return {
        ...state,
        resource: action.payload.resource,
        message: action.payload.message,
        error: false,
        success: true,
      };
    case ADD_RESOURCE_TOPICS_RESET:
      return {
        ...state,
        resource: [],
        message: "",
        error: false,
        success: true,
      };
    default:
      return state;
  }
};

export default AddTopicResourceReducer;
