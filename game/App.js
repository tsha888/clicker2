import React, { Component } from "react";
import { createStore } from "redux";
import Cookies from "./src/Cookies";
import { Provider } from "react-redux";
<<<<<<< HEAD
import shop from './screens/shop'
=======
>>>>>>> d8b750db7f08dda9cc3c0d4675be399306a1e859

const initialState = {
  cookies: 0,
  addBy: 1
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE_COOKIES":
<<<<<<< HEAD
=======
      console.log(state.addBy);
>>>>>>> d8b750db7f08dda9cc3c0d4675be399306a1e859
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
<<<<<<< HEAD
        
=======
>>>>>>> d8b750db7f08dda9cc3c0d4675be399306a1e859
      </Provider>
    );
  }
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> d8b750db7f08dda9cc3c0d4675be399306a1e859
