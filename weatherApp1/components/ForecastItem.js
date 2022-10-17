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
    width: 150,
    height: 150,
  },
  container: {
    flexDirection: "row",
    backgroundColor: "grey",
    justifyContent: "center",
    borderRadius: 50,
    fontWeight: "200",
    marginBottom: 15,
    height: 200,
  },
  day: {
    fontSize: 20,
    color: "white",
    backgroundColor: "orange",
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
    paddingRight: 40,
  },
});
