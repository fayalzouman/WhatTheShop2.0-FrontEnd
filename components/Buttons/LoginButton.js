import React from "react";
import { withNavigation } from "react-navigation";
import { Button, Icon, Text } from "native-base";
import { observer } from "mobx-react";
// import cartStore from "../../store/cartStore";
import authStore from "../../stores/authStore";

const LoginButton = ({ navigation }) => {
  return (
    <Button transparent onPress={() => authStore.login(navigation)}>
      <Text style={{ color: "white" }}>Login</Text>
    </Button>
  );
};

export default withNavigation(observer(LoginButton));
