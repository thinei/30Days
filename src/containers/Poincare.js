import React, { Component } from "react";
import {
  StyleSheet,
  TouchableHighlight,
  Navigator,
  Image,
  Text,
  View,
  WebView
} from "react-native";
import Util from "../containers/utils";
import Icon from "react-native-vector-icons/Ionicons";

export default class Poincare extends Component {
  render() {
    return (
      <WebView
        automaticallyAdjustContentInsets={false}
        source={require("../public/demo1.html")}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        decelerationRate="normal"
        startInLoadingState={true}
      />
    );
  }
}
