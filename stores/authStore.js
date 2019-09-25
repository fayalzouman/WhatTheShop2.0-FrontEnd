import { decorate, observable } from "mobx";
import axios from "axios";
import { AsyncStorage } from "react-native";
import jwt_decode from "jwt-decode";
import CorpseList from "../components/CorpseList";
import Profile from "../components/Profile";
import { instance } from "./instance";

// const instance = axios.create({
//   //"http://127.0.0.1:8000/"
//   baseURL: "http://192.168.100.226:8000"
// });

class AuthStore {
  user = null;

  setUser = async token => {
    if (token) {
      // Save token to localStorage
      await AsyncStorage.setItem("myToken", token);
      // Set token to Auth header
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
      // Set current user
      this.user = jwt_decode(token);
    } else {
      await AsyncStorage.removeItem("myToken");
      delete instance.defaults.headers.common.Authorization;
      this.user = null;
    }
  };

  login = async (userData, navigation) => {
    try {
      const res = await instance.post("/api/login/", userData);
      const user = res.data;
      await this.setUser(user.access);
      navigation.replace("Profile");
    } catch (err) {
      console.error(err);
    }
  };

  signup = async (userData, navigation) => {
    try {
      await instance.post("/api/register/", userData);
      this.login(userData, navigation);
      //navigation.replace("Profile");
    } catch (err) {
      console.error(err);
      //alert(err);
    }
  };

  logout = async navigation => {
    await this.setUser();
    navigation.replace("Login");
  };

  checkForToken = async () => {
    const token = await AsyncStorage.getItem("myToken");

    if (token) {
      const currentTime = Date.now() / 1000;
      // Decode token and get user info
      const user = jwt_decode(token);

      // Check token expiration
      if (user.exp >= currentTime) {
        // Set auth token header
        await this.setUser(token);
      } else {
        this.setUser();
      }
    }
  };
}

decorate(AuthStore, {
  user: observable
});

const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
