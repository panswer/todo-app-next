import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { ToDo } from '../models/todo';

type TodoStore = {
    todos: ToDo[];
    addTodo: (todo: string, id: string) => void;
    removeTodo: (id: string) => void;
    updateTodo: (id: string, isDone: boolean) => void;
}

export const useTodoStore = create<TodoStore>()(
    persist((set) => ({
        todos: [],
        addTodo: (todo, id) => set(state => ({ todos: state.todos.concat(new ToDo(todo, false, id)) })),
        removeTodo: (id) => set(state => ({ todos: state.todos.filter(todo => todo.id !== id) })),
        updateTodo: (id) => set(state => {
            const newTodo = state.todos.map(todo => {
                if (todo.id !== id) {
                    return todo;
                } else {
                    return new ToDo(
                        todo.title,
                        !todo.done,
                        todo.id
                    );
                }
            });

            return {
                todos: newTodo,
            };
        }),
    }), {
        name: 'todo-storage',
        storage: createJSONStorage(() => localStorage),
    })
);
