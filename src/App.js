import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Index from "./views/Index";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Index />
      </div>
    </Provider>
  );
}

export default App;
