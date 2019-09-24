import { createStackNavigator } from "react-navigation-stack";

// import CorpseCart from '../components/'
import CorpseDetail from "../components/CorpseDetail/index";
import CorpseList from "../components/CorpseList";
import CorpseCart from "../components/CorpseCart";
// import HomePage from ""
import login from "../components/Login";

const CorpseStack = createStackNavigator(
  {
    CorpseList: CorpseList,
    CorpseDetail: CorpseDetail,
    CorpseCart: CorpseCart
  },
  {
    initialRouteName: "CorpseList"
  }
);
export default CorpseStack;
