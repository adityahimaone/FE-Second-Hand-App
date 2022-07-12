import { combineReducers } from "redux";
import loginReducer from "./authReducer";
import registerReducer from "./registerReducer";
import allProductReducer from "./allProductReducer";
import productByIdReducer from "./productByIdReducer";
import allProductCategoriesReducer from "./allProductCategoriesReducer";
import profileReducer from "./profileReducer";
import offerReducer from "./offeringReducer";
import notificationReducer from "./notificationReducer";
import notificationByIDReducer from "./notificationByIDReducer";
import acceptReducer from "./acceptReducer";

export default combineReducers({
  login: loginReducer,
  register: registerReducer,
  all_product: allProductReducer,
  product_by_id: productByIdReducer,
  all_product_categories: allProductCategoriesReducer,
  profile: profileReducer,
  offer: offerReducer,
  notification: notificationReducer,
  notification_by_id: notificationByIDReducer,
  acceptNegotation: acceptReducer,
});
