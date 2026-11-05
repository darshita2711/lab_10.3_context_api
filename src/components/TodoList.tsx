
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import TodoItem from "./TodoItem";

function TodoList() {
  const context = useContext(TodoContext);

  // Check whether TodoList is inside TodoProvider
  if (!context) {
    throw new Error("TodoList must be inside TodoProvider");
  }

  const { todos } = context;

  return (
    <div>
      <h2>My Todos</h2>

      {todos.length === 0 ? (
        <p>No todos yet. Add your first todo!</p>
      ) : (
        todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))
      )}
    </div>
  );
}

export default TodoList;
