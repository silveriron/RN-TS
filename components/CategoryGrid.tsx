import { StyleSheet, Text, View, Pressable, Platform } from "react-native";
import React from "react";

type Props = {
  title: string;
  color: string;
  onPress: () => void;
};

const CategoryGrid = ({ title, color, onPress }: Props) => {
  return (
    <View style={[styles.gridItem]}>
      <Pressable
        android_ripple={{ color: "#ffffff" }}
        style={({ pressed }) => [
          styles.pressBox,
          pressed && styles.pressed,
          { backgroundColor: color },
        ]}
        onPress={onPress}
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
