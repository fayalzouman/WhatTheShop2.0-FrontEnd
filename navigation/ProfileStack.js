import { createStackNavigator } from "react-navigation-stack";

// Components
import ProfileScreen from "../components/Profile";
import LoginScreen from "../components/Login";
import RegisterScreen from "../components/Register";
// import CorpeStackScreen from "../navigation//CorpseStack";

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
    Login: LoginScreen,
    Register: RegisterScreen
    // CorpeStack: CorpeStackScreen
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      title: "Humans R Us"
    }
  }
);

export default ProfileStack;
