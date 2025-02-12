import { View, Text } from "react-native";
import React from "react";
import Welcome from "@/components/Welcome/Welcome";

const index = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Welcome />
    </View>
  );
};

export default index;
