import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useContext } from "react";
import { FavoriteContext } from "../store/context/FavoriteContext";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

type Props = {};

const FavoriteScreen = (props: Props) => {
  const favoriteCtx = useContext(FavoriteContext);
  const list = favoriteCtx.list;
  return (
    <View>
      <FlatList
        data={list}
        renderItem={(item) => {
          const meal = MEALS.find((meal) => meal.id === item.item);
          if (meal) {
            return <MealItem item={meal} />;
          } else {
            return null;
          }
        }}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({});
