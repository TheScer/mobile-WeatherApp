import React from "react";
import { Text, StyleSheet } from "react-native";

export const Header = (props) => {
  return <Text style={styles.container}>{props.headerText}</Text>;
};

const styles = StyleSheet.create({
  container: {
    fontSize: 30,
    fontStyle: "italic",
    justifyContent: "center",
    textAlign: "center",
    marginVertical: 15,
    color: "white",
    backgroundColor: "#64ABE3",
    marginHorizontal: 20,
  },
});
