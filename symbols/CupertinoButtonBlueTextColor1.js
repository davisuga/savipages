import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
export default class CupertinoButtonBlueTextColor1 extends Component {
   render() {
    return (
      <TouchableOpacity style={[styles.root, this.props.style]}>
        <Text style={styles.caption}>CANCELAR</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    flex: 1,
    borderWidth: 1,
    borderColor: "rgba(126,211,33,1)"
  },
  caption: {
    color: "rgba(126,211,33,1)",
    fontSize: 17,
    fontWeight: "500",
    fontFamily: "roboto-regular"
  }
});
