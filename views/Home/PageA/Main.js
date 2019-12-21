import React, { Component } from "react";
import { Button, View, Text } from "react-native";

export default class Main extends Component {
  render() {
    return (
      <View style={{ width:"100%",height:"100%",backgroundColor: "white" }}>
        <Text style={{alignSelf:"center", fontSize: 56, padding:16}}>PatternFly Components!</Text>
      </View>
    );
  }
}
