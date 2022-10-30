import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import PrimaryButton from "../components/ui/PrimaryButton";

type Props = {};

const GameStartScreens = (props: Props) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputBox}
        maxLength={2}
        keyboardType="number-pad"
      />
      <View style={styles.buttonContainer}>
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
      </View>
    </View>
  );
};

export default GameStartScreens;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    backgroundColor: "black",
    marginHorizontal: 30,
    borderRadius: 8,
    elevation: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    padding: 10,
    alignItems: "center",
  },
  inputBox: {
    borderBottomColor: "white",
    borderBottomWidth: 1,
    height: 50,
    fontSize: 32,
    width: 50,
    color: "white",
    textAlign: "center",
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
  },
});
