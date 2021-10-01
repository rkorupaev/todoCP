import './App.css';
import React, {useEffect, useState} from "react";
import Newtodo from "./components/Newtodo/Newtodo";
import TodosList from "./components/TodosList/TodosList";


function App() {
    const [todos, setTodos] = useState([]);
    const [todoTitle, setTodoTitle] = useState('');
    const [todoDescription, setTodoDescription] = useState('');
    const [titleIsEmpty, setTitleIsEmpty] = useState(false);

    const onEditButtonClickHandler = (editIndex) => {
        setTodos(todos.map((todo, index) => {
            if (index === editIndex) {
                todo.isEdditing ? todo.isEdditing = false : todo.isEdditing = true;
                return todo;
            } else {
                return todo;
            }
        }));
    }

    const onChangeStatusClickHandler = (changeIndex) => {
        setTodos(todos.map((todo, index) => {
            if (index === changeIndex) {
                todo.isFinished ? todo.isFinished = false : todo.isFinished = true;
                return todo;
            } else {
                return todo;
            }
        }));
    }

    const addTodo = (text, description) => {
        if (text.length > 0) {
            setTitleIsEmpty(false);
            setTodos([...todos, {id: todos.length, title: text, description: description, isFinished: false, isEdditing: false}]);
            setTodoTitle('');
            setTodoDescription('');
        } else {
            setTitleIsEmpty(true);
        }
    }

    const deleteTodo = (deleteIndex) => {
        setTodos(todos.filter((item, index) => index !== deleteIndex));
    }

    const editTitle = (editIndex, title) => {
        setTodos(todos.map((todo, index) => {
            if (index === editIndex) {
                todo.title = title;
                return todo;
            } else {
                return todo;
            }
        }));
    }

    const editText = (editIndex, description) => {
        setTodos(todos.map((todo, index) => {
            if (index === editIndex) {
                todo.description = description;
                return todo;
            } else {
                return todo;
            }
        }));
    }

    return (
        <div className="App">
            <section>
                <Newtodo setTodoTitle={setTodoTitle}
                         todoTitle={todoTitle}
                         addTodo={addTodo}
                         todoDescription={todoDescription}
                         setTodoDescription={setTodoDescription}
                         titleIsEmpty={titleIsEmpty}
                         setTitleIsEmpty={setTitleIsEmpty}/>
                <TodosList todosArray={todos}
                           deleteTodo={deleteTodo}
                           onChangeStatusClickHandler={onChangeStatusClickHandler}
                           onEditButtonClickHandler={onEditButtonClickHandler}
                           editTitle={editTitle}
                           editText={editText}/>
            </section>
        </div>
    );
}

export default App;
