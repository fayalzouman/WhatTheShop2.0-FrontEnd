import { decorate, observable } from "mobx";
import axios from "axios";
import { AsyncStorage } from "react-native";
import jwt_decode from "jwt-decode";
import CorpseList from "../components/CorpseList";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/"
});

class AuthStore {
  user = null;

  setUser = async token => {
    if (token) {
      // Save token to localStorage
      await AsyncStorage.setItem("myToken", token);
      // Set token to Auth header
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      // Set current user
      this.user = jwt_decode(token);
    } else {
      await AsyncStorage.removeItem("myToken");
      delete axios.defaults.headers.common.Authorization;
      this.user = null;
    }
  };

  login = async (userData, navigation) => {
    try {
      const res = await instance.post("/api/login/", userData);
      const user = res.data;
      this.setUser(user.access);
    } catch (err) {
      console.log("something went wrong logging in");
    }
  };

  signup = async (userData, navigation) => {
    try {
      await instance.post("register/", userData);
      this.login(userData, navigation);
    } catch (err) {
      console.log("something went wrong signing up");
    }
  };

  logout = navigation => {
    this.setUser();
    navigation.navigate("CorpseList");
    //navigate the user using the navigation object
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
        this.setUser(token);
      } else {
        this.logout();
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
