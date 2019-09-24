import { decorate, observable } from "mobx";
import axios from "axios";

class CorpseStore {
  corpses = [];
  corpse = [];
  loading = true;

  fetchAllcorpses = async () => {
    try {
      let res = await axios.get(
        "http://192.168.100.53:8000/api/product/detail/"
      );
      let corpses = res.data;
      this.corpses = corpses;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };
}

decorate(CorpseStore, {
  corpses: observable,
  corpse: observable,
  loading: observable
});

let corpseStore = new CorpseStore();
corpseStore.fetchAllcorpses();

export default corpseStore;
