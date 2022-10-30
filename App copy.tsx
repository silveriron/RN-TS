import { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";

export type Todo = {
  id: string;
  todo: string;
};

export default function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isModal, setIsModal] = useState(false);

  const inputTextHandler = (enteredText: string) => {
    setTodo(enteredText);
  };

  const todoDeleteHandler = (id: string) => {
    setTodos((prevTodo) => {
      return prevTodo.filter((todo) => todo.id !== id);
    });
  };

  const modalHandler = () => setIsModal((prev) => !prev);

  const todoSubmitHandler = () => {
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: (todos.length + 1).toString(),
          todo: todo,
        },
      ];
    });
  };

  return (
    <View style={styles.AppContainer}>
      <View>
        <Button title="add new todo" onPress={modalHandler} />
      </View>
      <TodoInput
        textHandler={inputTextHandler}
        todo={todo}
        submitHandler={todoSubmitHandler}
        modalHandler={modalHandler}
        isModal={isModal}
      />
      <TodoList todos={todos} deleteHandler={todoDeleteHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  AppContainer: {
    flex: 1,
    padding: 30,
  },
});
