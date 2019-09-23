import React from "react";
import { Button, Icon } from "native-base";
import { withNavigation } from "react-navigation";

function CartButton({ navigation }) {
  return (
    <Button onPress={() => navigation.navigate("CartScreen")}>
      <Icon type="EvilIcons" name="cart" />
    </Button>
  );
}

export default withNavigation(CartButton);
