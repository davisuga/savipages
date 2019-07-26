import React, { Component } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
export default class MaterialMessageTextbox extends Component {
   render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Text
          style={[
            styles.label,
            {
              color: this.props.error
                ? "red"
                : this.props.success
                ? "green"
                : "rgba(0,0,0,0.6)"
            }
          ]}
        >
          Label
        </Text>
        <TextInput
          style={[
            styles.inputStyle,
            {
              borderBottomColor: this.props.error
                ? "red"
                : this.props.success
                ? "green"
                : "#D9D5DC"
            }
          ]}
          placeholder="Input"
        />
        {this.props.error ? (
          <Text
            style={[
              styles.helper1,
              {
                color: this.props.error ? "red" : "transparent"
              }
            ]}
          >
            Error message
          </Text>
        ) : null}
        {this.props.success ? (
          <Text
            style={[
              styles.helper2,
              {
                color: this.props.success ? "green" : "transparent"
              }
            ]}
          >
            Success message
          </Text>
        ) : null}
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
    paddingTop: 16
  },
  helper1: {
    fontFamily: "roboto-regular",
    fontSize: 12,
    textAlign: "left",
    paddingTop: 8
  },
  helper2: {
    fontFamily: "roboto-regular",
    fontSize: 12,
    textAlign: "left",
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
