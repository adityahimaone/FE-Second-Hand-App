import RoutesPage from "./routes";
import { store, persistor } from "./store/store";
import { Provider } from "react-redux";
import React from "react";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate Loading={null} persistor={persistor}>
        <RoutesPage />
      </PersistGate>
    </Provider>
  );
}

export default App;
