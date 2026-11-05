import {createContext} from "react";
import type {Todo} from "../types";

// Define what our TodoContext will contain
interface TodoContextType {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  clearCompleted: () => void;
}

// Create our context
export const TodoContext = createContext<TodoContextType | undefined>(
  undefined
);