import { decorate, observable, computed } from "mobx";
// import console = require("console");

class CartStore {
  items = [];

  addItemToCart = newItem => {
    const foundItem = this.items.find(item => newItem.id === item.id);
    if (foundItem) {
      foundItem.quantity += newItem.quantity;
      //try catch axios.put
    } else {
      this.items.push(newItem);
      //try catch post
    }

    console.log("CARTSTORE", this.items);
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
