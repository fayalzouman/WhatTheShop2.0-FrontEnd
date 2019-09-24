import { createStackNavigator } from "react-navigation-stack";

// Components
import ProfileScreen from "../components/Profile";
import LoginScreen from "../components/Login";
import RegisterScreen from "../components/Register";

import CorpseListScreen from "../components/CorpseList";

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
    Login: LoginScreen,
    Register: RegisterScreen,
    CorpseList: CorpseListScreen
  },
  {
    initialRouteName: "Profile",
    defaultNavigationOptions: {
      title: "Humans R Us"
    }
  }
);

export default ProfileStack;
