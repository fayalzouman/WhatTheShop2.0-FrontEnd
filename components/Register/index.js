import React, { Component } from "react";
import { observer } from "mobx-react";
import authStore from "../../stores/authStore";
// NativeBase Components
import { Form, Item, Input, Button, Text } from "native-base";

class Register extends Component {
  state = {
    username: "",
    password: ""
  };

  render() {
    return (
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

        <Button
          primary
          onPress={() => authStore.signup(this.state, this.props.navigation)}
        >
          <Text style={{ color: "white" }}>Submit!</Text>
        </Button>
      </Form>
    );
  }
}
export default observer(Register);
