import React from "react";
import classes from "./TodoItem.module.css";

// 也可以用Todo Object 來當作type，但因為沒用到id就有點多餘
// MouseEvent 用來描述可以用來被assign到onclick的function
const TodoItem: React.FC<{
  text: string;
  onDelete: (event: React.MouseEvent) => void;
}> = (props) => {
  return (
    <li className={classes.item} onClick={props.onDelete}>
      {props.text}
    </li>
  );
};

export default TodoItem;
