import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { Todo } from "./App";
import TodoItem from "./TodoItem";

type TodoListProps = {
  todos: Todo[];
  deleteHandler: (id: string) => void;
};

const TodoList: React.FC<TodoListProps> = ({ todos, deleteHandler }) => {
  return (
    <View style={styles.TodoListContainer}>
      <FlatList
        data={todos}
        renderItem={(item) => {
          return <TodoItem item={item.item} deleteHandler={deleteHandler} />;
        }}
        keyExtractor={(item, index) => {
          return item.id;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  TodoListContainer: {
    flex: 5,
  },
});

export default TodoList;
