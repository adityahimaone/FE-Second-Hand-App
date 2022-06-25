import { combineReducers } from "redux";
import loginReducer from "./authReducer";
import registerReducer from "./registerReducer";

export default combineReducers({
  login: loginReducer,
  register: registerReducer,
});
