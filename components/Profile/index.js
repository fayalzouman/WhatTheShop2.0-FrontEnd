import React from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Card, CardItem, Text, Button, Content } from "native-base";
import LogoutButton from "../Buttons/LogoutButton";
import authStore from "../../stores/authStore";
import corpseStore from "../../stores/corpseStore";
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
};
export default observer(Profile);
