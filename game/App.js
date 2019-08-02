import React, { Component } from "react";
import { createStore } from "redux";
import Cookies from "./src/Cookies";
import { Provider } from "react-redux";

const initialState = {
  cookies: 1000,
  clickerLevel: 1,
  clickerPrice: 100,
  grandmaLevel: 0,
  grandmaPrice: 500,
  autoLevel: 0,
  autoPrice: 1000
};

// Start a timer that runs continuous after X milliseconds
setInterval(() => {
  if (store.getState().autoLevel > 0) {
    return store.dispatch({
      type: "AUTO_INCREASE"
    });
  }
}, 1000);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE_COOKIES":
      return {
        cookies: state.cookies + state.clickerLevel + (state.grandmaLevel * 3),
        clickerLevel: state.clickerLevel,
        clickerPrice: state.clickerPrice,
        grandmaLevel: state.grandmaLevel,
        grandmaPrice: state.grandmaPrice,
        autoLevel: state.autoLevel,
        autoPrice: state.autoPrice
      };

    case "INCREASE_CLICKER":
      if (state.clickerPrice > state.cookies) {
        return state;
      }
      return {
        cookies: state.cookies - state.clickerPrice,
        clickerLevel: state.clickerLevel + 1,
        clickerPrice: Math.round(state.clickerPrice * 1.3),
        grandmaLevel: state.grandmaLevel,
        grandmaPrice: state.grandmaPrice,
        autoLevel: state.autoLevel,
        autoPrice: state.autoPrice
      };

    case "INCREASE_GRANDMA":
      if (state.grandmaPrice > state.cookies) {
        return state;
      }
      return {
        cookies: state.cookies - state.grandmaPrice,
        clickerLevel: state.clickerLevel,
        clickerPrice: state.clickerPrice,
        grandmaLevel: state.grandmaLevel + 1,
        grandmaPrice: Math.round(state.grandmaPrice * 1.3),
        autoLevel: state.autoLevel,
        autoPrice: state.autoPrice
      };

    case "INCREASE_AUTO":
      if (state.autoPrice > state.cookies) {
        return state;
      }
      return {
        cookies: state.cookies - state.autoPrice,
        clickerLevel: state.clickerLevel,
        clickerPrice: state.clickerPrice,
        grandmaLevel: state.grandmaLevel,
        grandmaPrice: state.grandmaPrice,
        autoLevel: state.autoLevel + 1,
        autoPrice: Math.round(state.autoPrice * 1.3)
      };
      
    case "AUTO_INCREASE":
      return {
        cookies: state.cookies + Math.round(state.autoLevel * 5),
        clickerLevel: state.clickerLevel,
        clickerPrice: state.clickerPrice,
        grandmaLevel: state.grandmaLevel,
        grandmaPrice: state.grandmaPrice,
        autoLevel: state.autoLevel,
        autoPrice: state.autoPrice
      };
  }
  return state;
};

const store = createStore(reducer);

class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <Cookies />
      </Provider>
    );
  }
}

Main.navigationOptions = {
  title: "Main"
};

export default Main;
