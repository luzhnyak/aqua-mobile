import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Image, Text, View, Button } from "react-native";
import { styles } from "./Welcome.styles";

import calendarDays from "../../assets/icons/calendar-days.svg";
import presentationChartBar from "../../assets/icons/presentation-chart-bar.svg";
import wrenchScrewdriver from "../../assets/icons/wrench-screwdriver.svg";
import dot from "../../assets/icons/dot.svg";

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Water consumption tracker</Text>
      <Text style={styles.subtitle}>Record daily water intake and track</Text>
      <Text style={styles.benefitsTitle}>Tracker Benefits</Text>

      <View style={styles.benefilsList}>
        <View style={styles.benefitsItem}>
          <Image style={styles.benefitsImage} source={calendarDays} />
          <Text>Habit drive</Text>
        </View>
        <View style={styles.benefitsItem}>
          <Image style={styles.benefitsImage} source={wrenchScrewdriver} />
          <Text>View statistics</Text>
        </View>
        <View style={styles.benefitsItem}>
          <Image style={styles.benefitsImage} source={presentationChartBar} />
          <Text>Personal rate setting</Text>
        </View>
      </View>

      <View style={styles.btn}>
        <Text style={styles.btnText}>Try tracker</Text>
      </View>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate("Signin")}
      />

      <View style={styles.whyBlock}>
        <Text style={styles.whyTitle}>Why drink water</Text>
        <View style={styles.whyList}>
          <View style={styles.whyItem}>
            <Image source={dot} />
            <Text style={styles.whyText}>
              Supply of nutrients to all organs
            </Text>
          </View>

          <View style={styles.whyItem}>
            <Image source={dot} />
            <Text style={styles.whyItem}>Providing oxygen to the lungs</Text>
          </View>

          <View style={styles.whyItem}>
            <Image source={dot} />
            <Text style={styles.whyItem}>
              Maintaining the work of the heart
            </Text>
          </View>

          <View style={styles.whyItem}>
            <Image source={dot} />
            <Text style={styles.whyItem}>Release of processed substances</Text>
          </View>

          <View style={styles.whyItem}>
            <Image source={dot} />
            <Text style={styles.whyItem}>
              Ensuring the stability of the internal environment
            </Text>
          </View>

          <View style={styles.whyItem}>
            <Image source={dot} />
            <Text style={styles.whyItem}>
              Maintaining within the normal temperature
            </Text>
          </View>

          <View style={styles.whyItem}>
            <Image source={dot} />
            <Text style={styles.whyItem}>
              Maintaining an immune system capable of resisting disease
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Welcome;
