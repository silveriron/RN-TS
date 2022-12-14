import { StyleSheet, Text, View, Pressable, Platform } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/RootStackParamList'

type Props = {
  title: string;
  color: string;
  id: string;
};



const CategoryGrid = ({ title, color, id }: Props) => {
  const navigations = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const pressHandler =() => {
  navigations.navigate("OverviewScreen", {categoryId: id})
  }

  return (
    <View style={[styles.gridItem]}>
      <Pressable
        android_ripple={{ color: "#ffffff" }}
        style={({ pressed }) => [
          styles.pressBox,
          pressed && styles.pressed,
          { backgroundColor: color },
        ]}
        onPress={pressHandler}
      >
        <View style={styles.innerBox}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGrid;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
  },
  pressBox: {
    flex: 1,
    borderRadius: 8,
  },
  pressed: {
    opacity: 0.8,
  },
  innerBox: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
