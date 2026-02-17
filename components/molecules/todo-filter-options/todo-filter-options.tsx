"use client"

import { FilterType, useTodoStore } from "@/app/store/todo-store";
import { ReactElement } from "react";

export const TodoFilterOptionsComponent = (): ReactElement => {
    const { filter, setFilter } = useTodoStore();

    const options: FilterType[] = [
        'all',
        'active',
        'completed',
    ];

    return <>
        {options.map((option) =>
            <button
                key={option}
                className={`capitalize hover:cursor-pointer ${filter === option ? 'text-blue-500' : 'text-gray-600'}`}
                onClick={(e) => {
                    e.preventDefault();
                    setFilter(option);
                }}
            >
                {option}
            </button>
        )}
    </>
};