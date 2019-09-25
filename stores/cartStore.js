import { decorate, observable, computed } from "mobx";
import axios from "axios";
import { instance } from "./instance";
import { AsyncStorage } from "react-native";

class CartStore {
  items = [];

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
        console.log("ERORO", err);
      }
    }
  };

  checkoutCart = () => {
    //try catch axios checkout request maybe get
    this.items = [];
    alert("Enjoy your corpse!");
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
