import { StyleSheet, Text, TextInput, View, KeyboardAvoidingView, Platform } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../../components/ui/PrimaryButton";
import {AntDesign} from '@expo/vector-icons';

type Props = {};

const GameStartScreens = (props: Props) => {
  const [enteredNumber, setEnteredNumber] = useState("")

  const changeNumber = (number: string) => {
    setEnteredNumber(number)
  }

  const resetNumber = () => {
    setEnteredNumber("")
  }

  const confirmNumber = () => {
    console.log(enteredNumber)
  }
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.screen}
    >
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputBox}
        maxLength={2}
        
        keyboardType="number-pad"
        onChangeText={changeNumber}
        value={enteredNumber}
      />
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={resetNumber}><AntDesign name="back" size={24} color="black" /></PrimaryButton>
        <PrimaryButton onPress={confirmNumber}>Confirm</PrimaryButton>
      </View>
    </View>
    </KeyboardAvoidingView>
  );
};

export default GameStartScreens;

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
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
