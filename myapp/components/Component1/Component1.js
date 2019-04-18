import React, { Component } from "react";
import { AppRegistry, Text, View } from "react-native";

export default class Component1 extends Component {
  constructor() {
    super();
    this.state = {
      name: "Josh"
    };
  }

  render() {
    return (
      <View>
        <Text>{this.props.message}</Text>
        <Text>{this.state.name}</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent("Component1", () => Component1);
