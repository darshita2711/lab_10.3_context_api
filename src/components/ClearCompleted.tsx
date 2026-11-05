
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

function ClearCompleted() {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error("ClearCompleted must be inside TodoProvider");
  }

  const { clearCompleted } = context;

  return (
    <button onClick={clearCompleted}>
      Clear Completed
    </button>
  );
}

export default ClearCompleted;
