import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export const CustomButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttontext}>Update2</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 30,
    backgroundColor: "#8aa4ab",
    margin: 40,
  },
  buttontext: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
});
