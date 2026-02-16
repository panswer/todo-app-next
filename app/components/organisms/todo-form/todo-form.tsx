"use client"

import React, { ReactElement, useCallback, useState } from "react";
import { useTodoStore } from "@/app/store/todo-store";

const ToDoFormComponent = (): ReactElement => {
  const [title, setTitle] = useState('');
  const { addTodo } = useTodoStore();

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addTodo(title, crypto.randomUUID());
    setTitle('');
  }, [addTodo, title]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }, []);

  return (
    <form
      className="rounded bg-blue-300 w-xs flex column items-center h-10 p-2 gap-3"
      onSubmit={handleSubmit}
    >
      <button className="rounded-full border border-blue-400 h-5 w-5"></button>

      <input
        type="text"
        name="newTodo"
        id="new-todo"
        placeholder="Create a new todo..."
        className="outline-0"
        value={title}
        onChange={handleChange}
      />
    </form>
  );
};

export default ToDoFormComponent;
