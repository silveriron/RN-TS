import { StyleSheet, Text, View, FlatList } from "react-native";
import React, {useLayoutEffect} from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../types/RootStackParamList";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";


type OverviewScreenRouteProp = RouteProp<RootStackParamList, "OverviewScreen">

const OverviewScreen = () => {
  const navigator = useNavigation<NativeStackNavigationProp<RootStackParamList, "OverviewScreen">>();
  const route = useRoute<OverviewScreenRouteProp>()
  const categoryId = route.params.categoryId

  useLayoutEffect(() => {
    const category = CATEGORIES.find(category => category.id === categoryId)
    if (category) {
      navigator.setOptions({
        title: category.title
      })
    }
  }, [categoryId, navigator])
  const displayMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(categoryId) >= 0
  })

  return (
    <View>
      <FlatList data={displayMeals} keyExtractor={(item)=> item.id} renderItem={(item)=><MealItem item={item.item}/>}/>
    </View>
  );
};

export default OverviewScreen;

const styles = StyleSheet.create({});
