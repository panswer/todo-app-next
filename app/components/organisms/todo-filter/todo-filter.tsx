"use client"

import { FilterType, useTodoStore } from "@/app/store/todo-store";
import { useCallback } from "react";

const ToDoFilter = () => {
  const { setFilter } = useTodoStore();

  const handleClick = useCallback((filter: FilterType) => {
    setFilter(filter);
  }, []);

  return (
    <section className="w-xs h-10 bg-blue-300 border rounded mt-3 flex justify-center items-center gap-2">
      <button
        className="capitalize hover:cursor-pointer"
        onClick={() => {
          handleClick("all");
        }}
      >
        all
      </button>
      <button
        className="capitalize hover:cursor-pointer"
        onClick={() => {
          handleClick("active");
        }}
      >
        active
      </button>
      <button
        className="capitalize hover:cursor-pointer"
        onClick={() => {
          handleClick("completed");
        }}
      >
        completed
      </button>
    </section >
  );
};

export default ToDoFilter;
