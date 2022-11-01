import { StyleSheet, StatusBar } from "react-native";
import React from "react";
import CategoryScreen from "./screens/CategoryScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OverviewScreen from "./screens/OverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import { RootStackParamList } from "./types/RootStackParamList";
import FavoriteProvider from "./store/context/FavoriteContext";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoriteScreen from "./screens/FavoriteScreen";

type Props = {};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Drawer = createDrawerNavigator();

const DrawerScreen = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="CategoryScreen" component={CategoryScreen} />
      <Drawer.Screen name="FavoriteScreen" component={FavoriteScreen} />
    </Drawer.Navigator>
  );
};

const App = (props: Props) => {
  return (
    <>
      <FavoriteProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#f84a4a" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#f5f5f5" },
            }}
          >
            <Stack.Screen
              name="DrawerScreen"
              component={DrawerScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="OverviewScreen" component={OverviewScreen} />
            <Stack.Screen
              name="MealDetailScreen"
              component={MealDetailScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoriteProvider>
      <StatusBar barStyle={"light-content"} />
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
