import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { WeatherScreen } from "./components/WeatherScreen";

export default function App() {
  return <WeatherScreen></WeatherScreen>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
