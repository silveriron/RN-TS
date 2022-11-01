import { StyleSheet, StatusBar } from "react-native";
import React from "react";
import CategoryScreen from "./screens/CategoryScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OverviewScreen from "./screens/OverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";

type Props = {};

const Stack = createNativeStackNavigator();

const App = (props: Props) => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {backgroundColor: "#f84a4a"},
          headerTintColor: "white",
          contentStyle: {backgroundColor: "#f5f5f5"}
        }}>
          <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
          <Stack.Screen name="OverviewScreen" component={OverviewScreen} />
          <Stack.Screen name="MealDetailScreen" component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar barStyle={"light-content"} />
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
