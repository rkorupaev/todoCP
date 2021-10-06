import './App.css';
import React, {useEffect, useState} from "react";
import Newtodo from "./components/Newtodo/Newtodo";
import TodosList from "./components/TodosList/TodosList";

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        setTodos(JSON.parse(localStorage.getItem('todos')));
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    return (
        <div className="App">
            <section>
                <Newtodo/>
                <TodosList/>
            </section>
        </div>
    );
}

export default App;
