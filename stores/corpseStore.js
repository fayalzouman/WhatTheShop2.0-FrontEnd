import { decorate, observable } from "mobx";
import axios from "axios";
import { instance } from "./instance";

class CorpseStore {
  corpses = [];
  corpse = [];
  loading = true;

  fetchAllcorpses = async () => {
    try {
      let res = await instance.get("/api/product/detail/");
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
