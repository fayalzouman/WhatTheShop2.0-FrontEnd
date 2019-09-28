import { decorate, observable, computed } from "mobx";
import axios from "axios";
import { instance } from "./instance";
import { AsyncStorage } from "react-native";

class CartStore {
  items = [];

  fetchCartItems = async () => {
    try {
      const res = await instance.get(
        //"api/product/detail/"
        "api/cart/"
      );
      this.items = res.data;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };

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
    this.items = this.items.filter(item => item.id !== itemToDelete.id);
    try {
      const cartItem = {
        product: itemToDelete.id
      };
      console.log("Deleting item: " + itemToDelete.id);
      const res = instance.delete(`product/delete/${itemToDelete.id}/`);
      console.log(res);
      this.statusMessage = "Success";
      console.log("RESPONSE", this.statusMessage);
    } catch (err) {
      this.statusMessage = err.response;
      console.log("ERORO", err);
    }
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
