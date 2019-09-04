import React, { Component } from 'react';
import { createStore } from 'redux';
import Cookies from './src/Cookies';
import { Provider } from 'react-redux';

const initialState = {
  level: 1,
  cookies: 5,
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
    'https://thumbs.gfycat.com/ShamefulWelltodoEgret-max-1mb.gif',
    'https://ui-ex.com/images/transparent-gif-monster-hunter-5.gif',
    'https://www.gamedevmarket.net/wp-content/uploads/80446f3cd96a9d047e5bdba233c1c82f83f69d29.gif',
    'https://i.pinimg.com/originals/ee/68/de/ee68debb218e8f4f2cf03f8b1270034d.gif',
    'http://www.owlboygame.com/images/Turtleguardian.gif',
    'https://media1.giphy.com/media/63KDSfdeTGainb0dP2/giphy.gif',
    'https://media1.giphy.com/media/9J573df8UQM97TOFHR/giphy.gif',
    'https://media1.giphy.com/media/pVVKJJuEQre3219fLh/giphy.gif',
    'https://thumbs.gfycat.com/ShamefulWelltodoEgret-max-1mb.gif',
    'https://ui-ex.com/images/transparent-gif-monster-hunter-5.gif'
  ],
  background: [
    'https://i.pinimg.com/originals/7c/17/f0/7c17f0c64b977875a2c0625b406bb0d2.gif',
    'https://i.pinimg.com/originals/2d/44/e9/2d44e965dff94b7aa7a51fb42f25faf8.gif',
    'https://i.imgur.com/HHn96o1.gif',
    'https://data.whicdn.com/images/325887263/original.gif',
    'https://i.pinimg.com/originals/6b/70/c7/6b70c76888cde2c38e892919fc7a2c2f.gif',
    'https://i.pinimg.com/originals/5c/b0/02/5cb002bb6af9a7c057e8a4708f851f78.gif',
    'https://i.pinimg.com/originals/00/ad/39/00ad399951be7b3afd8adee8c9f107ab.gif',
    'https://i.pinimg.com/originals/df/8c/9f/df8c9f054b824dfd80351e5271016320.gif',
    'https://i.pinimg.com/originals/6a/8c/e1/6a8ce1e8d6d6c824d2aa299ede259ae9.gif',
    'https://i.pinimg.com/originals/e8/68/5a/e8685a9cd5689d70211afc6b6f74f756.gif'
  ],
  pageBackground: 'https://media0.giphy.com/media/ouYdqNNhIveCI/giphy.gif'
};

setInterval(() => {
  if (store.getState().autoLevel > 0) {
    return store.dispatch({
      type: 'AUTO_INCREASE'
    });
  }
}, 100);

setInterval(() => {
  if (store.getState().rapidLevel > 0) {
    return store.dispatch({
      type: 'RAPID_INCREASE'
    });
  }
}, 100);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE_COOKIES':
      if (
        state.healthPoints - state.grandmaLevel * 3 - state.clickerLevel <=
        0
      ) {
        return {
          cookies: state.cookies + state.healthPoints,
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
          uri: [initialState.uri.shift(), initialState.uri][1],
          background: [
            initialState.background.shift(),
            initialState.background
          ][1],
          pageBackground: initialState.pageBackground
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
        uri: initialState.uri,
        background: initialState.background,
        pageBackground: initialState.pageBackground
      };

    case 'INCREASE_CLICKER':
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
        uri: initialState.uri,
        background: initialState.background,
        pageBackground: initialState.pageBackground
      };

    case 'INCREASE_GRANDMA':
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
        uri: initialState.uri,
        background: initialState.background,
        pageBackground: initialState.pageBackground
      };

    case 'INCREASE_AUTO':
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
        uri: initialState.uri,
        background: initialState.background,
        pageBackground: initialState.pageBackground
      };

    case 'AUTO_INCREASE':
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
        uri: initialState.uri,
        background: initialState.background,
        pageBackground: initialState.pageBackground
      };

    case 'INCREASE_RAPID':
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
        uri: initialState.uri,
        background: initialState.background,
        pageBackground: initialState.pageBackground
      };

    case 'RAPID_INCREASE':
      if (state.healthPoints - Math.round(state.rapidLevel * 5) <= 0) {
        return {
          cookies: state.cookies + state.healthPoints,
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
          uri: [initialState.uri.shift(), initialState.uri][1],
          background: [
            initialState.background.shift(),
            initialState.background
          ][1],
          pageBackground: initialState.pageBackground
        };
      }
      return {
        cookies: state.cookies + state.rapidLevel * 2,
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
        uri: initialState.uri,
        background: initialState.background,
        pageBackground: initialState.pageBackground
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
