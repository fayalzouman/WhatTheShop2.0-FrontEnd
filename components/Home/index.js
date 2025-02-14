import React from "react";
import { ImageBackground, Text, View } from "react-native";
import { Button } from "native-base";
import styles from "./styles";

const Home = ({ navigation }) => {
  return (
    <ImageBackground
      source={{
        uri: "https://wallpaperbro.com/img/299196.jpg"
      }}
      style={styles.container}
    >
      <View style={styles.overlayContainer}>
        <View
          style={styles.topStyling}
          style={{
            paddingTop: 100,
            paddingLeft: 20,
            paddingRight: 20
          }}
        >
          <Text style={styles.homeTitle}>HUMANS R US</Text>
          <Button
            transparent
            light
            style={styles.buttonStyling}
            //onPress={() => alert("IceCream List")}
          >
            {/* <Text style={styles.buttonTextStyling}>FLAVORS LIST</Text> */}
          </Button>
          <Button
            block
            transparent
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={{ color: "white" }}>Login</Text>
          </Button>
          <Button
            block
            transparent
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={{ color: "white" }}>Register</Text>
          </Button>
        </View>
      </View>
    </ImageBackground>
  );
};
Home.navigationOptions = {
  header: null
};
export default Home;
