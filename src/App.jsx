import RoutesPage from "./routes";
import store from "./store/store";
import { Provider } from "react-redux";
import React from "react";

function App() {
  return (
    <Provider store={store}>
      <RoutesPage />
    </Provider>
  );
}

export default App;
