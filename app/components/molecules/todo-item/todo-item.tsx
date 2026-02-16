"use client"

import { ReactElement, useCallback, useId } from "react";
import ToDoCheckComponent from "../../atoms/todo-check/todo-check";

export interface ToDoItem {
  todo: string;
  isCompleted: boolean;
  changeEvent?: (id: string) => void;
  removeEvent?: (id: string) => void;
  todoId: string;
}

const ToDoItemComponent = ({
  isCompleted,
  todo,
  changeEvent,
  removeEvent,
  todoId
}: ToDoItem): ReactElement => {

  const handleChange = useCallback((id: string) => {
    if (!changeEvent) return;

    changeEvent(todoId);
  }, []);

  const handleRemove = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!removeEvent) return;

    removeEvent(todoId);
  }, []);

  return (
    <article className="border-b w-full h-10 flex items-center py-2 px-4 last:border-0 gap-2">
      <ToDoCheckComponent
        checked={isCompleted}
        id={todoId}
        clickEvent={handleChange}
      />

      <span>{todo}</span>

      <button className="ml-auto uppercase hover:cursor-pointer" onClick={handleRemove}>x</button>
    </article>
  );
};

export default ToDoItemComponent;
