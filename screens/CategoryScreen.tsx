import { StyleSheet, FlatList, View, Text, ListRenderItem } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import Category from "../models/category";
import CategoryGrid from "../components/CategoryGrid";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  CategoryScreen: any;
  OverviewScreen: any;
};

type Props = NativeStackScreenProps<RootStackParamList, "CategoryScreen">;

const CategoryScreen = ({ navigation }: Props) => {
  const pressHandler = () => {
    navigation.navigate("OverviewScreen");
  };

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={({ item }) => {
        return (
          <CategoryGrid
            title={item.title}
            color={item.color}
            onPress={pressHandler}
          />
        );
      }}
      keyExtractor={(item, index) => item.id}
      numColumns={2}
    />
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({});
