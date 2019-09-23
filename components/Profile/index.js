import React from "react";

// NativeBase Components
import { Card, CardItem, Text, Button } from "native-base";
import LogoutButton from "../Buttons/LogoutButton";

const Profile = () => {
  return (
    <Card>
      <CardItem>
        <LogoutButton />
      </CardItem>
    </Card>
  );
};
export default Profile;
