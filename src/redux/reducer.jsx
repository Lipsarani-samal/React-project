import { SET_USER_DATA } from "./actionTypes";

const initialState = {
  userData: [], // Change from [] to {} to store all the objects in a single Object.
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        userData: [...state.userData, action.payload], // Append new data to the array
      };
    default:
      return state;
  }
};

export default rootReducer;

