import React, { Component } from "react";
import { ImageBackground, View } from "react-native";

// NativeBase Components
import { ListItem, Card, CardItem, Thumbnail, Text, Left } from "native-base";

// Style
import styles from "./styles";

const CorpseItem = ({ corpse, navigation }) => {
  const handlePress = () => {
    navigation.navigate("CorpseDetail", {
      corpseID: corpse.id,
      corpseName: corpse.name
    });
  };
  return (
    <ImageBackground
      source={{ uri: corpse.background }}
      style={styles.background}
    >
      <View style={styles.overlay} />
      <ListItem button onPress={handlePress} style={styles.listitem}>
        <Card style={styles.transparent}>
          <CardItem style={styles.transparent}>
            <Left>
              <Thumbnail
                bordered
                source={{ uri: corpse.image }}
                style={styles.thumbnail}
              />
              <Text style={styles.text}>{corpse.name}</Text>
              <Text note style={styles.text}>
                {corpse.blood_type}
              </Text>
            </Left>
          </CardItem>
        </Card>
      </ListItem>
    </ImageBackground>
  );
};

export default CorpseItem;
