import React from 'react';
import Todo from "./Todo/Todo";
import styles from './TodosList.module.scss';
import {observer} from "mobx-react-lite";
import todos from "../../Store/todos";

const TodosList = observer((props) => {

    todos.postToLocalStorage(todos.todos);

    return (
        <ul className={styles.todos__list}>
            {todos.todos.map((todo) => <Todo todo={todo}/>)}
        </ul>
    )
});

export default TodosList;
