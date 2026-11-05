
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import TodoItem from "./TodoItem";
import { FilterContext } from "../context/FilterContext";

function TodoList() {
   const todoContext = useContext(TodoContext);
  const filterContext = useContext(FilterContext);

  if (!todoContext || !filterContext) {
    throw new Error("TodoList must be inside the required Providers");
  }

  const { todos } = todoContext;
  const { filter } = filterContext;

  // Filter todos based on selected filter
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") {
      return !todo.completed;
    }

    if (filter === "completed") {
      return todo.completed;
    }

    return true;
  });

  return (
    <div>
      <h2>My Todos</h2>

     {filteredTodos.length === 0 ? (
        <p>No todos found!</p>
      ) : (
        filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))
      )}
    </div>
  );
}

export default TodoList;
