import React from 'react';
import Todo from "./Todo/Todo";
import styles from './TodosList.module.scss';
import {observer} from "mobx-react-lite";
import todos from "../../Store/todos";

const TodosList = observer((props) => {

    return (
        <ul className={styles.todos__list}>
            {todos.todos.map((todo, index) => <Todo todo={todo} index={index} deleteTodo={props.deleteTodo}
                                                         onChangeStatusClickHandler={props.onChangeStatusClickHandler}
                                                         onEditButtonClickHandler={props.onEditButtonClickHandler}
                                                         editTitle={props.editTitle}
                                                         editText={props.editText}/>)}
        </ul>
    )
});

export default TodosList;
