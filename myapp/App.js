import React, { Component } from "react";
import { AppRegistry, Text, View } from "react-native";
import Component5 from "./components/Component5/Component5";

export default class MyApp extends Component {
  render() {
    return (
      <View>
        <Component5 />
      </View>
    );
  }
}

AppRegistry.registerComponent("MyApp", () => MyApp);
