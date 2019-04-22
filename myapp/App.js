import React, { Component } from "react";
import { AppRegistry, Text, View } from "react-native";
import Component3 from "./components/Component3/Component3";

export default class MyApp extends Component {
  render() {
    return (
      <View>
        <Component3 />
      </View>
    );
  }
}

AppRegistry.registerComponent("MyApp", () => MyApp);
