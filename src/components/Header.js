import React, { Component } from "react";
import { View, Text } from "react-native";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text> Header </Text>
      </View>
    );
  }
}

export default Header;
