"use client"

import BaseLayout from "./components/layouts/base";
import HeaderComponent from "./components/organisms/header/header";
import ToDoListComponent from "./components/organisms/todo-list/TodoList";
import ToDoFormComponent from "./components/organisms/todo-form/todo-form";
import ToDoFilter from "./components/organisms/todo-filter/todo-filter";

import { useHasHydrated } from '@/app/hooks/useHydration';

export default function Home() {
  const hasHydrated = useHasHydrated();

  if (!hasHydrated) {
    return null;
  }

  return (
    <BaseLayout>
      <>
        <HeaderComponent />

        <ToDoFormComponent />

        <ToDoListComponent />

        <ToDoFilter />

        <footer className="mt-5">
          <span className="text-gray-600">Drag and drop to reorder list</span>
        </footer>
      </>
    </BaseLayout>
  );
}
