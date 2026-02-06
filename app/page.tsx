import { ReactElement } from "react";
import bgImage from "./images/bg-mobile-dark.jpg";

interface ToDoItemParams {
  todo: string;
  isCompleted: boolean;
}

function ToDoItemComponent(params: ToDoItemParams): ReactElement {
  return (
    <article className="border-b w-full h-10 flex items-center p-2 last:border-0">
      <input type="checkbox" name="todo" id="todo" className="hidden" />
      <label
        htmlFor="todo"
        className="border rounded-full w-5 h-5 mr-3"
      ></label>
      <span>{params.todo}</span>
    </article>
  );
}

export default function Home() {
  const todoItems = [
    {
      todo: "To Do",
      isCompleted: false,
    },
    {
      todo: "Completed",
      isCompleted: true,
    },
    {
      todo: "All",
      isCompleted: false,
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="flex flex-row">
        <div
          style={{ backgroundImage: `url(${bgImage.src})` }}
          className="bg-cover bg-no-repeat w-full h-64 absolute z-100"
        ></div>
      </div>

      <main className="min-h-screen relative flex z-200 items-center justify-center flex-col">
        <header className="flex flex-row justify-between items-center w-xs mb-4">
          <h1 className="uppercase font-bold text-xl">todo</h1>

          <button>
            <span>son</span>
          </button>
        </header>

        <form
          action="#"
          className="bg-blue-300 w-xs flex column items-center rounded h-10 p-2"
        >
          <input
            type="checkbox"
            name="create_todo"
            id="create-todo"
            className="hidden"
          />
          <label
            htmlFor="create-todo"
            className="border border-blue-400 rounded-full w-5 h-5 mr-2"
          ></label>
          <span className="p-0">Create a new todo...</span>
        </form>

        <section className="bg-blue-300 border rounded mt-3 w-xs">
          {todoItems.map((todoItem) => (
            <ToDoItemComponent
              todo={todoItem.todo}
              isCompleted={todoItem.isCompleted}
            />
          ))}
        </section>

        <section className="w-xs h-10 bg-blue-300 border rounded mt-3 flex justify-center items-center gap-2">
          <label htmlFor="all">All</label>
          <label htmlFor="active">Active</label>
          <label htmlFor="completed">Completed</label>
        </section>

        <footer className="mt-3">
          <span className="">Drag and drop to reorder list</span>
        </footer>
      </main>
    </div>
  );
}
