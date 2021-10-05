import {makeAutoObservable} from "mobx";

class Todos {
    todos = [{id: 0, title: 'test1', description: 'sdfdsf', isFinished: false, isEditing: false},
        {id: 1, title: 'adsfsd', description: 'fsdfdsf', isFinished: false, isEditing: false}];

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
            // this.newtodo.isEmpty = false;
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
}

export default new Todos();
