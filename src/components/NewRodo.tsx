import React, { useRef, useContext } from "react";
import classes from "./NewTodo.module.css";
import { TodoContext } from "../store/todos-context";
// function type 就是 (params) => 接return type(void為沒有return)
const NewTodo: React.FC = () => {
  // 這裡需要定義extra type annotation，要告訴他會connect to input component
  // useRef 本身是一個generic type，要清楚告訴TS我要建立什麼Ref
  // HTMLInputElement 就是 DOM element的built-in type
  // 同時也要為ref建立一個default value，因為他可能已經被assign 其他element(在一開始我們還沒有connection 所以是null)
  //
  const inputRef = useRef<HTMLInputElement>(null);
  const todoCtx = useContext(TodoContext);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    // ?. 是由IDE新增，因為ref不一定被建立連結了
    // !. 則是告訴TS, current在此function被call時，不可能為空
    const enteredText = inputRef.current!.value;
    if (enteredText.trim().length === 0) return;
    todoCtx.addTodo(enteredText);
  };

  return (
    // onSubmit 聽的就是formEvent，build-in type
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={inputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
