import React, { Component } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
export default class MaterialFixedLabelTextbox extends Component {
   render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Text style={styles.label}>FixedLabel</Text>
        <TextInput style={styles.inputStyle} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    backgroundColor: "transparent",
    flexDirection: "row",
    paddingLeft: 16,
    flex: 1
  },
  label: {
    fontFamily: "roboto-regular",
    fontSize: 16,
    lineHeight: 16,
    paddingTop: 16,
    paddingBottom: 8,
    color: "#000",
    opacity: 0.5,
    alignSelf: "flex-start",
    flex: 0
  },
  inputStyle: {
    color: "#000",
    paddingRight: 5,
    fontFamily: "roboto-regular",
    fontSize: 16,
    alignSelf: "flex-start",
    flex: 1,
    lineHeight: 16,
    paddingTop: 14,
    paddingBottom: 8,
    paddingLeft: 30
  }
});
