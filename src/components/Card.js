import React, { Component } from "react";
import { View, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <LinearGradient
        colors={["#FFA374", "#FF9373", "#FF9373"]}
        style={{ height: 100 }}
      >
        <Text>Covid In Morocco</Text>
      </LinearGradient>
    );
  }
}

export default Card;
