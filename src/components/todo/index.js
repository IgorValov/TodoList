import React from "react";
import { useDispatch } from "react-redux";
import cx from "classnames";

import { toggleTodo } from "../../store/actions/creators/todo";

import styles from "./index.module.css";

export const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const toggleTodoItem = () => {
    dispatch(toggleTodo(todo.id));
  };

  return (
    <div
      className={cx({
        [styles.delete]: todo.delete,
      })}
    >
      <li className={styles.item} onClick={toggleTodoItem}>
        {todo.delete ? "❌" : "❌"} <span>{todo.content}</span>
      </li>
    </div>
  );
};
