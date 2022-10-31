import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import React from "react";
import CategoryScreen from "./screens/CategoryScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OverviewScreen from "./screens/OverviewScreen";

type Props = {};

const Stack = createNativeStackNavigator();

const App = (props: Props) => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
          <Stack.Screen name="OverviewScreen" component={OverviewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar barStyle={"dark-content"} />
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
