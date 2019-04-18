import React, { Component } from "react";
import { AppRegistry, Text, View } from "react-native";
import Component2 from "./components/Component2/Component2";

export default class MyApp extends Component {
  render() {
    return (
      <View>
        <Component2 />
      </View>
    );
  }
}

AppRegistry.registerComponent("MyApp", () => MyApp);
