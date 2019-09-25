import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Text, List, Button } from "native-base";

// Component
import CartItem from "./CartItem";

//Store
import cartStore from "../../stores/cartStore";
import authStore from "../../stores/authStore";

class CorpseCart extends Component {
  state = {
    loading: true,
    cartItems: []
  };

  // async await componentDidMount = () =>
  //   if (authStore.user && cartStore.loading === false) {
  //     cartStore.fetchCartItems();
  //   }

  //   const items = cartStore;
  //   let cartItems;
  //   if (!cartStore.loading) {
  //     cartItems = items.map(item => <CartItem item={item} key={item.id} />);
  //   }

  //function InstructorsList(props) {
  //   const instructorList = props.instructors.map(instructor => (
  //     <InstructorCard instructor={instructor} />
  // ));

  componentDidMount() {
    const { items } = cartStore;
    if (items) {
      console.log("CORPSECART", items);
      fixedItems = items.map(item => <CartItem item={item} key={item.id} />);
      this.setState({
        loading: false,
        cartItems: fixedItems
      });
    }
  }
  render() {
    return (
      //if (this.state.loading) {
      <List>
        {this.state.cartItems}
        <Button
          full
          danger
          onPress={() => cartStore.checkoutCart(this.props.navigation)}
        >
          <Text>Checkout</Text>
        </Button>
      </List>
    );
  }
}

export default observer(CorpseCart);
