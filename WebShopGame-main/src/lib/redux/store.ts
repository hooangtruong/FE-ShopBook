import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/AuthReducer";
import userReducer from "./user/UserReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

const store = configureStore({
  reducer: rootReducer,
});
export default store;
