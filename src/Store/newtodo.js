import {makeAutoObservable} from "mobx";

class Newtodo {
    newtodo = {title: '', description: ''};

    constructor() {
        makeAutoObservable(this);
    }

    changeInputText(target) {
        switch (target.id) {
            case 'title':
                this.newtodo.title = target.value
                // console.log(this.newtodo);
                break;
            case 'description':
                this.newtodo.description = target.value;
                // console.log(this.newtodo);
                break;
            default:
                break;
        }
    }
}

export default new Newtodo();
