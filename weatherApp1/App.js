import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { WeatherScreen } from "./components/WeatherScreen";
import { ForecastScreen } from "./components/ForecastScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Current Weather" component={WeatherScreen} />
        <Stack.Screen name="Weather Forecast" component={ForecastScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
