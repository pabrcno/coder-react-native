// React Native dynamic todo list
import React from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import TodoType from "../../types/todo";
import Todo from "../Todo";

// TodoList component
const TodoList = () => {
  const [todos, setTodos] = React.useState<TodoType[]>([]);
  const [todoText, setTodoText] = React.useState<string>("");
  const onDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo, i) => todo.id !== id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.todoInput}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => {
            setTodoText(text);
          }}
          value={todoText}
        />
        <Button
          title="Add Todo"
          onPress={() => {
            setTodos([
              ...todos,
              { id: Math.random(), title: todoText, completed: false },
            ]);
            setTodoText("");
          }}
        />
      </View>
      <ScrollView style={styles.todoList}>
        {todos.map((todo, index) => (
          <Todo todo={todo} onDelete={onDeleteTodo} key={todo.id} />
        ))}
      </ScrollView>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",

    alignItems: "center",
    height: "100%",
    backgroundColor: "#F5FCFF",
  },
  todoInput: {
    flex: 1,
    flexDirection: "row",

    alignItems: "center",
    width: "80%",
    backgroundColor: "#F5FCFF",
  },
  input: {
    width: "70%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    margin: 10,
  },
  todoList: {
    flex: 1,
    flexDirection: "column",
    width: "90%",
    backgroundColor: "#F5FCFF",
  },
});

export default TodoList;
