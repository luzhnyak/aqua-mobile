import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

type CustomButtonProps = {
  title: string;
  handlePress: () => void;
  containerStyles?: any;
  textStyles?: any;
  isLoading?: boolean;
};

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      style={[
        styles.button,
        isLoading && styles.disabled,
        containerStyles, // Додаткові стилі, якщо передані
      ]}
      disabled={isLoading}
    >
      <Text style={[styles.text, textStyles]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0ea07b", // Замініть на реальний колір secondary
    borderRadius: 12, // rounded-xl
    minHeight: 62, // min-h-[62px]
    justifyContent: "center",
    alignItems: "center",
  },
  disabled: {
    opacity: 0.5, // opacity-50
  },
  text: {
    color: "#000000", // Замініть на реальний колір primary
    fontFamily: "Poppins-SemiBold", // font-psemibold
    fontSize: 18, // text-lg
  },
});

export default CustomButton;
