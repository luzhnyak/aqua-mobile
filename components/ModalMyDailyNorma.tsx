import { View, Text, Modal, StyleSheet, Pressable, Image } from "react-native";
import React, { FC } from "react";
import CustomButton from "./ui/CustomButton";
import icons from "../constants/icons";

type ModalMyDailyNormaProps = {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
};

const ModalMyDailyNorma: FC<ModalMyDailyNormaProps> = ({
  modalVisible,
  setModalVisible,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.conteiner}>
            <View style={styles.titleWrapper}>
              <Text style={styles.title}>My daily norma</Text>
              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <Image style={styles.btnCloseImage} source={icons.XMark} />
              </Pressable>
            </View>

            <CustomButton
              title="Save"
              handlePress={() => setModalVisible(!modalVisible)}
              isLoading={false}
              containerStyles={{ with: 100 }}
              textStyles={{ fontSize: 18 }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 24,
    paddingHorizontal: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  conteiner: {
    width: "100%",
  },
  btnCloseImage: {
    width: 24,
    height: 24,
  },
  titleWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
  },

  title: {
    fontSize: 26,
    fontWeight: 500,
  },
});

export default ModalMyDailyNorma;
