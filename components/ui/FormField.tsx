import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

type FormFieldProps = {
  title: string;
  value: string;
  placeholder: string;
  handleChangeText: (text: string) => void;
  otherStyles?: string;
};

export default function FormField({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}: FormFieldProps) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={"#D7E3FF"}
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={!showPassword ? "eye" : "eye-off"}
              size={24}
              color="#407BFF"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 16 },
  title: { fontSize: 18, color: "#2F2F2F", lineHeight: 24, marginBottom: 8 },
  inputWrapper: {
    width: "100%",
    height: 50,
    paddingHorizontal: 10,
    // paddingVertical: 12,
    backgroundColor: "#fff",
    borderColor: "#D7E3FF",
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // justify-between
  },
  input: {
    // backgroundColor: "red",
    flex: 1, // flex-1
    color: "#333", // text-white
    fontFamily: "Poppins-SemiBold", // font-psemibold (замініть на відповідний шрифт)
    fontSize: 16,
    lineHeight: 20,
    // height: 20,
  },
  focused: {
    borderColor: "#FF6600", // focus:border-secondary (замініть на відповідний колір)
  },
});
