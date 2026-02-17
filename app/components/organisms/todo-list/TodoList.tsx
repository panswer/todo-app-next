"use client"

import { ReactElement, useCallback } from "react";
import { DndContext, closestCenter, DragEndEvent, useSensor, useSensors, MouseSensor, TouchSensor, KeyboardSensor } from '@dnd-kit/core';

import ToDoItemComponent from "../../molecules/todo-item/todo-item";
import { TodoFilterOptionsComponent } from "../../molecules/todo-filter-options/todo-filter-options";

import { useTodoStore } from '@/app/store/todo-store';
import { SortableContext, verticalListSortingStrategy, sortableKeyboardCoordinates } from "@dnd-kit/sortable";

const ToDoListComponent = (): ReactElement => {
  const {
    todos,
    updateTodo,
    removeTodo,
    filter,
    reorderItems,
  } = useTodoStore();

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 600,
        tolerance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

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

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = todos.findIndex(todo => todo.id === active.id);
      const newIndex = todos.findIndex(todo => todo.id === over.id);

      reorderItems(oldIndex, newIndex);
    }
  };

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <section className="bg-gray-50 rounded mt-3 w-xs dark:bg-navy-900 md:w-xl">
        <SortableContext items={todos} strategy={verticalListSortingStrategy}>
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
        </SortableContext>

        <div className="flex align-center justify-between my-3 px-7">
          <span className="text-gray-600 dark:text-purple-600">{todos.filter(({ done }) => !done).length} items left</span>
          <div className="hidden md:flex gap-2">
            <TodoFilterOptionsComponent />
          </div>
          <button className="text-gray-600 hover:cursor-pointer capitalize dark:text-purple-600" onClick={handleCleanCompleted}>clear completed</button>
        </div>
      </section>
    </DndContext>
  );
};

export default ToDoListComponent;
