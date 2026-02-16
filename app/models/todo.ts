export interface ToDoInterface {
    title: string;
    done: boolean;
    id: string;
}

export class ToDo implements ToDoInterface {
    title: string;
    done: boolean;
    id: string;

    constructor(title: string, done: boolean, id: string) {
        this.title = title;
        this.done = done;
        this.id = id;
    }
}