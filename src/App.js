import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import InboxScreen from "./components/InboxScreen/InboxScreen";
import "./index.css";

function App() {
  return (
    <Provider store={store}>
      <InboxScreen />
    </Provider>
  );
}
export default App;
