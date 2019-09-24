import React from "react";
import { Button, Icon } from "native-base";
import { withNavigation } from "react-navigation";
import { observer } from "mobx-react";

function CartButton({ navigation }) {
  return (
    <Button onPress={() => navigation.navigate("CorpseCart")}>
      <Icon type="EvilIcons" name="cart" />
    </Button>
  );
}

export default withNavigation(observer(CartButton));
