import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { List, Content } from "native-base";
import {
  Container,
  Header,
  Item,
  Input,
  Icon,
  Button,
  Text
} from "native-base";

// Store
import corpseStore from "../../stores/corpseStore";

// Component
import CorpseItem from "./CorpseItem";
import CartButton from "../Buttons/CartButton";
import authStore from "../../stores/authStore";
import NotLoggedIN from "../NotLoggedIN";

const CorpseList = ({ navigation }) => {
  if (!authStore.user) {
    navigationOptions = {
      title: "Not logged in",
      headerLeft: null,
      headerRight: null
    };
    return <NotLoggedIN />;
  }

  // if (authStore.user) {
  //   corpseStore.fetchAllcorpses();
  //   navigationOptions = {
  //     title: "Corpse List",
  //     headerLeft: null,
  //     headerRight: <CartButton />
  //   };
  // } else {
  //   navigationOptions = {
  //     title: "Not logged in",
  //     headerLeft: null,
  //     headerRight: null
  //   };
  //   return <NotLoggedIN />;
  // }

  const { corpses } = corpseStore;
  let shops;
  if (corpses) {
    shops = corpses.map(corpse => (
      <CorpseItem corpse={corpse} key={corpse.id} navigation={navigation} />
    ));
  }
  return (
    <Content
      searchBar
      rounded
      style={{
        paddingLeft: 20,
        paddingRight: 20
      }}
    >
      {/* <Header searchBar rounded> */}
      <Item>
        <Icon name="ios-search" />
        <Input placeholder="Search" />
        <Icon name="ios-people" />
      </Item>
      <Button transparent>
        <Text>Search</Text>
      </Button>
      {/* </Header> */}
      <List>{shops}</List>
    </Content>
  );
};

export default observer(CorpseList);
