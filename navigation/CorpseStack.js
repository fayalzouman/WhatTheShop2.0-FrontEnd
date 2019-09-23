import { createStackNavigator } from "react-navigation-stack";

// import CorpseCart from '../components/'
// import CorpseDetail from "../components/CorpseDetail";
import CorpseList from "../components/CorpseList";
// import HomePage from ""
import login from "../components/Login";

const CorpseStack = createStackNavigator(
  {
    CorpseList: CorpseList
    // CorpseDetail: CorpseDetail
  },
  {
    initialRouteName: "CorpseList"
  }
);
export default CorpseStack;
