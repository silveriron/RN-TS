import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useContext, useLayoutEffect } from "react";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/RootStackParamList";
import { MEALS } from "../data/dummy-data";
import MealDetail from "../components/MealDetail";
import Subtitle from "../components/Subtitle";
import { AntDesign } from "@expo/vector-icons";
import { FavoriteContext } from "../store/context/FavoriteContext";

const MealDetailScreen = () => {
  const route = useRoute<RouteProp<RootStackParamList, "MealDetailScreen">>();
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, "MealDetailScreen">
    >();

  const id = route.params.mealId;

  const meal = MEALS.find((meal) => meal.id === id);

  const favoriteCtx = useContext(FavoriteContext);

  const isFavorite = favoriteCtx.list.includes(id);

  const favoriteHandler = () => {
    if (isFavorite) {
      favoriteCtx.removeFavorite(id);
    } else {
      favoriteCtx.addFavorite(id);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Pressable onPress={favoriteHandler}>
            <AntDesign
              name={isFavorite ? "star" : "staro"}
              size={24}
              color="white"
            />
          </Pressable>
        );
      },
    });
  }, [navigation, favoriteHandler, isFavorite]);

  if (meal) {
    return (
      <ScrollView>
        <View>
          <Image source={{ uri: meal.imageUrl }} style={styles.image} />
        </View>
        <Text style={styles.title}>{meal.title}</Text>
        <MealDetail
          duration={meal.duration}
          complexity={meal.complexity}
          affordability={meal.affordability}
        />
        <Subtitle title="Ingredients" data={meal.ingredients} />
        <Subtitle title="Steps" data={meal.steps} />
      </ScrollView>
    );
  }
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
    marginBottom: 12,
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
    marginVertical: 8,
  },
});
