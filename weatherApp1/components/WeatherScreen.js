import React, { useState } from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { Header } from "./Header";
import { WeatherInfo } from "./WeatherInfo";
import { UpdateLocation } from "./UpdateLocation";
import { CustomButton } from "./CustomButton";

export const WeatherScreen = ({ navigation }) => {
  const [location1, setLocation1] = useState();
  const [weatherData, setWeatherData] = useState({
    city: "Tampere",
    description: "Sunny",
    temperature: 15,
    windSpeed: 3,
    iconUri: "https://openweathermap.org/img/w/02d.png",
  });

  const urlBase = "https://api.openweathermap.org/data/2.5/weather?q=";
  const apiKey = "&units=metric&appid=dc681e754ceeecf75b71bd540321860f";

  const fetchWeatherData = async (location) => {
    try {
      const response = await fetch(urlBase + location + apiKey);
      const jsonWeatherObject = await response.json();
      setWeatherData({
        city: jsonWeatherObject.name,
        description: jsonWeatherObject.weather[0].main,
        temperature: jsonWeatherObject.main.temp,
        windSpeed: jsonWeatherObject.wind.speed,
        iconUri:
          "https://openweathermap.org/img/w/" +
          jsonWeatherObject.weather[0].icon +
          ".png",
      });
    } catch (err) {}
  };

  const updateLocation = (updatedLocation) => {
    fetchWeatherData(updatedLocation);
  };

  const liftLocationState = (location) => setLocation1(location);

  const openForecastScreen = () => {
    console.log("opening forecast");
    navigation.navigate("Weather Forecast", {
      location2: location1,
    });
  };

  return (
    <View style={styles.container}>
      <Header headerText={weatherData.city}></Header>
      <WeatherInfo
        description={weatherData.description}
        temperature={weatherData.temperature}
        windSpeed={weatherData.windSpeed}
        iconUri={weatherData.iconUri}
      ></WeatherInfo>
      <UpdateLocation
        initialLocation={weatherData.city}
        updateLocation={updateLocation}
        liftLocation={liftLocationState}
      ></UpdateLocation>
      <CustomButton onPress={() => updateLocation(location1)}></CustomButton>
      <Button
        title="Open Forecast"
        onPress={() => openForecastScreen()}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    backgroundColor: "#416270",
    flex: 1,
  },
});
