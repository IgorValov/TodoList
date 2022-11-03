import React from "react";
import { useDispatch } from "react-redux";
import cx from "classnames";

import { deleteTodo } from "../../store/actions/creators/todo";

import styles from "./index.module.css";

export const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const deleteTodoItem = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <div
      className={cx({
        [styles.delete]: todo.delete,
      })}
    >
      <li className={styles.item} onClick={deleteTodoItem}>
        {todo.delete ? "❌" : "❌"} <span>{todo.content}</span>
      </li>
    </div>
  );
};
