import { styles } from "./styles";
import React from "react";
import { Text, View, Image } from "react-native";
import Iconlogo from "../../assets/images/logo.svg";

const Header = () => {
  // const autorized = useSelector(selectIsLoggedIn);

  return (
    <View style={styles.header}>
      <View style={styles.logoWrapper}>
        <Image source={Iconlogo} />
        <Text style={styles.logoText}>Tracker of Water</Text>
      </View>
    </View>
  );
};

export default Header;
