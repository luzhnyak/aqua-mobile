import React from "react";
import { useRouter } from "expo-router";
import {
  Image,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { styles } from "./Welcome.styles";

import icons from "../../constants/icons";
import images from "../../constants/images";

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

        <TouchableOpacity
          style={styles.btn}
          onPress={() => router.push("/signin")}
        >
          <Text style={styles.btnText}>Try tracker</Text>
        </TouchableOpacity>

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

export default Welcome;
