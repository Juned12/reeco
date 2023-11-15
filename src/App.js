import React from "react";
import Navbar from "./component/navbar";
import Orders from "./screens/orders";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Orders />
    </Provider>
  );
}

export default App;
