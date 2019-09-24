import React from "react";
import { withNavigation } from "react-navigation";
import { Button, Icon, Text } from "native-base";
import { observer } from "mobx-react";
// import cartStore from "../../store/cartStore";
import authStore from "../../stores/authStore";
//after onpress, its either authStore.logout(navigation) or navigation.navigate("ListScreen")

const LogoutButton = ({ navigation }) => {
  return (
    <Button primary onPress={() => authStore.logout(navigation)}>
      <Text style={{ color: "white" }}>Logout</Text>
    </Button>
  );
};

export default withNavigation(observer(LogoutButton));
