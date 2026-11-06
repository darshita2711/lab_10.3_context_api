import { useEffect, useState,useCallback } from "react";
import type { ReactNode } from "react";
import { TodoContext } from "./TodoContext";
import type { Todo } from "../types";

interface TodoProviderProps {
  children: ReactNode;
}

export function TodoProvider({ children }: TodoProviderProps) {

  const [todos, setTodos] = useState<Todo[]>(() => {
    try {
    const savedTodos = localStorage.getItem("todos");

    return savedTodos ? JSON.parse(savedTodos) : [];
    } catch (error) {
    console.error("Could not load todos:", error);
    return [];
  }
  });

  // Save todos whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


   // Add a new todo
  const addTodo = useCallback((text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text: text,
      completed: false,
    };

     setTodos((prevTodos) => [...prevTodos, newTodo]);
  }, []);
  // Mark a todo as completed or incomplete
  const toggleTodo = useCallback((id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  }, []);

  // Delete a todo
  const deleteTodo = useCallback((id: number) => {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => todo.id !== id)
    );
  }, []);

  const clearCompleted = useCallback(() => {
  setTodos((prevTodos) =>
    prevTodos.filter((todo) => !todo.completed)
  );
}, []);
  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo, clearCompleted }}>
      {children}
    </TodoContext.Provider>
  );
}