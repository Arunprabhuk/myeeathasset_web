import {
  DISABLE_IMAGE_SLIDER,
  ENABLE_IMAGE_SLIDER,
  GET_ALL_USER_ASSETS_SUCESSFULLY,
  GET_ALL_USER_SUCESSFULLY,
} from "../actionType";

const intialState = {
  allUserDetails: [],
  allUserAssetsDetails: [],
  enableSlider: false,
  id: null,
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

    default:
      return state;
  }
};
