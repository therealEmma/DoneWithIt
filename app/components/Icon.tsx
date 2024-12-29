import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export type MaterialCommunityIconName =
  | "alert-circle"
  | "repeat"
  | "anchor"
  | "link"
  | "at"
  | "details"
  | "head"
  | "label"
  | "map"
  | "menu"
  | "script"
  | "select"
  | "table"
  | "video"
  | "circle"
  | "email"
  | "home"
  | "account"
  | "bell"
  | "format-list-bulleted" 
  | "logout"
  |"trash-can"
  |"chevron-down"
  |"apps"
  |"lock"

interface IconProps {
  name: MaterialCommunityIconName; 
  size?: number;
  backgroundColor?: string; 
  iconColor?: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 40,
  backgroundColor = "#000",
  iconColor = "#fff",
}) => {
  return (
    <View
      style={[styles.container, {
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: 'center',
        alignItems: 'center'
      }]}
    >
      <MaterialCommunityIcons name={name} size={size * 0.5} color={iconColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Icon;
