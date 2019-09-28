import { createStackNavigator } from "react-navigation-stack";

// Components
import ProfileScreen from "../components/Profile";
import LoginScreen from "../components/Login";
import RegisterScreen from "../components/Register";
import HomeScreen from "../components/Home";
import CorpseListScreen from "../components/CorpseList";

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
    Login: LoginScreen,
    Register: RegisterScreen,
    CorpseList: CorpseListScreen,
    Home: HomeScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      tabBarVisible: false
    }
  }
);

export default ProfileStack;
