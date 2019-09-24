import React, { Component } from "react";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";

// NativeBase Components
import { Container, Button, Form, Item, Input, Text } from "native-base";
//import { Button } from "react-native";

// Store
import authStore from "../../stores/authStore";
import Register from "../Register";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  render() {
    if (authStore.user) {
      return this.props.navigation.replace("Profile");
    }
    return (
      <Container>
        <Form>
          <Item>
            <Input
              placeholder="Username"
              autoCapitalize="none"
              onChangeText={username => this.setState({ username })}
            />
          </Item>
          <Item last>
            <Input
              placeholder="Password"
              autoCapitalize="none"
              secureTextEntry={true}
              onChangeText={password => this.setState({ password })}
            />
          </Item>
        </Form>
        <Button
          block
          primary
          onPress={() => authStore.login(this.state, this.props.navigation)}
        >
          <Text style={{ color: "white" }}>Login</Text>
        </Button>
        <Text>Don't have an account? Register below!</Text>
        <Button
          block
          primary
          onPress={() => this.props.navigation.navigate("Register")}
        >
          <Text style={{ color: "white" }}>Register</Text>
        </Button>
      </Container>
    );
  }
}
export default withNavigation(observer(Login));
