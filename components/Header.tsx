import React from "react";
import { View, Text, StyleSheet } from "react-native";

type HeaderProps = {
  title: string;
  subtitle?: string;
};

const Header: React.FC<HeaderProps> = ({
  title,
  subtitle = "No subtitle provided",
}) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#fff",
    padding: 40,
    margin: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  subtitle: {
    fontSize: 16,
    color: "#000",
    marginTop: 5,
  },
});

export default Header;
