import React, { Component } from "react";
import { View } from "react-native";
import { WebView } from 'react-native-webview';

export default class CardPage extends Component {
  render() {
    return (
    <WebView
      source={{ uri: 'https://www.patternfly.org/v4/documentation/core/components/card/basic' }}
      style={{ width:"100%", height: "100%", padding: 16 }}
    />
  );
  }
}
