"use client"

import { ReactElement, useCallback } from "react";
import ToDoItemComponent from "../../molecules/todo-item/todo-item";

import { useTodoStore } from '@/app/store/todo-store';

const ToDoListComponent = (): ReactElement => {
  const {
    todos,
    updateTodo,
    removeTodo,
    filter
  } = useTodoStore();

  const handleChange = useCallback((id: string) => {
    const todo = todos.find((todo) => todo.id === id);

    if (!todo) return;

    updateTodo(id, !todo.done);
  }, [todos]);

  const handleRemove = useCallback((id: string) => {
    removeTodo(id);
  }, []);

  const handleCleanCompleted = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    todos.forEach(todo => {
      if (todo.done) {
        removeTodo(todo.id);
      }
    });
  }, [todos]);

  return (
    <section className="bg-blue-300 border rounded mt-3 w-xs">
      {filter === 'all' && todos.map((todo) => (
        <ToDoItemComponent
          isCompleted={todo.done}
          todo={todo.title}
          key={todo.id}
          todoId={todo.id}
          changeEvent={handleChange}
          removeEvent={handleRemove}
        />
      ))}

      {filter === 'active' && todos.filter(({ done }) => !done).map((todo) => (
        <ToDoItemComponent
          isCompleted={todo.done}
          todo={todo.title}
          key={todo.id}
          todoId={todo.id}
          changeEvent={handleChange}
          removeEvent={handleRemove}
        />
      ))}

      {filter === 'completed' && todos.filter(({ done }) => done).map((todo) => (
        <ToDoItemComponent
          isCompleted={todo.done}
          todo={todo.title}
          key={todo.id}
          todoId={todo.id}
          changeEvent={handleChange}
          removeEvent={handleRemove}
        />
      ))}

      <div className="flex align-center justify-between my-3 px-7">
        <span>{todos.filter(({ done }) => !done).length} items left</span>
        <button className="hover:cursor-pointer capitalize" onClick={handleCleanCompleted}>clear completed</button>
      </div>
    </section>
  );
};

export default ToDoListComponent;
