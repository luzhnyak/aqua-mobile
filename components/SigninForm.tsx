import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import FormField from "./ui/FormField";
import CustomButton from "./ui/CustomButton";
import { Link } from "expo-router";

type LoginFormProps = {
  handleLogin: (email: string, password: string) => void;
  loading?: boolean;
};

const SigninForm = ({ handleLogin, loading }: LoginFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = () => {
    handleLogin(formData.email, formData.password);
  };
  return (
    <View style={{ padding: 20 }}>
      <Text
        style={{
          fontSize: 26,
          color: "#2F2F2F",
          fontWeight: "bold",
          marginBottom: 16,
        }}
      >
        Sign In
      </Text>
      <FormField
        title="Email"
        value={formData.email}
        placeholder="Enter your email"
        handleChangeText={(e: string) => setFormData({ ...formData, email: e })}
      />
      <FormField
        title="Password"
        value={formData.password}
        placeholder="Enter your password"
        handleChangeText={(e: string) =>
          setFormData({ ...formData, password: e })
        }
      />
      <CustomButton
        title="Sign In"
        handlePress={() => console.log("Кнопка натиснута")}
        isLoading={false}
        // containerStyles={{ marginTop: 20 }}
        textStyles={{ fontSize: 18 }}
      />
      <View style={styles.container}>
        <Text style={styles.text}>Don't have an account?</Text>
        <Link href="/signout" style={styles.link}>
          Sign Out
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    gap: 8,
  },
  text: {
    fontSize: 18, // text-lg
    color: "#333", // text-gray-100 (замініть на потрібний відтінок)
    fontFamily: "Poppins-Regular", // font-pregular (замініть на ваш шрифт)
  },
  link: {
    fontSize: 18, // text-lg
    color: "#001aff", // text-secondary (замініть на відповідний колір)
    fontFamily: "Poppins-SemiBold", // font-psemibold
  },
});

export default SigninForm;
