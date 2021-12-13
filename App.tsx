import { StatusBar } from "expo-status-bar";
import React from "react";
import todos from "./data/todos";
import TodoList from "./components/TodoList";

export default function App() {
  return <TodoList />;
}
