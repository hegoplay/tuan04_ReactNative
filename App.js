import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen01 from "./screens/Screen01";
import Screen02 from "./screens/Screen02";
import Screen03 from "./screens/Screen03";
import Screen04 from "./screens/Screen04";
import UserContextProvider from "./store/UserContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <UserContextProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Screen04">
            <Stack.Screen name="Screen01" component={Screen01} />
            <Stack.Screen name="Screen02" component={Screen02} />
            <Stack.Screen name="Screen03" component={Screen03} />
            <Stack.Screen name="Screen04" component={Screen04} />
          </Stack.Navigator>
        </NavigationContainer>
      </UserContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
