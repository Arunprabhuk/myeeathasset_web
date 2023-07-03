import "./App.css";
import MainContainer from "./components/MainContainer";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import React from "react";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MainContainer />
      </div>
    </Provider>
  );
}

export default App;
