import React from "react";
import { Text, View } from "react-native";
import { styles } from "./Welcome.styles";

const Welcome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.whyBlock}>
        <Text style={styles.whyTitle}>Why drink water</Text>
        <View style={styles.whyList}>
          <Text style={styles.whyItem}>Supply of nutrients to all organs</Text>
          <Text style={styles.whyItem}>Providing oxygen to the lungs</Text>
          <Text style={styles.whyItem}>Maintaining the work of the heart</Text>
          <Text style={styles.whyItem}>Release of processed substances</Text>
          <Text style={styles.whyItem}>
            Ensuring the stability of the internal environment
          </Text>
          <Text style={styles.whyItem}>
            Maintaining within the normal temperature
          </Text>
          <Text style={styles.whyItem}>
            Maintaining an immune system capable of resisting disease
          </Text>
        </View>
      </View>

      {/* <View style={styles.dataContainer}>
        <View style={styles.benefitsBlock}>
          <Text style={styles.title}>Water consumption tracker</Text>
          <Text style={styles.subtitle}>
            Record daily water intake and track
          </Text>

          <Text style={styles.benefitsTitle}>Tracker Benefits</Text> */}
      {/* <ul style={styles.benefilsList}>
            <li style={styles.benefitsItem}>
              <img
                src={require("../../images/icons/calendar-days.svg").default}
                alt="Habit drive icon"
                width="32"
                height="32"
              />
              Habit drive
            </li>
            <li style={styles.benefitsItem}>
              <img
                src={
                  require("../../images/icons/presentation-chart-bar.svg")
                    .default
                }
                alt="Habit drive icon"
                width="32"
                height="32"
              />
              View statistics
            </li>
            <li style={styles.benefitsItem}>
              <img
                src={
                  require("../../images/icons/wrench-screwdriver.svg").default
                }
                alt="Habit drive icon"
                width="32"
                height="32"
              />
              Personal rate setting
            </li>
          </ul> */}
      {/* <Link to="/signup" style={styles.link}>
            <button style={styles.tryTrackerBtn}>Try tracker</button>
          </Link> */}
      {/* </View>
      </View> */}
    </View>
  );
};

export default Welcome;
