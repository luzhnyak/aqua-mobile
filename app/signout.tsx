import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const signout = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>signout</Text>
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

export default signout;
