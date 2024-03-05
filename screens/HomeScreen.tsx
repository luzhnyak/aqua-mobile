import React, { FC, PropsWithChildren } from "react";
import { ImageBackground, StyleSheet } from "react-native";

const HomeScreen: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ImageBackground
      source={require("../assets/images/mobile-background-main-page.svg")}
      imageStyle={styles.background}
    >
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    width: "100%",
    resizeMode: "cover",
  },
});

export default HomeScreen;
