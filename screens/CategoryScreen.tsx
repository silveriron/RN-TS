import { StyleSheet, FlatList } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGrid from "../components/CategoryGrid";

const CategoryScreen = () => {

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={({ item }) => {
        return (
          <CategoryGrid
            title={item.title}
            color={item.color}
            id={item.id}
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
