import { View, Text } from "react-native";
import React, { useState } from "react";
import CustomButton from "./ui/CustomButton";
import ModalAddWater from "./ModalAddWater";

const AddWater = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <CustomButton
        title="Add Water"
        handlePress={() => setModalVisible(true)}
      />
      <ModalAddWater
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </>
  );
};

export default AddWater;
