import { useEffect } from "react";
import React from "react";
import { Button, Text, TextInput, View, StyleSheet } from "react-native";

export const UpdateLocation = (props) => {
  //textIn = React.createRef();
  //the ref in the text is giving me undefined, couldn't figure it out

  return (
    <View style={styles.container}>
      <TextInput
        // ref={textIn} doesn't work
        style={styles.inputField}
        placeholder={props.initialLocation}
        onChangeText={(val) => props.liftLocation(val)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginBottom: 10,
    alignContent: "center",
    alignItems: "center",
    borderWidth: 2,
    marginHorizontal: 80,
    borderColor: "white",
  },
  inputField: {
    fontSize: 20,
    borderRadius: 20,
    color: "#e3ded9",
  },
});
