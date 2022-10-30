import React from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

type TodoInputProps = {
  textHandler: (enteredText: string) => void;
  todo: string;
  submitHandler: () => void;
  modalHandler: () => void;
  isModal: boolean;
};

const TodoInput: React.FC<TodoInputProps> = ({
  textHandler,
  todo,
  submitHandler,
  modalHandler,
  isModal,
}) => {
  return (
    <Modal visible={isModal} animationType="slide">
      <View style={styles.InputContainer}>
        <TextInput
          style={styles.InputBox}
          placeholder="do you have a todo?"
          onChangeText={textHandler}
          value={todo}
        />
        <Button title="Add Todo" onPress={submitHandler} />
        <Button title="Cancle" onPress={modalHandler} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  InputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1,
    marginBottom: 30,
  },
  InputBox: {
    width: "70%",
    borderColor: "#cccccc",
    borderWidth: 1,
    padding: 10,
    marginRight: 5,
  },
});

export default TodoInput;
