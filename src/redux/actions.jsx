import { SET_USER_DATA } from "./actionTypes";

export const setUserData = (data) => ({
  type: SET_USER_DATA,
  payload: data,
});
