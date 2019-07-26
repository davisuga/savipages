import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
export default class CupertinoButtonSuccess extends Component {
   render() {
    return (
      <TouchableOpacity style={[styles.root, this.props.style]}>
        <Text style={styles.caption}>SER AJUDADO</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "#4CD964",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    paddingLeft: 16,
    paddingRight: 16,
    flex: 1
  },
  caption: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "500",
    fontFamily: "roboto-regular"
  }
});
