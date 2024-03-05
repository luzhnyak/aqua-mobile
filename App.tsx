import { StatusBar } from "expo-status-bar";
import { StyleSheet, ScrollView, View } from "react-native";
import Welcome from "./components/Welcome/Welcome";
import Header from "./components/Header/Header";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  return (
    <ScrollView>
      <HomeScreen>
        <Header />
        <Welcome />
        <StatusBar style="auto" />
      </HomeScreen>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // flexDirection: "column",
    // fontFamily: "Roboto",
    // alignItems: "flex-start",
    // justifyContent: "flex-start",
  },
});
