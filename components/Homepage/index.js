import React, { Component } from "react";
import { View } from "react-native";

import AppContainer from "../../navigation/AppContainer";

// NativeBase Components
import { Container, Header } from "native-base";

// Style
import styles from "./styles";
import Profile from "../Profile";

// Components

const HomePage = () => {
  return (
    <Container style={styles.transparent}>
      <View style={styles.overlay} />
      <AppContainer />
    </Container>
  );
};

export default HomePage;
