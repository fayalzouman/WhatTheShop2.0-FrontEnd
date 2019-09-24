import React from "react";

// NativeBase Components
import { Text, Left, Body, Right, Button, ListItem, Icon } from "native-base";
import cartStore from "../../stores/cartStore";

const CartItem = ({ item }) => {
  return (
    <ListItem style={{ borderBottomWidth: 0 }}>
      <Left>
        <Text style={{ color: "black", marginLeft: 16 }}> {item.name} </Text>
      </Left>
      <Body>
        <Text style={{ color: "black" }}>{item.quantity}</Text>
      </Body>
      <Right>
        <Button transparent onPress={() => cartStore.removeItemFromCart(item)}>
          <Icon name="trash" style={{ color: "white", fontSize: 21 }} />
        </Button>
      </Right>
    </ListItem>
  );
};

export default CartItem;
