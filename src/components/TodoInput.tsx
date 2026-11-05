import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

function TodoInput() {
  const context = useContext(TodoContext);

  const [text, setText] = useState("");

  if (!context) {
    throw new Error("TodoInput must be inside TodoProvider");
  }

  const handleAddTodo = () => {
    if (text.trim() === "") return;

    context.addTodo(text);
    setText("");
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your todo"
      />

      <button onClick={handleAddTodo}>
        Add Todo
      </button>
    </div>
  );
}

export default TodoInput;