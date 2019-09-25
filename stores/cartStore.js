import { decorate, observable, computed } from "mobx";
import axios from "axios";
import { instance } from "./instance";
import { AsyncStorage } from "react-native";

class CartStore {
  items = [];

  fetchCartItems = async () => {
    const res = await instance.get(
      //"http://192.168.100.53:8000/api/product/detail/"
      "http://127.0.0.1:8000/api/cart/"
    );
    this.items = res.data;

    // let res = await axios.get(
    //  //"http://192.168.100.53:8000/api/product/detail/"
    //  "http://127.0.0.1:8000/api/cart/"
    // );
    let corpse = res.data;
    this.corpse = corpse;
    this.loading = false;
  };
  catch(err) {
    console.error(err);
  }

  // addItemToCart = newItem => {
  //   const foundItem = this.items.find(item => newItem.id === item.id);
  // };

  addItemToCart = newItem => {
    const foundItem = this.items.find(
      item => newItem.body === item.name && newItem.option === item.option
    );
  };

  addItemToCart = async newItem => {
    const foundItem = this.items.find(item => newItem.id === item.id);
    console.log("FOUND ITEM", foundItem);
    if (foundItem) {
      foundItem.quantity += newItem.quantity;
      //try catch axios.put
    } else {
      console.log("NEW ITEM", newItem);
      this.items.push(newItem);
      try {
        const cartItem = {
          product: newItem.id,
          quantity: newItem.quantity
        };
        const res = await instance.post("/api/product/add/", cartItem);
        this.statusMessage = "Success";
        console.log("RESPONSE", this.statusMessage);
      } catch (err) {
        this.statusMessage = err.response;
        console.log("ERROR", err);
      }
    }
  };

  // checkoutCart = () => {
  //   //try catch axios checkout request maybe get
  //   this.items = [];
  //   try {
  //     alert("Enjoy your corpse!");
  //   } catch (err) {
  //     this.statusMessage = err.response;
  //     console.log("ERROR", err);
  //   }
  // };

  checkoutCart = navigation => {
    this.items = [];
    navigation.replace("CorpseList");
    try {
      const res = axios.get("http://127.0.0.1:8000/api/cart/");
    } catch (err) {
      console.error(err);
    }
  };

  removeItemFromCart = itemToDelete => {
    //try catch axios.delete
    this.items = this.items.filter(item => item !== itemToDelete);
  };

  get quantity() {
    let total = 0;
    this.items.forEach(item => (total += item.quantity));
    return total;
  }
}

decorate(CartStore, {
  items: observable,
  quantity: computed
});

export default new CartStore();
