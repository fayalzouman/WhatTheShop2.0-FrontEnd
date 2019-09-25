import { decorate, observable, computed } from "mobx";
// import console = require("console");

class CartStore {
  items = [];

  fetchCartItems = async () => {
    try {
<<<<<<< HEAD
      const res = await instance.get(
        //"http://192.168.100.53:8000/api/product/detail/"
        "http://127.0.0.1:8000/api/cart/"
      );
      this.items = res.data;
=======
      let res = await axios.get(
       //"http://192.168.100.53:8000/api/product/detail/"
       "http://127.0.0.1:8000/api/cart/"
      );
      let corpse = res.data;
      this.corpse = corpse;
>>>>>>> 77a062d9fdb9b922fcf1894fca854d56bd0a4d58
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };
<<<<<<< HEAD

  addItemToCart = newItem => {
    const foundItem = this.items.find(item => newItem.id === item.id);
=======
}
  
  addItemToCart = newItem => {
    const foundItem = this.items.find(
      item => newItem.body === item.name && newItem.option === item.option
    );
>>>>>>> 77a062d9fdb9b922fcf1894fca854d56bd0a4d58
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
