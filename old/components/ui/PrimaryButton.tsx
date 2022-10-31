import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

type Props = {
  children: any;
  onPress: () => void;
};

const PrimaryButton = (props: Props) => {
  return (
    <Pressable style={({pressed}) => pressed && styles.pressedButton} onPress={props.onPress}>
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
  pressedButton: {
    opacity: 0.3,
    backgroundColor: "black"
  }
});
