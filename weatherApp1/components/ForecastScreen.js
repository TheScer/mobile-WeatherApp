import React from "react";
import { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  Text,
  FlatList,
} from "react-native";
import { ForecastItem } from "./ForecastItem";
import { Header } from "./Header";

export const ForecastScreen = () => {
  const [weatherForecast, setWeatherForecast] = useState({});

  useEffect(() => {
    //put code here to do things after 1st render
    fetchWeatherForecast("tampere");
  }, []);

  //full api endpoint
  //https://api.openweathermap.org/data/2.5/forecast?q=tampere&units=metric&appid=dc681e754ceeecf75b71bd540321860f

  const urlBase = "https://api.openweathermap.org/data/2.5/forecast?q=";
  const apiKey = "&units=metric&appid=dc681e754ceeecf75b71bd540321860f";

  // const img = { uri: "https://openweathermap.org/img/w/02d.png" };
  const iconUriBase = "https://openweathermap.org/img/w/";
  // jsonWeatherObject.weather[0].icon +
  const endIconUri = ".png";

  const fetchWeatherForecast = async (location) => {
    try {
      const response = await fetch(urlBase + location + apiKey);
      const jsonWeatherObject = await response.json();
      setWeatherForecast(jsonWeatherObject);
    } catch (err) {}
  };

  return (
    <ScrollView horizontal={true} style={styles.scrollView}>
      {/* <Header headerText={weatherForecast.city.name} /> */}
      <FlatList
        data={weatherForecast.list}
        renderItem={({ item }) => (
          <ForecastItem
            time={item.dt_txt}
            description={item.weather[0].description}
            temperature={item.main.temp}
            windspeed={item.wind.speed}
            fullIconUri={iconUriBase + item.weather[0].icon + endIconUri}
          />
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "green",
    padding: 30,
    flex: 0.6,
  },
});
