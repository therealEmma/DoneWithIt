import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/color";

//Define button Props
interface ButtonProps  {
  title: string;
  onPress: () => void;
  color?: keyof typeof colors;
};

const AppButton = ({ title, onPress, color = "primary" }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical:10,
  },
  text: {
    color: colors.white, // Adjust text color to stand out
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default AppButton;
