
import React, { Component } from "react";
import { createStore } from "redux";
import Cookies from "./src/Cookies";
import { Provider } from "react-redux";

const initialState = {
  cookies: 0,
  addBy: 1
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE_COOKIES":
      console.log(state.addBy);
      return { cookies: state.cookies + state.addBy, addBy: state.addBy };
  }
  return state;
};

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Cookies />
      </Provider>
    );
  }
}

export default App;