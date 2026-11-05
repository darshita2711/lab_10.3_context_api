import type { Todo } from "../types";

interface TodoItemProps {
  todo: Todo;
}

function TodoItem({ todo }: TodoItemProps) {
  return (
    <div>
      <span>{todo.text}</span>
    </div>
  );
}

export default TodoItem;