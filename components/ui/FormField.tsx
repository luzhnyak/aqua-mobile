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
          placeholderTextColor={"#7b7b8b"}
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={!showPassword ? "eye" : "eye-off"}
              size={24}
              color="#333"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 24 },
  title: { fontSize: 16, color: "#333", lineHeight: 24 },
  inputWrapper: {
    width: "100%", // w-full
    height: 64, // h-16 (16 * 4 = 64)
    paddingHorizontal: 12, // px-4 (4 * 4 = 16)
    backgroundColor: "#dfdcdc", // bg-black-100 (замініть на відповідний колір)
    borderColor: "#333", // border-black-200 (замініть на відповідний колір)
    borderWidth: 1,
    borderRadius: 8, // rounded-2xl
    flexDirection: "row", // flex-row
    alignItems: "center", // items-center
    justifyContent: "space-between", // justify-between
  },
  input: {
    flex: 1, // flex-1
    color: "#333", // text-white
    fontFamily: "Poppins-SemiBold", // font-psemibold (замініть на відповідний шрифт)
    fontSize: 20,
  },
  focused: {
    borderColor: "#FF6600", // focus:border-secondary (замініть на відповідний колір)
  },
});
