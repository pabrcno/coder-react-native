import React, { useState } from "react";
import TodoType from "./../../types/todo";
import { View, Text, Button } from "react-native";
import { StyleSheet } from "react-native";
interface IProps {
  todo: TodoType;
  onDelete: (id: number) => void;
}

const Todo = ({ todo, onDelete }: IProps) => {
  return (
    <View style={styles.todo}>
      <View style={{ flex: 1 }}>
        <Text style={styles.todoText}>{todo.title}</Text>
      </View>
      <View style={styles.toggleButton}>
        <Button title={"Complete"} onPress={() => onDelete(todo.id)} />
      </View>
    </View>
  );
};

//styles
const styles = StyleSheet.create({
  todo: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#F5FCFF",
  },
  todoText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  toggleButton: {
    width: 120,
    height: 50,
  },
});

export default Todo;
