import { useState } from "react";
import type { ReactNode } from "react";
import { TodoContext } from "./TodoContext";
import type { Todo } from "../types";

interface TodoProviderProps {
  children: ReactNode;
}

export function TodoProvider({ children }: TodoProviderProps) {

  const [todos, setTodos] = useState<Todo[]>([]);

   // Add a new todo
  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text: text,
      completed: false,
    };

     setTodos((prevTodos) => [...prevTodos, newTodo]);
  };


  return (
    <TodoContext.Provider value={{ todos, addTodo }}>
      {children}
    </TodoContext.Provider>
  );
}