import React, { Component } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
export default class MaterialHelperTextBox extends Component {
   render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Text style={styles.label}>StackedLabel</Text>
        <TextInput style={styles.inputStyle} placeholder="Input" />
        <Text style={styles.helper}>Helper text</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "transparent",
    flex: 1
  },
  label: {
    fontFamily: "roboto-regular",
    fontSize: 12,
    textAlign: "left",
    color: "#000",
    opacity: 0.6,
    paddingTop: 16
  },
  helper: {
    fontFamily: "roboto-regular",
    fontSize: 12,
    textAlign: "left",
    color: "#000",
    opacity: 0.6,
    paddingTop: 8
  },
  inputStyle: {
    width: "100%",
    color: "#000",
    alignSelf: "flex-start",
    paddingTop: 8,
    paddingBottom: 8,
    borderColor: "#D9D5DC",
    borderBottomWidth: 1,
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 16
  }
});
