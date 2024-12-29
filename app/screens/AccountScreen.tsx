import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import colors from "../config/color";
import Icon from "../components/Icon";
import { MaterialCommunityIconName } from "../components/Icon";
import ListItemSeperator from "../components/ListItemSeperator";


interface MenuItemsProp {
  title: string;
  icon: {
    name: string;
    backgroundColor: string;
  };
}


const menuItems: MenuItemsProp[] = [
  {
    title: "My listings",
    icon: {
      name: "format-list-bulleted", 
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
  
];

const AccountScreen = () => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Ozegbe Emmanuel"
          subtitle="eozegbe68@gmail.com"
          image={require("../assets/Leevi.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems} // This is your array of objects
          ItemSeparatorComponent={ListItemSeperator}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name as MaterialCommunityIconName} 
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem title="Logout" IconComponent={
        <Icon name="logout" backgroundColor="#ffe66d" />
      }  />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen:{
    backgroundColor:colors.light
  }
});

export default AccountScreen;
