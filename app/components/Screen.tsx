import React, { ReactNode } from "react";
import { SafeAreaView, StyleProp, StyleSheet, TextStyle } from "react-native";
import Constants from "expo-constants";

interface ScreenProp  {
  children: ReactNode;
  style?: StyleProp<TextStyle>
};

const Screen = ({ children, style }: ScreenProp) => {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});

export default Screen;
