import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import Header from "@/components/Header/Header";

const home = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Header />
      <Text>home</Text>
      <Link
        href="/signin"
        style={{
          padding: 10,
          fontSize: 18,
          color: "blue",
        }}
      >
        Sign In
      </Link>
      <Link
        href="/signout"
        style={{
          padding: 10,
          fontSize: 18,
          color: "blue",
        }}
      >
        Sign Out
      </Link>
    </View>
  );
};

export default home;
