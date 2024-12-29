import React, { useState } from "react";
import { View, StyleSheet, FlatList, ListRenderItemInfo } from "react-native";
import ListItem from "../components/ListItem";

import Screen from "../components/Screen";
import ListItemSeperator from "../components/ListItemSeperator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import Icon from "../components/Icon";

// Define the type for a message item
interface Message {
  id: number;
  title: string;
  description: string;
  image: any; // Use `any` for the image as it refers to a `require`d asset
}

// Initial messages array with type annotation
const InitialMessages: Message[] = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/Leevi.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/Leevi.jpg"),
  },
];

const MessagesScreen: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(InitialMessages);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const handleDelete = (message: Message): void => {
    // Update state to remove the deleted message
    setMessages((prevMessages) =>
      prevMessages.filter((m) => m.id !== message.id)
    );
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }: ListRenderItemInfo<Message>) => (
          <ListItem
            image={item.image}
            title={item.title}
            subtitle={item.description}
            onPress={() => console.log("Message Selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onpress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/Leevi.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default MessagesScreen;
