import { View, Text, ImageBackground, Image, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";
import SignoutForm from "@/components/SignoutForm";
import images from "@/constants/images";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/Header";

const signout = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <ImageBackground
        source={images.BackgroundElementSignIn}
        style={styles.background}
        resizeMode="contain"
      >
        <ImageBackground
          source={images.BottleSignIn}
          style={styles.backgroundBottle}
          imageStyle={styles.image}
          resizeMode="cover"
        >
          <SignoutForm handleLogin={console.log} loading={false} />
        </ImageBackground>
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

export default signout;
