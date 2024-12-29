import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import color from "../config/color";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color="white" size={35} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons name="trash-can-outline" color="white" size={35} />
      </View>
      <Image
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  closeIcon: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  container: {
    flex: 1,
    backgroundColor: color.black, // Ensure this is properly defined
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "contain", // Ensures proper scaling
  },
});

export default ViewImageScreen;
