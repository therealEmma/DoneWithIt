import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

import colors from "../config/color";
import AppText from "./AppText";

interface  CardProp  {
  title: string;
  subtitle: string;
  image: any; // Remote URL or local path as a require statement.
};

const Card = ({ title, subtitle, image }: CardProp) => {
  

  return (
    <View style={styles.card}>
      <Image  style={styles.image}
        source={{ uri: image }}  />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    marginBottom: 7,
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  detailsContainer: {
    padding: 20,
  },
});

export default Card;
