import BaseLayout from "./components/layouts/base";
import HeaderComponent from "./components/organisms/header/header";
import ToDoListComponent from "./components/organisms/todo-list/TodoList";
import { ToDoItem } from "./components/molecules/todo-item/todo-item";
import ToDoFormComponent from "./components/organisms/todo-form/todo-form";
import ToDoFilter from "./components/organisms/todo-filter/todo-filter";

export default function Home() {
  const todoItems: ToDoItem[] = [
    {
      todo: "todo 1",
      isCompleted: false,
    },
    {
      todo: "todo 2",
      isCompleted: true,
    },
    {
      todo: "todo 3",
      isCompleted: false,
    },
  ];

  return (
    <BaseLayout>
      <>
        <HeaderComponent />

        <ToDoFormComponent />

        <ToDoListComponent todoItems={todoItems} />

        <ToDoFilter />

        <footer className="mt-5">
          <span className="">Drag and drop to reorder list</span>
        </footer>
      </>
    </BaseLayout>
  );
}
