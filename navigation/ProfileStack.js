import { createStackNavigator } from "react-navigation-stack";

// Components
import ProfileScreen from "../components/Profile";
import LoginScreen from "../components/Login";
// import CorpeStackScreen from "../navigation//CorpseStack";

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
    Login: LoginScreen
    // CorpeStack: CorpeStackScreen
  },
  {
    initialRouteName: "Profile",
    defaultNavigationOptions: {
      title: "Humans R Us"
    }
  }
);

export default ProfileStack;
