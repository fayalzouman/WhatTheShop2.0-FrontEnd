// import React, { Component } from "react";
// import { observer } from "mobx-react";
// import CartButton from "../CartButton";

// // NativeBase Components
// import {
//   Thumbnail,
//   Text,
//   Button,
//   Left,
//   Body,
//   Right,
//   List,
//   ListItem,
//   Picker,
//   Content
// } from "native-base";

// // Style
// import styles from "./styles";

// // Store
// import corpseStore from "../../stores/corpseStore";
// import cartStore from "../../stores/cartStore";

// class CorpseDetail extends Component {
//   state = {
//     product: "",
//     quantity: 1
//   };

//     const corpseDet = ({navigation}) => {
//   const corpseID = navigation.getParam("corpseID")
//   const corpseDet
//     }

//   changeCorpse = value => {
//     this.setState({
//       product: value
//     });
//   };

//   changeOption = value => {
//     this.setState({
//       option: value
//     });
//   };

//   render() {
//     const { corpses } = corpseStore;
//     let corpse = corposes.find(
//       corpse => corpses.id === this.props.navigation.getParam("corpseID")
//     );
//     if (!corpse) return <Content />;
//     return (
//       <Content>
//         <List>
//           <ListItem style={styles.top}>
//             <Left>
//               <Text style={styles.text}>
//                 {cafe.name + "\n"}
//                 <Text note>{cafe.location}</Text>
//               </Text>
//             </Left>
//             <Body />
//             <Right>
//               <Thumbnail bordered source={{ uri: corpse.img }} />
//             </Right>
//           </ListItem>
//           <ListItem style={{ borderBottomWidth: 0 }}>
//             {/* <Left>
//               <Picker
//                 note
//                 mode="dropdown"
//                 style={{ width: 150 }}
//                 selectedValue={this.state.drink}
//                 onValueChange={this.changeDrink}
//               >
//                 {/* <Picker.Item label="Cappuccino" value="Cappuccino" />
//                 <Picker.Item label="Latte" value="Latte" />
//                 <Picker.Item label="Espresso" value="Espresso" />
//               </Picker> */}
//             {/* </Left> */}
//             <Body>
//               <Picker
//                 note
//                 mode="dropdown"
//                 style={{ width: 150 }}
//                 selectedValue={this.state.option}
//                 onValueChange={this.changeOption}
//             //   >
//             //     <Picker.Item label="Small" value="Small" />
//             //     <Picker.Item label="Medium" value="Medium" />
//             //     <Picker.Item label="Large" value="Large" />
//             //   </Picker>
//             </Body>
//           </CorpseItem>
//           <Button
//             full
//             danger
//             onPress={() => cartStore.addItemToCart(this.state)}
//           >
//             <Text>Add</Text>
//           </Button>
//         </List>
//       </Content>
//     );
//   }
// }

// CoffeeDetail.navigationOptions = ({ navigation }) => {
//   const cafeID = navigation.getParam("corpseID");
//   const cafe = corpseStore.cafes.find(corpse => corpse.id === corpseID).name;
//   return {
//     title: corpse,
//     headerRight: <CartButton />
//   };
// };

// export default withNavigator(observer(CorpseDetail));
