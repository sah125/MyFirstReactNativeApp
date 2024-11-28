import React from "react";
import { Text, View, StyleSheet } from "react-native";

const WelcomeMessage = (props) => {
  return (
    <View>
      {props.name === "Nqobani" && (
        <Text style={styles.text}>
          Welcome, {props.name}, to the soft life, my Son
        </Text>
      )}
      {props.name === "Sphumelelo" && (
        <Text style={styles.text}>
          Welcome, {props.name}, to the soft life, my Daughter
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#fff",
  },
});

export default WelcomeMessage;
