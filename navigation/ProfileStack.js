import { createStackNavigator } from "react-navigation-stack";

// Components
import ProfileScreen from "../components/Profile";
import LoginScreen from "../components/Login";
import RegisterScreen from "../components/Register";
import CorpseList from "../components/CorpseList";

// import CorpeStackScreen from "../navigation//CorpseStack";

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
    Login: LoginScreen,
    Register: RegisterScreen,
    CorpseList: CorpseList

    // CorpeStack: CorpeStackScreen
  },
  {
    initialRouteName: "CorpseList",
    defaultNavigationOptions: {
      title: "Humans R Us"
    }
  }
);

export default ProfileStack;
