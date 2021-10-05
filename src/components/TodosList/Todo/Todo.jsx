import React, {useState} from 'react';
import styles from './Todo.module.scss';
import todos from "../../../Store/todos";
import {observer} from "mobx-react-lite";

const Todo = observer((props) => {
    return (
        <li className={props.todo.isFinished ? [styles.todo__item, styles.todo__item__finished].join(' ') : styles.todo__item}>
            {!props.todo.isEdditing ? <div className={styles.todo__text_wrapper}>
                <h3 className={styles.todo__title}>{props.todo.title}</h3>
                <p className={styles.todo__text}>{props.todo.description}</p>
            </div> : <div className={styles.todo__text_wrapper}>
                <input id="title" type="text" className={styles.todo__input} value={props.todo.title} onChange={(evt) => todos.editTodo(props.todo, evt.target)}/>
                <textarea id="description" cols="30" className={styles.todo__textarea} value={props.todo.description} onChange={(evt) => todos.editTodo(props.todo, evt.target)}/>
            </div>}
            <div className={styles.todo__buttons_wrapper}>
                <button
                    className={props.todo.isFinished ? [styles.button, styles.todo__status_button, styles.todo__status_button__finished].join(' ') : [styles.button, styles.todo__status_button].join(' ')}
                    onClick={() => todos.changeReadyStatus(props.todo)}
                    aria-label="change status button">Change status
                </button>
                <button className={[styles.button, styles.todo__edit_button].join(' ')} disabled={props.todo.isFinished}
                        onClick={() => todos.changeEditStatus(props.todo)} aria-label="Edit todo button">Edit
                    todo
                </button>
                <button className={[styles.button, styles.todo__delete_button].join(' ')}
                        onClick={() => todos.deleteTodo(props.todo.id)} aria-label="Delete todo button">Delete todo
                </button>
            </div>
        </li>
    )
});

export default Todo;
