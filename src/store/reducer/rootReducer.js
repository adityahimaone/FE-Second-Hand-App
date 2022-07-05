import { combineReducers } from "redux";
import loginReducer from "./authReducer";
import registerReducer from "./registerReducer";
import allProductReducer from "./allProductReducer";
import productByIdReducer from "./productByIdReducer";

export default combineReducers({
  login: loginReducer,
  register: registerReducer,
  all_product: allProductReducer,
  product_by_id: productByIdReducer,
});
