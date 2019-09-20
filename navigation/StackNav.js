import {createStackNavigator} from "react-navigation";

import CorpseCart from 
import CorpseDetail from
import CorpseList from
import HomePage from
import login from "../components/Login";

const StackNav = createStackNavigator({
    Login : login ,
    HomePage : HomePage,
    CorpseList :CorpseList,
    CorpseDetail: CorpseDetail
    CorpseCart : CorpseCart,

});
export default StackNav;