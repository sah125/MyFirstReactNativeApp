import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
/*import WelcomeMessage from "./components/WelcomeMessage";
import ProfileCard from "./components/ProfileCard ";*/
import Header from "./components/Header";
import Button from "./components/Button";

export default function App() {
  const handlePress = () => {
    console.log("Button pressed!");
  };
  return (
    /*
      <ProfileCard name="Nqobani" age={4} onPress={handlePress} />
      <ProfileCard name="Sphumelelo" age={4} onPress={handlePress} />
      <WelcomeMessage name="Nqobani" />
      <WelcomeMessage name="Sphumelelo" />
*/
    <View style={styles.container}>
      <Header
        title="Welcome to React Native"
        subtitle="Building Components with Props"
      />
      <Header title="Another Header" />
      <Button primary={true} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
  },
});
