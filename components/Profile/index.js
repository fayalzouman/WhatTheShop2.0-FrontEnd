import React, { Component } from "react";
import LogoutButton from "../Buttons/LogoutButton";
import { observer } from "mobx-react";

// NativeBase Components
import {
  Card,
  CardItem,
  Header,
  Text,
  Button,
  Right,
  Container,
  ListItem,
  Content,
  Drawer
} from "native-base";

//Stores
import authStore from "../../stores/authStore";
import corpseStore from "../../stores/corpseStore";
import NotLoggedIN from "../NotLoggedIN";
import cartStore from "../../stores/cartStore";

class Profile extends Component {
  async componentDidMount() {
    const { navigation } = this.props;
    const { corpses } = corpseStore;
    console.log("[profile.index.js user", authStore.user);
    if (!authStore.user) {
      console.log("[profile.index.js !authStore.user", authStore.user);
      navigation.replace("Login");
    } else {
      cartStore.getorderHistory();
    }
  }
  render() {
    let orders = cartStore.previousOrders.map(order => (
      <Text style={{ color: "black" }}>{order.user}</Text>
    ));
    console.log("profile index", cartStore.previousOrders);
    return (
      <Container
        style={{
          paddingTop: 20
        }}
      >
        <Header>
          <Right>
            <LogoutButton />
          </Right>
        </Header>
        <Content>
          <Card>
            <CardItem>{orders}</CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
Profile.navigationOptions = {
  header: null
};

export default observer(Profile);
