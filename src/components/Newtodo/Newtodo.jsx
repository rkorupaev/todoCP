import React, {useState} from 'react';
import styles from './Newtodo.module.scss';

const Newtodo = (props) => {
    return (
        <div className={styles.wrapper}>
            <label for="title" className={styles.newtodo__label}>Todo title:
                <input
                    className={props.titleIsEmpty ? [styles.newtodo__input, styles.newtodo__input__warn].join(' ') : styles.newtodo__input}
                    name="title" id="title"
                    placeholder="Enter new todo" onChange={(evt) => props.setTodoTitle(evt.target.value)}
                    value={props.todoTitle} onClick={() => props.setTitleIsEmpty(false)}/>
                <span
                    className={props.titleIsEmpty ? [styles.newtodo__require_span, styles.newtodo__require_span__shown].join(' ') : styles.newtodo__require_span}>Required</span>

            </label>
            <label for="description" className={[styles.newtodo__label, styles.newtodo__label__textarea].join(' ')}>Todo description:
                <textarea className={styles.newtodo__textarea} name="description" id="description" cols="30" rows="2"
                          placeholder="Shortly describe todo"
                          value={props.todoDescription} onChange={(evt) => props.setTodoDescription(evt.target.value)}/>
            </label>
            <button onClick={() => props.addTodo(props.todoTitle, props.todoDescription)}>Add todo</button>
        </div>
    )
}

export default Newtodo;
