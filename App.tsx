import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, ScrollView, View } from "react-native";
import Welcome from "./components/Welcome/Welcome";
import Header from "./components/Header/Header";

import HomeScreen from "./screens/HomeScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import SigninScreen from "./screens/SigninScreen";
import SignupScreen from "./screens/SignupScreen";

const MainStack = createStackNavigator(); // вказує на групу навігаторів

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Welcome">
        {/* Аналог Routes */}
        <MainStack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ title: "Start screen", headerTitle: Header }}
        />
        <MainStack.Screen name="Signup" component={SignupScreen} />
        {/* Аналог Route */}
        <MainStack.Screen name="Signin" component={SigninScreen} />
        <MainStack.Screen name="Home" component={HomeScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

{
  /* <ScrollView>
  <HomeScreen>
    <Header />

    <StatusBar style="auto" />
  </HomeScreen>
</ScrollView>; */
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
