import { useContext } from "react";
import type { Todo } from "../types";
import { TodoContext } from "../context/TodoContext";

interface TodoItemProps {
  todo: Todo;
}

function TodoItem({ todo }: TodoItemProps) {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error("TodoItem must be inside TodoProvider");
  }

  const { toggleTodo, deleteTodo } = context;

  return (
    <div>
       <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />

      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
        }}
      >
        {todo.text}
      </span>

      <button onClick={() => deleteTodo(todo.id)}>
        Delete
      </button>
    </div>
  );
}

export default TodoItem;