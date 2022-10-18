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

export const ForecastScreen = ({ route }) => {
  const [weatherForecast, setWeatherForecast] = useState({
    city: { name: "fetching" },
  });

  useEffect(() => {
    //put code here to do things after 1st render
    fetchWeatherForecast(route.params.location2);
    console.log(route.params.location2);
  }, []);

  //full api endpoint
  //https://api.openweathermap.org/data/2.5/forecast?q=tampere&units=metric&appid=dc681e754ceeecf75b71bd540321860f

  const urlBase = "https://api.openweathermap.org/data/2.5/forecast?q=";
  const apiKey = "&units=metric&appid=dc681e754ceeecf75b71bd540321860f";

  const iconUriBase = "https://openweathermap.org/img/w/";
  const endIconUri = ".png";

  const fetchWeatherForecast = async (location) => {
    try {
      const response = await fetch(urlBase + location + apiKey);
      const jsonWeatherObject = await response.json();
      setWeatherForecast(jsonWeatherObject);
    } catch (err) {}
  };

  return (
    <ScrollView horizontal={false} style={styles.scrollView}>
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
    backgroundColor: "#416270",
    padding: 30,
    flex: 0.6,
  },
});
