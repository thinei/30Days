/**
 * Day 5
 * find my location
 */
"use strict";

import React, { Component } from "react";
import {
  Platform,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Dimensions
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import MapView from "react-native-maps";

let { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE = 16.849664422544187;
const LONGITUDE = 96.16100292652845;
const LATITUDE_DELTA = 0.005; //Very high zoom level
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export class Map extends Component {
  static defaultProps = {
    mapType: "standard",
    showsUserLocation: false,
    followUserLocation: false
  };

  constructor() {
    super();
    this.state = {
      isFirstLoad: true,
      mapRegion: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      },
      annotations: []
    };
  }

  _getAnnotations(region) {
    return [
      {
        longitude: region.longitude,
        latitude: region.latitude,
        title: "You Are Here"
      }
    ];
  }

  _onRegionChangeComplete(region) {
    if (this.state.isFirstLoad) {
      this.setState({
        annotations: this._getAnnotations(region),
        isFirstLoad: false
      });
    }
  }

  render() {
    return (
      <View style={styles.mapContainer}>
        <MapView
          style={this.props.mapStyle}
          mapType={this.props.mapType}
          showsUserLocation={this.props.showsUserLocation}
          followUserLocation={this.props.followUserLocation}
          onRegionChangeComplete={region =>
            this._onRegionChangeComplete(region)}
          region={this.state.mapRegion}
          annotations={this.state.annotations}
          showsMyLocationButton={true}
        />
      </View>
    );
  }
}

export default class Day5 extends Component {
  static navigationOptions = {
    header: null
  };
  constructor() {
    super();
    this.state = {
      showGeo: false
    };
  }

  _getLocation() {
    this.setState({
      showGeo: true
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Map
          mapType="standard"
          mapStyle={styles.map}
          showsUserLocation={this.state.showGeo}
          followUserLocation={this.state.showGeo}
        />
        <TouchableHighlight
          underlayColor="#00bd03"
          style={styles.btn}
          onPress={() => this._getLocation()}
        >
          <Text style={styles.btnText}>
            <Icon size={18} name="md-navigate" />
            Find my location
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 600
  },
  map: {
    width: width,
    height: height
  },
  btn: {
    backgroundColor: "#00a803",
    width: width - 80,
    height: 40,
    borderWidth: 1,
    borderColor: "#009302",
    borderRadius: 4,
    justifyContent: "center",
    marginTop: 10
  },
  btnText: {
    textAlign: "center",
    fontSize: 18,
    color: "#fff"
  },
  mapContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center"
  }
});
