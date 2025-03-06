import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import Header from "@/components/Header";
import images from "@/constants/images";
import { SafeAreaView } from "react-native-safe-area-context";
import MyDailyNorma from "@/components/MyDailyNorma";
import AddWater from "@/components/AddWater";
import Today from "@/components/Today";

const home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Header />
        <ImageBackground
          source={images.BackgroundElementSignIn}
          style={styles.background}
          resizeMode="contain"
        >
          <View style={styles.content}>
            <MyDailyNorma />
            <View style={styles.imageBottleWrapper}>
              <Image source={images.BottleHome} style={styles.imageBottle} />
            </View>

            <AddWater />
            <View style={styles.todayMonthWrapper}>
              <Today />
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
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
  imageBottleWrapper: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 16,
  },
  imageBottle: {
    width: 280,
    height: 208,
  },
  content: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 20,
  },
  todayMonthWrapper: {
    width: "100%",
    minHeight: 300,
    backgroundColor: "#ECF2FF",
    borderRadius: 10,
    marginTop: 40,
    paddingVertical: 24,
    paddingHorizontal: 8,
  },
});

export default home;
