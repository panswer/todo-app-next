import { ReactElement } from "react";

import { TodoFilterOptionsComponent } from "../../molecules/todo-filter-options/todo-filter-options";

const ToDoFilter = (): ReactElement => {

  return (
    <section className="w-xs h-10 bg-gray-50 rounded mt-3 flex justify-center items-center gap-2 dark:bg-navy-900 md:hidden">
      <TodoFilterOptionsComponent />
    </section >
  );
};

export default ToDoFilter;
