import React, { Component } from "react";
import LogoutButton from "../Buttons/LogoutButton";
import { observer } from "mobx-react";

// NativeBase Components
import {
  Card,
  CardItem,
  Text,
  Button,
  Spinner,
  List,
  ListItem,
  Content
} from "native-base";
//Stores

import authStore from "../../stores/authStore";
import corpseStore from "../../stores/corpseStore";
<<<<<<< HEAD
import NotLoggedIN from "../NotLoggedIN";

const Profile = ({ navigation }) => {
  // if (authStore.user) {
  //   corpseStore.orderHistory();
  // } else {
  //   navigation.replace("Login");
  // }
  if (!authStore.user) navigation.replace(<NotLoggedIN />);
  return (
    <Content>
      <Card>
        <CardItem>
          <LogoutButton />
        </CardItem>
      </Card>
    </Content>
  );
=======

const Profile = ({ navigation }) => {
  if (authStore.user) {
    corpseStore.OrderHistory();
  } else {
    navigation.replace("Login");
    return (
      <Content>
        <Card>
          <CardItem>
            <LogoutButton />
          </CardItem>
        </Card>
      </Content>
    );
  }
>>>>>>> 2ee5c1d9d58d15e36ba0d12dde6373b728b0f1aa
};
export default observer(Profile);
