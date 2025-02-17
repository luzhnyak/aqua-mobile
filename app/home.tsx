import { View, Text, ImageBackground, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";
import Header from "@/components/Header";
import images from "@/constants/images";
import { SafeAreaView } from "react-native-safe-area-context";
import MyDailyNorma from "@/components/MyDailyNorma";

const home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <ImageBackground
        source={images.BackgroundElementSignIn}
        style={styles.background}
        resizeMode="contain"
      >
        <View style={styles.content}>
          <MyDailyNorma />
        </View>
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
    alignItems: "flex-start",
    padding: 20,
  },
});

export default home;
