import React, { Component } from "react";
import SwipeCards from "../components/SwipeCards";

export default class Day14 extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return <SwipeCards style={{ flex: 1 }} />;
  }
}
