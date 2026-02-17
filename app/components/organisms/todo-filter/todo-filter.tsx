"use client"

import { FilterType, useTodoStore } from "@/app/store/todo-store";
import { useCallback } from "react";

const ToDoFilter = () => {
  const { setFilter, filter } = useTodoStore();

  const handleClick = useCallback((filter: FilterType) => {
    setFilter(filter);
  }, []);

  return (
    <section className="w-xs h-10 bg-gray-50 rounded mt-3 flex justify-center items-center gap-2 dark:bg-navy-900">
      <button
        className={`capitalize hover:cursor-pointer ${filter === 'all' ? 'text-blue-500 dark:text-blue-500' : 'text-gray-600 dark:text-purple-600'}`}
        onClick={() => {
          handleClick("all");
        }}
      >
        all
      </button>
      <button
        className={`capitalize hover:cursor-pointer ${filter === 'active' ? 'text-blue-500 dark:text-blue-500' : 'text-gray-600 dark:text-purple-600'}`}
        onClick={() => {
          handleClick("active");
        }}
      >
        active
      </button>
      <button
        className={`capitalize hover:cursor-pointer ${filter === 'completed' ? 'text-blue-500 dark:text-blue-500' : 'text-gray-600 dark:text-purple-600'}`}
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
