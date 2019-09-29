import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

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
        {/* email sign in/up */}
        <View style={styles.buttonWrapper}>
          <View style={styles.button}>
            <Text>SIGN IN</Text>
          </View>
          <View style={{ ...styles.button, backgroundColor: "#2E71DC" }}>
            <Text>SIGN IN WITH FACEBOOK</Text>
          </View>
        </View>

        {/* facebook sign in/up */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-end"
  },
  buttonWrapper: {
    height: height / 3
  },
  button: {
    backgroundColor: "#fff",
    height: 70,
    marginHorizontal: 20,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff"
  }
});

export default Focus;
