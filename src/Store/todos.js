import {makeAutoObservable} from "mobx";

class Todos {
    todos = [];

    newtodo = {title: '', description: '', isEmpty: false};

    constructor() {
        makeAutoObservable(this)
    }

    setIsEmpty() {
        this.newtodo.isEmpty = false;
    }

    changeInputText(target) {
        switch (target.id) {
            case 'title':
                this.newtodo.title = target.value
                this.newtodo.isEmpty = false;
                break;
            case 'description':
                this.newtodo.description = target.value;
                break;
            default:
                break;
        }
    }

    addTodo(todoTitle, todoText) {
        if (todoTitle.length > 0) {
            this.todos = [...this.todos, {
                id: new Date(),
                title: todoTitle,
                description: todoText,
                isFinished: false,
                isEditing: false
            }];

            this.newtodo = {title: '', description: '', isEmpty: false};
        } else {
            this.newtodo.isEmpty = true;
        }
    }

    deleteTodo(deleteId) {
        this.todos = this.todos.filter((todo) => todo.id !== deleteId);
    }

    changeReadyStatus(todo) {
        todo.isFinished ? todo.isFinished = false : todo.isFinished = true;
    }

    changeEditStatus(todo) {
        todo.isEdditing ? todo.isEdditing = false : todo.isEdditing = true;
    }

    editTodo(todoItem, target) {
        switch (target.id) {
            case 'title':
                todoItem.title = target.value;
                break;
            case 'description':
                todoItem.description = target.value;
                break;
            default:
                break;
        }
    }

    postToLocalStorage(todos) {
        localStorage.setItem('todos', JSON.stringify(todos));
        console.log(`test post`);
    }

    getFromLocalStorage() {
        this.todos = JSON.parse(localStorage.getItem('todos'));
        console.log(`test get`);
    }
}

export default new Todos();
