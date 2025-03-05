import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import images from "../constants/images";
import { Link } from "expo-router";
import { selectUser } from "@/redux/auth/selectors";
import { useSelector } from "react-redux";

const Header = () => {
  // const autorized = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return (
    <View style={styles.header}>
      <View style={styles.logoWrapper}>
        <Image style={styles.logoImage} source={images.Logo} />
        <Text style={styles.logoText}>Tracker of Water</Text>
      </View>
      {user && <Text>{user.name}</Text>}
      <Link href="/home" style={styles.link}>
        Home
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    // backgroundColor: "#fff",
    width: "100%",
    height: 64,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },

  logoWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },

  logoImage: {
    width: 40,
    height: 48,
  },

  nav: {},

  logoText: {
    marginStart: 4,
    color: "#407bff",
    fontSize: 12,
    width: 60,
    textAlign: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
  },

  link: {
    padding: 10,
    fontSize: 16,
    color: "#407bff",
  },

  logoContainer: {},
});

export default Header;
