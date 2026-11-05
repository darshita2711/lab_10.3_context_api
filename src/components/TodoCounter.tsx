
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

function TodoCounter() {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error("TodoCounter must be inside TodoProvider");
  }

  const { todos } = context;

  const totalTodos = todos.length;

  const completedTodos = todos.filter(
    (todo) => todo.completed
  ).length;

  const activeTodos = todos.filter(
    (todo) => !todo.completed
  ).length;

  return (
    <div>
      <p>Total Todos: {totalTodos}</p>
      <p>Active Todos: {activeTodos}</p>
      <p>Completed Todos: {completedTodos}</p>
    </div>
  );
}

export default TodoCounter;
