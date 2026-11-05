
import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";

function TodoFilter() {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error("TodoFilter must be inside FilterProvider");
  }

  const { filter, setFilter } = context;

  return (
    <div>
      <button
        onClick={() => setFilter("all")}
        disabled={filter === "all"}
      >
        All
      </button>

      <button
        onClick={() => setFilter("active")}
        disabled={filter === "active"}
      >
        Active
      </button>

      <button
        onClick={() => setFilter("completed")}
        disabled={filter === "completed"}
      >
        Completed
      </button>
    </div>
  );
}

export default TodoFilter;
