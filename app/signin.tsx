import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const signin = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>signin</Text>
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
      <Link
        href="/home"
        style={{
          padding: 10,
          fontSize: 18,
          color: "blue",
        }}
      >
        Home
      </Link>
    </View>
  );
};

export default signin;
