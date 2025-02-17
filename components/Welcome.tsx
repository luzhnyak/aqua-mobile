import React from "react";
import { useRouter } from "expo-router";
import { Image, Text, View, ImageBackground, StyleSheet } from "react-native";

import icons from "../constants/icons";
import images from "../constants/images";
import CustomButton from "./ui/CustomButton";

const Welcome = () => {
  const router = useRouter();

  return (
    <ImageBackground
      source={images.BackgroundMainPage}
      style={{ width: "100%", height: "100%" }}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Water consumption tracker</Text>
        <Text style={styles.subtitle}>Record daily water</Text>
        <Text style={styles.subtitle}>intake and track</Text>
        <Text style={styles.benefitsTitle}>Tracker Benefits</Text>

        <View style={styles.benefilsList}>
          <View style={styles.benefitsItem}>
            <Image
              style={styles.benefitsImage}
              source={icons.CalendarDays}
              resizeMode="contain"
            />
            <Text>Habit drive</Text>
          </View>
          <View style={styles.benefitsItem}>
            <Image
              style={styles.benefitsImage}
              source={icons.WrenchScrewdriver}
            />
            <Text>View statistics</Text>
          </View>
          <View style={styles.benefitsItem}>
            <Image
              style={styles.benefitsImage}
              source={icons.PresentationChartBar}
            />
            <Text>Personal rate setting</Text>
          </View>
        </View>
        <CustomButton
          title="Try tracker"
          handlePress={() => router.push("/signin")}
          isLoading={false}
          containerStyles={{ marginBottom: 36 }}
          textStyles={{ fontSize: 18 }}
        />

        <View style={styles.whyBlock}>
          <Text style={styles.whyTitle}>Why drink water</Text>
          <View style={styles.whyList}>
            <View style={styles.whyItem}>
              <Image source={icons.Dot} />
              <Text style={styles.whyText}>
                Supply of nutrients to all organs
              </Text>
            </View>

            <View style={styles.whyItem}>
              <Image source={icons.Dot} />
              <Text style={styles.whyItem}>Providing oxygen to the lungs</Text>
            </View>

            <View style={styles.whyItem}>
              <Image source={icons.Dot} />
              <Text style={styles.whyItem}>
                Maintaining the work of the heart
              </Text>
            </View>

            <View style={styles.whyItem}>
              <Image source={icons.Dot} />
              <Text style={styles.whyItem}>
                Release of processed substances
              </Text>
            </View>

            <View style={styles.whyItem}>
              <Image source={icons.Dot} />
              <Text style={styles.whyItem}>
                Ensuring the stability of the internal environment
              </Text>
            </View>

            <View style={styles.whyItem}>
              <Image source={icons.Dot} />
              <Text style={styles.whyItem}>
                Maintaining within the normal temperature
              </Text>
            </View>

            <View style={styles.whyItem}>
              <Image source={icons.Dot} />
              <Text style={styles.whyItem}>
                Maintaining an immune system capable of resisting disease
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
  },

  title: {
    marginTop: 48,
    marginBottom: 16,
    color: "#2f2f2f",
    fontSize: 28,
    fontWeight: 700,
    lineHeight: 32,
  },

  subtitle: {
    fontSize: 24,
    fontWeight: 400,
    lineHeight: 30,
  },

  // ==========================   benefits

  benefitsTitle: {
    marginTop: 24,
    marginBottom: 12,
    fontSize: 18,
    fontWeight: 500,
    lineHeight: 20,
  },

  benefilsList: {
    gap: 8,
    marginBottom: 24,
  },

  benefitsItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  benefitsImage: {
    width: 32,
    height: 32,
    color: "#407bff",
  },

  benefitsText: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 20,
  },

  // ==========================   whyBlock
  whyBlock: {
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: "#ecf2ff",
    borderRadius: 10,
  },

  whyTitle: {
    marginBottom: 12,
    fontSize: 18,
    fontWeight: 500,
  },

  whyList: {
    gap: 16,
  },

  whyItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  whyText: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 20,
  },
});

export default Welcome;
