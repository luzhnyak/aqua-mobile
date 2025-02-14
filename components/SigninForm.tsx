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
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 20,
          textAlign: "center",
        }}
      >
        Авторизація
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
        title="Авторизуватися"
        handlePress={() => console.log("Кнопка натиснута")}
        isLoading={false}
        containerStyles={{ marginTop: 20 }}
        textStyles={{ fontSize: 20 }}
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
    flexDirection: "row", // flex-row
    justifyContent: "center", // justify-center
    paddingTop: 20, // pt-5 (5 * 4 = 20)
    gap: 8, // gap-2 (2 * 4 = 8)
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
