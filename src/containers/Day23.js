"use strict";

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

export default class extends Component {
  /* static navigationOptions = {
    header: null
  }; */

  _show(index) {
    if (index) {
      console.log("Index..", index);
      this.props.navigation.navigate("Sphere");
    } else {
      this.props.navigation.navigate("Poincare");
    }
  }

  render() {
    return (
      <View style={styles.menu}>
        <TouchableHighlight style={styles.btn} onPress={() => this._show(0)}>
          <View>
            <Image source={require("../img/poincare.png")} style={styles.img} />
            <View style={styles.textContainer}>
              <Text style={styles.text}>Poincaré Disk</Text>
              <Icon
                style={styles.itemNav}
                name="ios-arrow-forward-outline"
                size={35}
              />
            </View>
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.btn} onPress={() => this._show(1)}>
          <View>
            <Image source={require("../img/sphere.jpg")} style={styles.img} />
            <View style={styles.textContainer}>
              <Text style={styles.text}>Sphere</Text>
              <Icon
                style={styles.itemNav}
                name="ios-arrow-forward-outline"
                size={35}
              />
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  itemWrapper: {
    backgroundColor: "#f3f3f3"
  },
  menu: {
    paddingTop: 80,
    backgroundColor: "#ffffff",
    width: Util.size.width,
    height: Util.size.height
  },
  btn: {
    height: 100,
    marginBottom: 20,
    width: 375
  },
  img: {
    height: 100,
    width: 375,
    resizeMode: "cover"
  },
  textContainer: {
    height: 100,
    width: 375,
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center"
  },
  text: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "500",
    paddingLeft: 20
  },
  itemNav: {
    color: "#fff",
    position: "absolute",
    right: 20,
    top: 32
  }
});
