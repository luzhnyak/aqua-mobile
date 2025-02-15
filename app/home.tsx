import { View, Text, ImageBackground, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";
import Header from "@/components/Header";
import images from "@/constants/images";
import { SafeAreaView } from "react-native-safe-area-context";

const home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <ImageBackground
        source={images.BackgroundElementSignIn}
        style={styles.background}
        resizeMode="contain"
      >
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
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  backgroundBottle: {
    flex: 1,
  },
  image: {
    top: 440,
    left: "50%",
    transform: [{ translateX: "-50%" }],
    width: 280,
    height: 210,
  },
  content: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

export default home;
