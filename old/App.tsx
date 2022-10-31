import {useState} from "react"
import { StyleSheet, useWindowDimensions } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import GameStartScreens from "./screens/GameStartScreens";
import { useFonts } from 'expo-font'
import { Inter_900Black } from '@expo-google-fonts/inter';
import * as SplashScreen from "expo-splash-screen"

SplashScreen.preventAutoHideAsync();


export default function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const window = useWindowDimensions();

  if (!isLoaded) {
    SplashScreen.hideAsync();
  }

  return <LinearGradient style={styles.rootContainer} colors={["black", "white"]}>
    <GameStartScreens /></LinearGradient>;
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  }
});
