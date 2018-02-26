import React, { Component } from "react";
import { StyleSheet, Image, Text, View, WebView } from "react-native";
import Util from "../containers/utils";
import Icon from "react-native-vector-icons/Ionicons";

export default class Sphere extends Component {
  render() {
    return (
      <WebView
        automaticallyAdjustContentInsets={false}
        source={require("../public/demo2.html")}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        decelerationRate="normal"
        startInLoadingState={true}
      />
    );
  }
}
