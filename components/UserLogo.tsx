import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { IUser } from "@/types";
import icons from "@/constants/icons";

type UserLogoProps = {
  user: IUser;
};

export const UserLogo = ({ user }: UserLogoProps) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.userName}>{user.name}</Text>
      <TouchableOpacity style={styles.wrapperAvatar}>
        <Image style={styles.avatar} source={{ uri: user.avatarURL }} />
        <Image style={styles.btn} source={icons.ChevronDoubleUp} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  userName: {
    fontSize: 16,
  },
  wrapperAvatar: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 20,
  },
  btn: {
    width: 16,
    height: 16,
  },
});
