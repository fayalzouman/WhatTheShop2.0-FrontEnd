import React from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Card, CardItem, Text, Button, Content } from "native-base";
import LogoutButton from "../Buttons/LogoutButton";
import authStore from "../../stores/authStore";

const Profile = ({ navigation }) => {
  if (!authStore.user) navigation.replace("Login");
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
