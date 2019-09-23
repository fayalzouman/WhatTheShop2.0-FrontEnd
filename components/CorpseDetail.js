// import React, { Component } from "react";
// import { observer } from "mobx-react";

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

// class CorpseDetail extends Component {
//   state = {
//     name: null,
//     skin_color: null,
//     blood_type: null,
//     amputation_date: null,
//     expiary_date: null,
//     reason_for_amputation: null,
//     image: null
//   };

//   changeName = value => {
//     this.setState({
//       name: value
//     });
//   };

//   changeSkincolor = value => {
//     this.setState({
//       skin_color: value
//     });
//   };

//   changeBloodtype = value => {
//     this.setState({
//       blood_type: value
//     });
//   };

//   changeAmputationdate = value => {
//     this.setState({
//       amputation_date: value
//     });
//   };

//   changeExpiarydate = value => {
//     this.setState({
//       expiary_date: value
//     });
//   };

//   changeReasonforamputation = value => {
//     this.setState({
//       reason_for_amputation: value
//     });
//   };

//   changeImage = value => {
//     this.setState({
//       image: value
//     });
//   };

//   render() {
//     const { cafes } = coffeeStore;
//     let cafe = cafes.find(
//       cafe => cafe.id === this.props.navigation.getParam("cafeID")
//     );
//     if (!cafe) return <Content />;
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
//               <Thumbnail bordered source={{ uri: cafe.img }} />
//             </Right>
//           </ListItem>
//           <ListItem style={{ borderBottomWidth: 0 }}>
//             <Left>
//               <Picker
//                 note
//                 mode="dropdown"
//                 style={{ width: 150 }}
//                 selectedValue={this.state.drink}
//                 onValueChange={this.changeDrink}
//               >
//                 <Picker.Item label="Cappuccino" value="Cappuccino" />
//                 <Picker.Item label="Latte" value="Latte" />
//                 <Picker.Item label="Espresso" value="Espresso" />
//               </Picker>
//             </Left>
//             <Body>
//               <Picker
//                 note
//                 mode="dropdown"
//                 style={{ width: 150 }}
//                 selectedValue={this.state.option}
//                 onValueChange={this.changeOption}
//               >
//                 <Picker.Item label="Small" value="Small" />
//                 <Picker.Item label="Medium" value="Medium" />
//                 <Picker.Item label="Large" value="Large" />
//               </Picker>
//             </Body>
//           </ListItem>
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

// CorpseDetail.navigationOptions = ({ navigation }) => {
//   const cafeID = navigation.getParam("cafeID");
//   const cafe = coffeeStore.cafes.find(cafe => cafe.id === cafeID).name;
//   return {
//     title: cafe,
//     headerRight: <CartButton />
//   };
// };

// export default observer(CorpseDetail);
