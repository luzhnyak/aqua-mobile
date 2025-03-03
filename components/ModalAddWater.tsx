import { StyleSheet } from "react-native";
import React, { FC } from "react";
import CustomButton from "./ui/CustomButton";
import CustomModal from "./ui/CustomModal";

type ModalAddWaterProps = {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  isEditWater?: boolean;
};

const ModalAddWater: FC<ModalAddWaterProps> = ({
  modalVisible,
  setModalVisible,
  isEditWater = false,
}) => {
  return (
    <CustomModal
      title={isEditWater ? "Edit Water" : "Add Water"}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
    >
      <CustomButton
        title={isEditWater ? "Save" : "Add Water"}
        handlePress={() => setModalVisible(!modalVisible)}
        isLoading={false}
        containerStyles={{ with: 100 }}
        textStyles={{ fontSize: 18 }}
      />
    </CustomModal>
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

export default ModalAddWater;
