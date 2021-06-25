import { createReducer } from "@reduxjs/toolkit";
import { getProfileInfo } from "./profileActions";

const profileReducer = createReducer(
  null,
  {
    [getProfileInfo]: (_, action) => action.payload,
  }
);

export {profileReducer}
