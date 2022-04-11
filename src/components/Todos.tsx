import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
// Todo 當作是Type使用，內容為Todo Object的Array
import { TodoContext } from "../store/todos-context";
// 用了context 就不會用到props，因此可以移除對於props type的定義

// React.FC 為functional components type >> typescript 就知道這裡會有children (React 定義的generic type)
// 定義在<{}>之中的type(不是自己定義一個generic type)，而是將一個concrete value
// 與React的generic type merge在一起 (不讓TS infer type)
// 可以理解為 為這個generic FC type 定義一個清楚的type value(own props objects)
// 為props 定義type 同時結合FC generic type
const Todos: React.FC = () => {
  const todosCtx = useContext(TodoContext);
  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        // key 是屬於 React.FC定義的type
        <TodoItem
          key={item.id}
          text={item.text}
          onDelete={() => todosCtx.removeTodo(item.id)}
          // 這邊也可用bind, preconfigure for future usage >> props.handleDelete.bind(null, item.id)
        />
      ))}
    </ul>
  );
};

export default Todos;
