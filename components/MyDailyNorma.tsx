import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import ModalMyDailyNorma from "./ModalMyDailyNorma";

const MyDailyNorma = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My daily norma</Text>
      <View style={styles.textBtnWrapper}>
        <Text style={styles.text}>1.5 L</Text>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={styles.btn}>Edit</Text>
        </TouchableOpacity>
        <ModalMyDailyNorma
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ECF2FF",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 164,
    height: 74,
  },
  title: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: 500,
  },
  textBtnWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
    marginTop: 4,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#407BFF",
  },
  btn: {
    fontSize: 18,
    fontWeight: 400,
    color: "#8BAEFF",
  },
});

export default MyDailyNorma;
