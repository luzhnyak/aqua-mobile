import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import icons from "../constants/icons";

const TodayItem = () => {
  return (
    <View style={styles.wrapper}>
      <Image source={icons.Glass} style={styles.glassImage} />
      <View style={styles.textWrapper}>
        <Text style={styles.capacity}>200 ml</Text>
        <Text style={styles.time}>14:00 PM</Text>
      </View>
      <View style={styles.actionsWrapper}>
        <TouchableOpacity>
          <Image style={styles.actionImage} source={icons.PencilSquare} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.actionImage} source={icons.Trash} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#D7E3FF",
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  glassImage: {
    marginLeft: 8,
    width: 30,
    height: 30,
  },
  textWrapper: {
    flex: 1,
    gap: 12,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: 12,
  },
  actionsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 8,
    gap: 16,
  },
  actionImage: {
    width: 20,
    height: 20,
  },

  capacity: {
    width: 100,
    fontSize: 18,
    color: "#407BFF",
  },
  time: {
    fontSize: 12,
    color: "#2F2F2F",
  },
});

export default TodayItem;
