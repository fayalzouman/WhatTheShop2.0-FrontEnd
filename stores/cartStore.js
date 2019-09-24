import { decorate, observable, computed } from "mobx";
// import console = require("console");

class CorpseStore {
  items = [];

  fetchCartItems = async () => {
    try {
      let res = await axios.get(
       //"http://192.168.100.53:8000/api/product/detail/"
       "http://127.0.0.1:8000/api/cart/"
      );
      let corpse = res.data;
      this.corpse = corpse;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };
}
  
  addItemToCart = newItem => {
    const foundItem = this.items.find(
      item => newItem.body === item.name && newItem.option === item.option
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
export default corpseStore;
