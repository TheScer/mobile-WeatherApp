import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export const ForecastItem = ({
  time,
  description,
  temperature,
  windspeed,
  fullIconUri,
}) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: fullIconUri }} style={styles.image} />
      <View style={styles.otherContainer}>
        <Text style={styles.day}>{time}</Text>
        <Text style={styles.temp}>{description}</Text>
        <Text style={styles.temp}>Temperature: {temperature}&#176;C</Text>
        <Text style={styles.temp}>Windspeed:{windspeed}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
  container: {
    flexDirection: "row",
    backgroundColor: "#64ABE3",
    justifyContent: "center",
    borderRadius: 50,
    fontWeight: "200",
    marginBottom: 15,
    height: 200,
  },
  day: {
    fontSize: 20,
    color: "white",
    backgroundColor: "#8aa4ab",
    padding: 10,
    textAlign: "center",
    borderRadius: 50,
    fontWeight: "200",
    marginBottom: 15,
    marginTop: 20,
  },
  temp: {
    fontSize: 16,
    color: "white",
    fontWeight: "100",
    textAlign: "center",
  },
  otherContainer: {
    paddingRight: 20,
  },
});
