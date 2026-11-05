import type { ReactNode } from "react";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface FilterProviderProps {
  children: ReactNode;
}