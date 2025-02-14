import { View, Text, ImageBackground, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";
import SignoutForm from "@/components/SignoutForm";
import images from "@/constants/images";

const signout = () => {
  return (
    <ImageBackground
      source={images.BackgroundElementSignIn}
      style={{ width: "100%", height: "100%" }}
      resizeMode="contain"
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <SignoutForm handleLogin={console.log} loading={false} />
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
        <Image
          source={images.BottleSignIn}
          style={{ width: 280, height: 210 }}
        />
      </View>
    </ImageBackground>
  );
};

export default signout;
