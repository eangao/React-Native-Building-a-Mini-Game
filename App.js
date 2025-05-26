import { ImageBackground, StyleSheet, View } from "react-native";

import { LinearGradient } from "expo-linear-gradient"; // Need to intsll -> expo install expo-linear-gradient

import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootSCreen}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootSCreen}
        imageStyle={styles.backgroundImage}
      >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootSCreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
