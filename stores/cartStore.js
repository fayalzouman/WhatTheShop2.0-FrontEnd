import { decorate, observable, computed } from "mobx";
// import console = require("console");

class CorpseStore {
  items = [];

  addItemToCart = newItem => {
    const foundItem = this.items.find(
      item => newItem.body === item.body && newItem.option === item.option
    );
    if (foundItem) {
      foundItem.quantity += newItem.quantity;
    } else this.items.push(newItem);
  };
  checkoutCart = () => {
    this.items = [];
    alert("Have a great day!");
  };

  removeItemFromCart = item => {
    this.items = this.items.filter(itemB => itemB !== item);
  };

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
let corpseStore = new CorpseStore();
export default corpsetore;

// addItemToCart({
//   drink: "",
//   option: "",
//   quantity: 5
// });
