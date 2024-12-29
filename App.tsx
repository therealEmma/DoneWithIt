import "react-native-gesture-handler"; // This should be at the top
import React, { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler"; // Import this
import MessagesScreen from "./app/screens/MessagesScreen";
import AccountScreen from "./app/screens/AccountScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import AppPicker, { Items } from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <LoginScreen />
    </GestureHandlerRootView>
  );
};

export default App;
