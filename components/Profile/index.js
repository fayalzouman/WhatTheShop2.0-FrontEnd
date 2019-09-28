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
};
export default observer(Profile);
