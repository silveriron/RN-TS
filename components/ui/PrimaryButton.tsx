import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

type Props = {
  children: string;
  onPress: () => void;
};

const PrimaryButton = (props: Props) => {
  return (
    <Pressable onPress={props.onPress}>
      <View style={styles.buttonContainer}>
        <Text style={styles.text}>{props.children}</Text>
      </View>
    </Pressable>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 10,
    backgroundColor: "white",
    width: 80,
    borderRadius: 50,
  },
  text: {
    textAlign: "center",
  },
});
