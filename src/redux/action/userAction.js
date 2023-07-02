import { useService } from "../../helpers/useService";
import {
  GET_ALL_USER_ASSETS_SUCESSFULLY,
  GET_ALL_USER_SUCESSFULLY,
} from "../actionType";

const fetchAllUserDetailsSuccessful = (data) => {
  return {
    type: GET_ALL_USER_SUCESSFULLY,
    payload: data,
  };
};
const fetchAllUserAssetsSuccessful = (data) => {
  return {
    type: GET_ALL_USER_ASSETS_SUCESSFULLY,
    payload: data,
  };
};

export const fetchAllUserDetails = (id) => {
  return async (dispatch) => {
    console.log(useService());
    try {
      const response = await fetch(`${useService()}/user/getAllUser?id=${id}`);
      const result = await response.json();
      dispatch(fetchAllUserDetailsSuccessful(result.user));
    } catch (error) {
      console.log(error);
    }
  };
};
export const fetchAllUserAssetsDetails = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `${useService()}/user/getAllUserImage?id=${id}`
      );
      const result = await response.json();
      dispatch(fetchAllUserAssetsSuccessful(result.user));
    } catch (error) {
      console.log(error);
    }
  };
};
