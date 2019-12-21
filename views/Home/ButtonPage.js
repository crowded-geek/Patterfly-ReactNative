import React, { Component } from "react";
import { View } from "react-native";
import { WebView } from 'react-native-webview';

export default class ButtonPage extends Component {
  render() {
    return (
    <WebView
      source={{ uri: 'https://www.patternfly.org/v4/documentation/core/components/button/variations/' }}
      style={{ width:"100%", height: "100%", padding: 16 }}
    />
  );
  }
}
