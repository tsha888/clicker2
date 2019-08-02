import React, { Component } from "react";
import { createStore } from "redux";
import Cookies from "./src/Cookies";
import { Provider } from "react-redux";
// import console = require("console");

const initialState = {
  level: 1,
  cookies: 0,
  clickerLevel: 1,
  clickerPrice: 100,
  grandmaLevel: 0,
  grandmaPrice: 500,
  autoLevel: 0,
  autoPrice: 1000,
  rapidLevel: 0,
  rapidPrice: 7000,
  healthPoints: 200,
  uri: [
    "https://thumbs.gfycat.com/ShamefulWelltodoEgret-max-1mb.gif",
    "https://ui-ex.com/images/transparent-gif-monster-hunter-5.gif",
    "https://www.gamedevmarket.net/wp-content/uploads/80446f3cd96a9d047e5bdba233c1c82f83f69d29.gif",
    "https://img.itch.zone/aW1nLzE3NDEzOTIuZ2lm/original/UxIRf8.gif",
    "https://i.pinimg.com/originals/ee/68/de/ee68debb218e8f4f2cf03f8b1270034d.gif",
    "http://www.owlboygame.com/images/Turtleguardian.gif",
    "https://media1.giphy.com/media/63KDSfdeTGainb0dP2/giphy.gif",
    "https://media1.giphy.com/media/9J573df8UQM97TOFHR/giphy.gif",
    "https://media1.giphy.com/media/9J573df8UQM97TOFHR/giphy.gif",
    "https://media1.giphy.com/media/pVVKJJuEQre3219fLh/giphy.gif"
  ]
};

// Start a timer that runs continuous after X milliseconds
setInterval(() => {
  if (store.getState().autoLevel > 0) {
    return store.dispatch({
      type: "AUTO_INCREASE"
    });
  }
}, 1000);

setInterval(() => {
  if (store.getState().rapidLevel > 0) {
    return store.dispatch({
      type: "RAPID_INCREASE"
    });
  }
}, 100);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE_COOKIES":
      if (
        state.healthPoints - state.grandmaLevel * 3 - state.clickerLevel <=
        0
      ) {
        return {
          cookies: state.cookies,
          clickerLevel: state.clickerLevel,
          clickerPrice: state.clickerPrice,
          grandmaLevel: state.grandmaLevel,
          grandmaPrice: state.grandmaPrice,
          autoLevel: state.autoLevel,
          autoPrice: state.autoPrice,
          rapidLevel: state.rapidLevel,
          rapidPrice: state.rapidPrice,
          level: state.level + 1,
          healthPoints:
            state.healthPoints -
            state.healthPoints +
            200 * (state.level + 1) * state.level,
          uri: [initialState.uri.shift(), initialState.uri][1]
        };
      }
      return {
        cookies: state.cookies + state.clickerLevel + state.grandmaLevel * 3,
        clickerLevel: state.clickerLevel,
        clickerPrice: state.clickerPrice,
        grandmaLevel: state.grandmaLevel,
        grandmaPrice: state.grandmaPrice,
        autoLevel: state.autoLevel,
        autoPrice: state.autoPrice,
        rapidLevel: state.rapidLevel,
        rapidPrice: state.rapidPrice,
        level: state.level,
        healthPoints:
          state.healthPoints - state.clickerLevel - state.grandmaLevel * 3,
        uri: initialState.uri
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
        autoPrice: state.autoPrice,
        rapidLevel: state.rapidLevel,
        rapidPrice: state.rapidPrice,
        level: state.level,
        healthPoints: state.healthPoints,
        uri: initialState.uri
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
        autoPrice: state.autoPrice,
        rapidLevel: state.rapidLevel,
        rapidPrice: state.rapidPrice,
        level: state.level,
        healthPoints: state.healthPoints,
        uri: initialState.uri
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
        autoPrice: Math.round(state.autoPrice * 1.4),
        rapidLevel: state.rapidLevel,
        rapidPrice: state.rapidPrice,
        level: state.level,
        healthPoints: state.healthPoints,
        uri: initialState.uri
      };

    case "AUTO_INCREASE":
      return {
        cookies: state.cookies + Math.round(state.autoLevel * 5),
        clickerLevel: state.clickerLevel,
        clickerPrice: state.clickerPrice,
        grandmaLevel: state.grandmaLevel,
        grandmaPrice: state.grandmaPrice,
        autoLevel: state.autoLevel,
        autoPrice: state.autoPrice,
        rapidLevel: state.rapidLevel,
        rapidPrice: state.rapidPrice,
        level: state.level,
        healthPoints: state.healthPoints,
        uri: initialState.uri
      };

    case "INCREASE_RAPID":
      if (state.rapidPrice > state.cookies) {
        return state;
      }
      return {
        cookies: state.cookies - state.rapidPrice,
        clickerLevel: state.clickerLevel,
        clickerPrice: state.clickerPrice,
        grandmaLevel: state.grandmaLevel,
        grandmaPrice: state.grandmaPrice,
        autoLevel: state.autoLevel,
        autoPrice: state.autoPrice,
        rapidLevel: state.rapidLevel + 1,
        rapidPrice: Math.round(state.rapidPrice * 1.4),
        level: state.level,
        healthPoints: state.healthPoints,
        uri: initialState.uri
      };

    case "RAPID_INCREASE":
      if (state.healthPoints - Math.round(state.rapidLevel * 5) <= 0) {
        return {
          cookies: state.cookies,
          clickerLevel: state.clickerLevel,
          clickerPrice: state.clickerPrice,
          grandmaLevel: state.grandmaLevel,
          grandmaPrice: state.grandmaPrice,
          autoLevel: state.autoLevel,
          autoPrice: state.autoPrice,
          rapidLevel: state.rapidLevel,
          rapidPrice: state.rapidPrice,
          level: state.level + 1,
          healthPoints:
            state.healthPoints -
            state.healthPoints +
            200 * (state.level + 1) * state.level,
          uri: [initialState.uri.shift(), initialState.uri][1]
        };
      }
      return {
        cookies: state.cookies,
        clickerLevel: state.clickerLevel,
        clickerPrice: state.clickerPrice,
        grandmaLevel: state.grandmaLevel,
        grandmaPrice: state.grandmaPrice,
        autoLevel: state.autoLevel,
        autoPrice: state.autoPrice,
        rapidLevel: state.rapidLevel,
        rapidPrice: state.rapidPrice,
        level: state.level,
        healthPoints: state.healthPoints - Math.round(state.rapidLevel * 5),
        uri: initialState.uri
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

export default Main;
