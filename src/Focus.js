import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Focus extends Component {
  state = {};
  render() {
    return (
      <View style={styles.root}>
        <View style={{ ...StyleSheet.absoluteFill }}>
          <Image
            source={require("../assets/bg_v2.jpg")}
            style={{
              flex: 1,
              height: null,
              width: null
            }}
          />
        </View>
        <View></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

export default Focus;
