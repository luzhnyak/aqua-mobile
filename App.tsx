import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Welcome from "./components/Welcome/Welcome";
import Header from "./components/Header/Header";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Welcome />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    fontFamily: "Roboto",
    // alignItems: "flex-start",
    // justifyContent: "flex-start",
  },
});
