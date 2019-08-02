import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Main from "./screens/Main";
import { SCREENS } from "./constants";

const Navigator = createStackNavigator(
  {
    Login: Login,
    Register: Register,
    Main: Main
  },
  { initialRouteName: SCREENS.LOGIN }
);

export default createAppContainer(Navigator);
