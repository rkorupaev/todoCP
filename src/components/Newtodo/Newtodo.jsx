import React, {useState} from 'react';
import styles from './Newtodo.module.scss';
import todos from "../../Store/todos";
import {observer} from "mobx-react-lite";

const Newtodo = observer((props) => {
    return (
        <div className={styles.wrapper}>
            <label for="title" className={styles.newtodo__label}>Todo title:
                <input
                    className={todos.newtodo.isEmpty ? [styles.newtodo__input, styles.newtodo__input__warn].join(' ') : styles.newtodo__input}
                    name="title" id="title"
                    placeholder="Enter new todo" onChange={(evt) => todos.changeInputText(evt.target)}
                    value={todos.newtodo.title} onClick={() => todos.setIsEmpty()}/>
                <span
                    className={todos.newtodo.isEmpty ? [styles.newtodo__require_span, styles.newtodo__require_span__shown].join(' ') : styles.newtodo__require_span}>Required</span>

            </label>
            <label for="description" className={[styles.newtodo__label, styles.newtodo__label__textarea].join(' ')}>Todo description:
                <textarea className={styles.newtodo__textarea} name="description" id="description" cols="30" rows="2"
                          placeholder="Shortly describe todo"
                          value={todos.newtodo.description} onChange={(evt) => todos.changeInputText(evt.target)}/>
            </label>
            <button onClick={() => todos.addTodo(todos.newtodo.title, todos.newtodo.description)}>Add todo</button>
        </div>
    )
});

export default Newtodo;
