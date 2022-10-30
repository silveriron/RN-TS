import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Todo } from "./App";

type TodoProps = {
  item: Todo;
  deleteHandler: (id: string) => void;
};

const TodoItem: React.FC<TodoProps> = ({ item, deleteHandler }) => {
  const onPress = () => {
    deleteHandler(item.id);
  };

  return (
    <View style={styles.todoBox}>
      <Pressable
        style={({ pressed }) => pressed && styles.press}
        onPress={onPress}
      >
        <Text>{item.todo}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  todoBox: {
    marginVertical: 30,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 20,
    backgroundColor: "#bbbbbb",
  },
  press: {
    opacity: 0.5,
  },
});

export default TodoItem;
