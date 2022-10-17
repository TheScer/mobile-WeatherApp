import React from "react";
import { Button, Text, View, StyleSheet, ImageView, Image } from "react-native";

export const WeatherInfo = ({
  description,
  temperature,
  windSpeed,
  iconUri,
}) => {
  const iconUriBase = "https://openweathermap.org/img/w/";
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        {/* <Text style={styles.text}>{description}:</Text> */}
        <Image style={styles.image} source={{ uri: iconUri }} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.text}>Temp: {temperature}</Text>
        <Text style={styles.text}>Wind Speed: {windSpeed}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    flexDirection: "column",
    backgroundColor: "#64ABE3",
    borderRadius: 20,
    padding: 20,
  },
  text: {
    color: "#e3ded9",
    fontSize: 15,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    flexDirection: "row",
    marginHorizontal: 40,
    marginLeft: 10,
    marginRight: 10,
  },
  image: {
    height: 100,
    width: 100,
  },
});
