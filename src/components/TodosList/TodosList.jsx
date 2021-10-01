import React from 'react';
import Todo from "./Todo/Todo";
import styles from './TodosList.module.scss';
import Newtodo from "../Newtodo/Newtodo";

const TodosList = (props) => {

    return (
        <ul className={styles.todos__list}>
            {props.todosArray.map((todo, index) => <Todo todo={todo} index={index} deleteTodo={props.deleteTodo}
                                                         onChangeStatusClickHandler={props.onChangeStatusClickHandler}
                                                         onEditButtonClickHandler={props.onEditButtonClickHandler}
                                                         editTitle={props.editTitle}
                                                         editText={props.editText}/>)}
        </ul>
    )
};

export default TodosList;
