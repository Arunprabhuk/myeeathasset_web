import {
  CLEAR_ALL_STATE,
  DISABLE_IMAGE_SLIDER,
  ENABLE_IMAGE_SLIDER,
  FETCH_ADMIN_USER_DETAILS,
  GET_ADMIN_USER_DATA,
  GET_ALL_USER_ASSETS_SUCESSFULLY,
  GET_ALL_USER_SUCESSFULLY,
  LOGIN_ADMIN_USER_DATA_SUCCESSFULLY,
  SEND_ADMIN_USER_DATA,
  SEND_ADMIN_USER_DATA_PENDING,
  SEND_ADMIN_USER_DATA_SUCCESSFULLY,
} from "../actionType";

const intialState = {
  allUserDetails: [],
  allUserAssetsDetails: [],
  enableSlider: false,
  id: null,
  adminDetails: [],
  isLoading: false,
  isLoggedin: false,
  admin: [],
};
export const userDetailsReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_ALL_USER_SUCESSFULLY:
      return {
        ...state,
        allUserDetails: action.payload,
      };
    case GET_ALL_USER_ASSETS_SUCESSFULLY:
      return {
        ...state,
        allUserAssetsDetails: action.payload,
      };
    case ENABLE_IMAGE_SLIDER:
      return {
        ...state,
        enableSlider: true,
        id: action.payload,
      };
    case DISABLE_IMAGE_SLIDER:
      return {
        ...state,
        enableSlider: false,
        id: null,
      };
    case LOGIN_ADMIN_USER_DATA_SUCCESSFULLY:
      return {
        ...state,
        adminDetails: action.payload,
        isLoggedin: true,
      };
    case SEND_ADMIN_USER_DATA_SUCCESSFULLY:
      return {
        ...state,
        isLoading: false,
      };
    case SEND_ADMIN_USER_DATA_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_ADMIN_USER_DETAILS:
      return {
        ...state,
        admin: action.payload,
      };
    case CLEAR_ALL_STATE:
      return {
        ...state,
        admin: [],
        adminDetails: [],
        isLoggedin: false,
      };

    default:
      return state;
  }
};
