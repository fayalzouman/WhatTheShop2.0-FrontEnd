import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import {
  Thumbnail,
  Text,
  Button,
  Left,
  Body,
  Right,
  List,
  ListItem,
  Content,
  Card,
  CardItem
} from "native-base";

// Style
import styles from "./styles";

// Store
import corpseStore from "../../stores/corpseStore";
import cartStore from "../../stores/cartStore";
import CartButton from "../Buttons/CartButton";

class CorpseDetail extends Component {
  state = {
    quantity: 1
  };
  render() {
    const { navigation } = this.props;
    const { corpses } = corpseStore;

    if (!corpses) return <Content />;
    const corpseID = navigation.getParam("corpseID");
    const corpse = corpses.find(corpse => corpse.id === corpseID);
    return (
      <Content>
        <List>
          <ListItem style={styles.top}>
            <Left>
              <Text style={styles.text}>
                {corpse.name + "\n"}
                <Text note>{corpse.location}</Text>
              </Text>
            </Left>
            <Body />
            <Right>
              <Thumbnail bordered source={{ uri: corpse.image }} />
            </Right>
          </ListItem>
          <Button
            full
            danger
            onPress={() =>
              cartStore.addItemToCart({
                ...corpse,
                quantity: this.state.quantity
              })
            }
          >
            <Text>Add</Text>
          </Button>
          <Button
            full
            danger
            onPress={() =>
              cartStore.removeItemFromCart({
                ...corpse,
                quantity: this.state.quantity
              })
            }
          >
            <Text>Remove</Text>
          </Button>
        </List>
        <Card style={styles.transparent}>
          <CardItem style={styles.transparent}>
            <Left />
            <Thumbnail
              bordered
              source={{ uri: corpse.image }}
              style={styles.thumbnail}
            />
            <Text style={styles.text}>{corpse.name}</Text>
            <Text note style={styles.text}>
              {corpse.blood_type}
            </Text>
            <Text note style={styles.text}>
              {corpse.skin_color}
            </Text>
            <Text note style={styles.text}>
              {corpse.amputation_date}
            </Text>
            <Text note style={styles.text}>
              {corpse.expiary_date}
            </Text>
            <Text note style={styles.text}>
              {corpse.reason_for_amputation}
            </Text>
          </CardItem>
        </Card>
      </Content>
    );
  }
}

CorpseDetail.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam("CorpseName"),
  headerRight: <CartButton />
});

export default observer(CorpseDetail);
