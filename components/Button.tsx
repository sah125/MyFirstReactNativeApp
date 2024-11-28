import React from "react";
import { View, Text, StyleSheet } from "react-native";

type ButtonProps = {
  primary?: boolean;
};

const Button: React.FC<ButtonProps> = ({ primary = false }) => {
  return (
    <View
      style={[
        styles.button,
        primary ? styles.primaryButton : styles.secondaryButton,
      ]}
    >
      <Text>Click Me</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  primaryButton: {
    backgroundColor: "blue",
  },
  secondaryButton: {
    backgroundColor: "gray",
  },
});

export default Button;
