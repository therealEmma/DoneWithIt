import Swipeable from "react-native-gesture-handler/Swipeable";
import React, { ReactNode } from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import AppText from "./AppText";

import colors from "../config/color";

interface ListItemProps {
  image?: any; // Allow local `require`d images or remote URLs
  title: string;
  subtitle?: string;
  onPress?: () => void;
  renderRightActions?: () => React.ReactNode; // Optional swipe actions
  IconComponent?: ReactNode;
}

const ListItem: React.FC<ListItemProps> = ({
  image,
  title,
  subtitle,
  onPress,
  IconComponent,
  renderRightActions,
}) => {
  const imageSource = typeof image === "string" ? { uri: image } : image;

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={imageSource} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subtitle && <AppText style={styles.subtitle}>{subtitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    backgroundColor: colors.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  title: {
    fontWeight: "500",
  },
  subtitle: {
    color: colors.medium,
  },
});

export default ListItem;
