import React from "react";
import { TextInput, View, StyleSheet, Platform, TextInputProps } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialCommunityIconName } from "./Icon";

import defaultStyles from "../config/styles";

interface AppTextInputProp extends TextInputProps {
  icon?: MaterialCommunityIconName;
}

const AppTextInput = ({ icon, ...otherProps }: AppTextInputProp) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput style={[defaultStyles.text, { flex: 1 }]} {...otherProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
