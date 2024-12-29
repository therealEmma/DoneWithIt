import React from "react";
import { StyleSheet } from "react-native";
import AppText from "./AppText";
import color from "../config/color";

interface ErrorMessageProp {
  error: string | undefined| null;
  visible: boolean | undefined;
}


const ErrorMessage = ({ error, visible }: ErrorMessageProp) => {
  if (!visible || !error) return null;
  return <AppText style={styles.error}>{error}</AppText>;
};

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});

export default ErrorMessage;
