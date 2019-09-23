import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { List, Content } from "native-base";

// Store
import corpseStore from "../../stores/corpseStore";

// Component
import CorpseItem from "./CorpseItem";
import CartButton from "../Buttons/CartButton";

const CorpseList = ({ navigation }) => {
  const { corpses } = corpseStore;
  let shops;
  if (corpses) {
    shops = corpses.map(corpse => (
      <CorpseItem corpse={corpse} key={corpse.id} navigation={navigation} />
    ));
  }
  return (
    <Content>
      <List>{shops}</List>
    </Content>
  );
};

CorpseList.navigationOptions = {
  title: "Corpse List",
  headerLeft: null,
  headerRight: <CartButton />
};
export default observer(CorpseList);
