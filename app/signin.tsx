import { View, Text, ImageBackground, Image, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";
import SigninForm from "@/components/SigninForm";
import images from "@/constants/images";
import Header from "@/components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { loginThunk } from "../redux/auth/operations";

const signin = () => {
  const dispatch: AppDispatch = useDispatch();

  const handleLogin = (email: string, password: string) => {
    try {
      dispatch(loginThunk({ email, password }));
      console.log("login success");
    } catch (error) {
      console.error(error);
    }
  };

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
          <SigninForm handleLogin={handleLogin} />
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

export default signin;
