import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import ModalAddWater from "./ModalAddWater";
import TodayItem from "./TodayItem";

const Today = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Today</Text>
      <ScrollView
        nestedScrollEnabled={true}
        contentContainerStyle={styles.itemsWrapper}
      >
        <TodayItem />
        <TodayItem />
        <TodayItem />
        <TodayItem />
        <TodayItem />
        <TodayItem />
        <TodayItem />
        <TodayItem />
      </ScrollView>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text style={styles.btn}>+ Add water</Text>
      </TouchableOpacity>
      <ModalAddWater
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    borderRadius: 4,
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: 500,
    color: "#2F2F2F",
    paddingHorizontal: 4,
  },
  itemsWrapper: {
    paddingRight: 8,
  },
  btn: {
    fontSize: 16,
    fontWeight: 500,
    color: "#407BFF",
    marginTop: 8,
    marginBottom: 8,
    paddingLeft: 8,
  },
});

export default Today;
