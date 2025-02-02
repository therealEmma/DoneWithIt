import React from "react";
import { StyleSheet, ImageBackground, View, Image, Text } from "react-native";
import AppButton from "../components/AppButton";

const WelcomeScreen = () => {
  return (
    <ImageBackground
    blurRadius={10}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/logo-red.png")}
        ></Image>
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="login" onPress={() => console.log("tapped")} />
        <AppButton title="Register" color="secondary" onPress={() => console.log("tapped")} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 50,
    alignItems: "center",
  },
  tagline:{
    fontSize:25,
    fontWeight:"600",
    paddingVertical:20,
  },
});

export default WelcomeScreen;
