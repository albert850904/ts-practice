import { useState } from "react";
import "./App.css";
import NewTodo from "./components/NewRodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import TodosContextProvider from "./store/todos-context";

function App() {
  // const todos = [
  //   // Todo 當作是class object使用
  //   new Todo("Learn Something"),
  //   new Todo("Learn Something Else"),
  // ];
  // 如果直接設定為 [] 當作是default狀態，那todos就永遠不能有值
  // useState是generic function，我們要告訴useState這裏面的state會是怎樣
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
