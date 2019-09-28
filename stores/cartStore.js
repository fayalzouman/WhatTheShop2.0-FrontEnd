import { decorate, observable, computed } from "mobx";
import axios from "axios";
import { instance } from "./instance";
import { AsyncStorage } from "react-native";

class CartStore {
  items = [];

  fetchCartItems = async () => {
    const res = await instance.get(
      "api/product/detail/"
      //"http://127.0.0.1:8000/api/cart/"
    );

    this.items = res.data;

    // let res = await axios.get(
    //   //"http://192.168.100.53:8000/api/product/detail/"
    //   "http://127.0.0.1:8000/api/cart/"
    // );
    let corpse = res.data;
    this.corpse = corpse;
    this.loading = false;
  };
  catch(err) {
    console.error(err);
  }
  getorderHistory = async orderHistory => {
    const previousOrders = this.items.get(
      item => orderHistory.cart_in_use === items.cart_in_use
    );
    console.log("Order History Fetched", previousOrders);
    if (this.items.cart_in_use == False) {
      return this.items.cart_in_use;
    }
    try {
      const res = instance.get("api/profile/");
      this.statusMessage = "Success";
      console.log("RESPONSE", this.statusMessage);
    } catch (err) {
      this.statusMessage = err.response;
      console.log("ERROR", err);
    }
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
        const res = await instance.post("api/product/add/", cartItem);
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
      const res = axios.get("api/cart/");
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

  updateQuantity = async updatedItem => {
    const foundItem = this.items.find(item => item.id === updatedItem.id);
    if (foundItem && foundItem.quantity > 0) {
      foundItem.quantity = updatedItem.quantity;
      try {
        const res = await instance.post(
          `product/modify/${updatedItem.id}/`,
          foundItem
        );
      } catch (err) {
        console.error(err);
      }
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
