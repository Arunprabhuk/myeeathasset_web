import { useService } from "../../helpers/useService";
import {
  FETCH_ADMIN_USER_DETAILS,
  GET_ADMIN_USER_DATA,
  GET_ALL_USER_ASSETS_SUCESSFULLY,
  GET_ALL_USER_SUCESSFULLY,
  LOGIN_ADMIN_USER_DATA_PENDING,
  LOGIN_ADMIN_USER_DATA_SUCCESSFULLY,
  SEND_ADMIN_USER_DATA,
  SEND_ADMIN_USER_DATA_PENDING,
  SEND_ADMIN_USER_DATA_SUCCESSFULLY,
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
const fetchAdminuserSuccessfully = (data) => {
  return {
    type: LOGIN_ADMIN_USER_DATA_SUCCESSFULLY,
    payload: data,
  };
};
const fetchAdminuserPending = (data) => {
  return {
    type: LOGIN_ADMIN_USER_DATA_PENDING,
    payload: data,
  };
};
const fetchAdminUserDetails = (data) => {
  return {
    type: FETCH_ADMIN_USER_DETAILS,
    payload: data,
  };
};
const sendAdminUser = () => {
  return {
    type: SEND_ADMIN_USER_DATA_SUCCESSFULLY,
  };
};
const sendAdminUserpending = () => {
  return {
    type: SEND_ADMIN_USER_DATA_PENDING,
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
export const fetchAdminDetails = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${useService()}/getAdminDetails?id=${id}`);
      const result = await response.json();
      dispatch(fetchAdminUserDetails(result.user));
    } catch (error) {
      console.log(error);
    }
  };
};
export const registerAdminUser = (data) => {
  return async (dispatch) => {
    dispatch(sendAdminUserpending());
    try {
      const response = await fetch(`${useService()}/adminSignUp`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "content-type": "application/json",
        },
      });
      const result = await response.json();
      if (result.statuscode === 200) {
        console.log(result.user, "hello");
        dispatch(sendAdminUser());
        alert(result.message);
      }
      if (result.statuscode === 400) {
        console.log(result.user, "hello");
        alert(result.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const loginAdminUser = (data) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${useService()}/adminSignIn`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "content-type": "application/json",
        },
      });
      const result = await response.json();
      if (result.statuscode === 200) {
        console.log(result.user, "hello");
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("token", result.user.token);
        localStorage.setItem("id", result.user.userId);
        dispatch(fetchAdminuserSuccessfully(result.user));
        alert(result.message);
        return result.user;
      }
      if (result.statuscode === 400) {
        console.log(result.user, "hello");
        alert(result.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
};
