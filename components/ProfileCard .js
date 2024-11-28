import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const ProfileCard = ({ name, age, onPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Name: {name}</Text>
      <Text style={styles.text}>Age: {age}</Text>
      <Button title="Press Me" onPress={onPress} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 10,
    borderWidth: 1,
    backgroundColor: "#fff",
  },
});

export default ProfileCard;
