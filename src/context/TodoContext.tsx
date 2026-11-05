import {createContext} from "react";
import type {Todo} from "../types";

// Define what our TodoContext will contain
interface TodoContextType {
  todos: Todo[];
}

// Create our context
export const TodoContext = createContext<TodoContextType | undefined>(
  undefined
);