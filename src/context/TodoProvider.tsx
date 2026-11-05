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
  // Mark a todo as completed or incomplete
  const toggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  // Delete a todo
  const deleteTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => todo.id !== id)
    );
  };


  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
}