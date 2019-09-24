import { decorate, observable, computed } from "mobx";
// import console = require("console");

class CartStore {
  items = [];

  addItemToCart = newItem => {
    const foundItem = this.items.find(
      item => newItem.corpse === item.corpse && newItem.option === item.option
    );
    if (foundItem) {
      foundItem.quantity += newItem.quantity;
    } else this.items.push(newItem);
  };
  checkoutCart = () => {
    this.items = [];
    alert("Enjoy your corpse!");
  };

  removeItemFromCart = itemToDelete => {
    this.items = this.items.filter(item => item !== itemToDelete);
  };
  // checkoutCart = () => {
  //   this.items = [];
  //   alert("Have a great day!");

  get quantity() {
    let total = 0;
    this.items.forEach(item => (total += item.quantity));
    return total;
  }
}
decorate(CorpseStore, {
  items: observable,
  quantity: computed
});

export default new CartStore();
