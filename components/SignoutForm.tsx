import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import FormField from "./ui/FormField";
import CustomButton from "./ui/CustomButton";
import { Link } from "expo-router";

type LoginFormProps = {
  handleLogin: (email: string, password: string) => void;
  loading?: boolean;
};

const SignoutForm = ({ handleLogin, loading }: LoginFormProps) => {
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
        Sign Out
      </Text>
      <FormField
        title="Enter your name"
        value={formData.name}
        placeholder="Name"
        handleChangeText={(e: string) => setFormData({ ...formData, name: e })}
      />
      <FormField
        title="Enter your email"
        value={formData.email}
        placeholder="Email"
        handleChangeText={(e: string) => setFormData({ ...formData, email: e })}
      />
      <FormField
        title="Password"
        value={formData.password}
        placeholder="Password"
        handleChangeText={(e: string) =>
          setFormData({ ...formData, password: e })
        }
      />
      <CustomButton
        title="Sign Out"
        handlePress={() => console.log("Кнопка натиснута")}
        isLoading={false}
        // containerStyles={{ marginTop: 20 }}
        textStyles={{ fontSize: 18 }}
      />
      <View style={styles.container}>
        <Text style={styles.text}>Already have an account?</Text>
        <Link href="/signin" style={styles.link}>
          Sign In
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
    fontSize: 18,
    color: "#333",
    fontFamily: "Poppins-Regular",
  },
  link: {
    fontSize: 18,
    color: "#001aff",
    fontFamily: "Poppins-SemiBold",
  },
});

export default SignoutForm;
