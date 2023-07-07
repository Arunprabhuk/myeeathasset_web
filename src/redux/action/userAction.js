import { css } from "@emotion/react";
import { useService } from "../../helpers/useService";
import {
  FETCH_ADMIN_USER_DETAILS,
  GET_ADMIN_USER_DATA,
  GET_ALL_USER_ASSETS_SUCESSFULLY,
  GET_ALL_USER_SUCESSFULLY,
  LOGIN_ADMIN_USER_DATA_FAILED,
  LOGIN_ADMIN_USER_DATA_PENDING,
  LOGIN_ADMIN_USER_DATA_SUCCESSFULLY,
  SEND_ADMIN_USER_DATA,
  SEND_ADMIN_USER_DATA_PENDING,
  SEND_ADMIN_USER_DATA_SUCCESSFULLY,
} from "../actionType";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
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
  };
};
const fetchAdminuserfailed = () => {
  return {
    type: LOGIN_ADMIN_USER_DATA_FAILED,
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
        toast.success(result.message, {
          position: toast.POSITION.TOP_RIGHT,
          pauseOnHover: false,
          autoClose: 2000,
        });
        dispatch(sendAdminUser());
      }
      if (result.statuscode === 400) {
        toast.error(result.message, {
          position: toast.POSITION.TOP_RIGHT,
          pauseOnHover: false,
          autoClose: 2000,
        });
        dispatch(sendAdminUser());
      }
      if (result.statuscode === 401) {
        toast.error(result.error, {
          position: toast.POSITION.TOP_RIGHT,
          pauseOnHover: false,
          autoClose: 2000,
        });
        dispatch(sendAdminUser());
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const loginAdminUser = (data) => {
  return async (dispatch) => {
    dispatch(fetchAdminuserPending());
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
        toast.success(result.message, {
          position: toast.POSITION.TOP_RIGHT,
          pauseOnHover: false,
          autoClose: 2000,
        });

        return result.user;
      }
      if (result.statuscode === 400) {
        dispatch(fetchAdminuserfailed());
        toast.error(result.message, {
          position: toast.POSITION.TOP_RIGHT,
          pauseOnHover: false,
          autoClose: 2000,
        });
      }
      if (result.statuscode === 401) {
        dispatch(fetchAdminuserfailed());
        toast.error(result.error, {
          position: toast.POSITION.TOP_RIGHT,
          pauseOnHover: false,
          autoClose: 2000,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
