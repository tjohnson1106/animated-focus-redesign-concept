import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import Animated from "react-native-reanimated";
import { TapGestureHandler, State } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

const { Value, event, block, cond, eq, set } = Animated;

class Focus extends Component {
  constructor() {
    super();

    this.buttonOpacity = new Value(1);

    this.onStateChange = event([
      {
        nativeEvent: ({ state }) =>
          block([
            //   does state === STATE.END
            //   state changes upon release of button for animation to run
            cond(eq(state, State.END), set(this.buttonOpacity, 0))
          ])
      }
    ]);
  }
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
          <TapGestureHandler onHandlerStateChange={this.onStateChange}>
            <Animated.View style={{ ...styles.button, opacity: this.buttonOpacity }}>
              <Text>SIGN IN</Text>
            </Animated.View>
          </TapGestureHandler>
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
    height: height / 3,
    justifyContent: "center"
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
