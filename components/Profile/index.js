import React from "react";

// NativeBase Components
import { Card, CardItem, Text, Button } from "native-base";
import LogoutButton from "../Buttons/LogoutButton";
import LoginButton from "../Buttons/LoginButton";

const Profile = () => {
  return (
    <Card>
      <CardItem>
        {/* <Button
          danger
          onPress={() => alert("You need to implement Logout n00b...")}
        >
          <Text>Logout</Text>
        </Button>  */}
        <Button>
          <LogoutButton />
        </Button>
        <Button>
          <LoginButton />
        </Button>
      </CardItem>
    </Card>
  );
};
export default Profile;
